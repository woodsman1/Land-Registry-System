// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract LandRegistry{
    address admin;

    enum AssetStatus {NOT_EXIST, APPROVED, FOR_SALE, REJECTED}
    enum UserRole {VISITOR, INSPECTOR, VERIFIED_USER}

    struct User{
        address userAddress;
        string name;
        bool verified;
        UserRole role;
        uint256[] propertyOwned; // assetId owned by the user
    }

    struct AssetDetail{
        address payable currOwner;   // make more than one owners of the land
        uint256 value;
        AssetStatus status;
    }

    mapping(uint256 => AssetDetail) public assets;   // ID => Asset
    mapping(address => User) public users;  // address => User

    uint256[] public assets_for_sale;

    constructor(){
        admin = msg.sender;
    }

    modifier onlyAdmin{
        require(msg.sender == admin);
        _;
    }

    modifier onlyOwner(uint256 _assetId){
        require(assets[_assetId].currOwner == msg.sender);
        _;
    }

    modifier onlyInspector{
        require(users[msg.sender].role == UserRole.INSPECTOR);
        _;
    }

    function addAndVerifyUser(address _newUser, string memory _name) public onlyInspector returns(bool){
        // if user is not verified and is visitor then only verify it
        require(users[_newUser].verified == false);
        require(users[_newUser].role == UserRole.VISITOR);
        uint256[] memory temp;              // doubt in this code
        users[_newUser] = User(_newUser, _name, true, UserRole.VERIFIED_USER, temp);
        return true;
    }

    function addInspector(address _newUser, string memory _name) public onlyAdmin returns(bool){
        require(users[_newUser].verified == false);
        require(users[_newUser].role == UserRole.VISITOR);
        uint256[] memory temp;
        users[_newUser] = User(_newUser, _name, true, UserRole.INSPECTOR, temp);
        return true;
    }

    function addAsset(uint256 _assetId, address _owner, uint256 value) public onlyInspector returns(bool){
        require(assets[_assetId].status == AssetStatus.NOT_EXIST);
        require(users[_owner].verified == true);
        assets[_assetId] = AssetDetail(payable(_owner), value, AssetStatus.APPROVED);
        users[_owner].propertyOwned.push(_assetId);
        return true;
    }

    function rejectAsset(uint256 _assetId) public onlyAdmin returns(bool){
        assets[_assetId].status = AssetStatus.REJECTED;
        return true;
    }

    function markAssetForSale(uint256 _assetId) public onlyOwner(_assetId) returns(bool){
        assets[_assetId].status = AssetStatus.FOR_SALE;
        assets_for_sale.push(_assetId);
        return true;
    }

    function removeAssetFromSale(uint256 _assetId) public onlyOwner(_assetId) returns(bool){
        // remove from sale only if it is for under sale status
        require(assets[_assetId].status == AssetStatus.FOR_SALE);
        assets[_assetId].status = AssetStatus.APPROVED;

        // burn _assetId from asset_for_sale
        for(uint index=0; index<assets_for_sale.length; index++){
            if(assets_for_sale[index] == _assetId){
                assets_for_sale[index] = assets_for_sale[assets_for_sale.length - 1];
                assets_for_sale.pop();
                break;
            }
        }
        return true;
    }
    
    function setValueofAsset(uint256 _assetId, uint256 _value) public onlyOwner(_assetId){
        assets[_assetId].value = _value;
    }

    function getAssetsForSale()public view returns( uint256  [] memory){
    return assets_for_sale;
    }

    function getAssetDetails(uint256 ID) public view returns(string memory){
        return users[assets[ID].currOwner].name;
    }

    function getUserType(address _address) public view returns(uint){
        if(_address == admin){
            // admin
            return 0;
        }else{
            if(users[_address].verified){
                if (users[_address].role == UserRole.VERIFIED_USER){
                    // user
                    return 2;
                }else{
                    // inspector
                    return 1;
                }
            }
            // Visitor
            return 3;
        }
    }

    function getAssetsofUser(address _address) public view returns(uint256[] memory){
        return users[_address].propertyOwned;
    }

}
