import Web3 from "web3";

export const getAssetsofUser = async (contract, _address, setMyAssets) => {
  try {
    const formated_address = Web3.utils.toChecksumAddress(_address);
    await contract.methods
      .getAssetsofUser(formated_address)
      .call()
      .then((response) => {
        setMyAssets(response);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
};

export const getAssetDetails = async (
  contract,
  assetId,
  _address,
  setAssetDetail
) => {
  try {
    await contract.methods
      .assets(assetId)
      .call()
      .then((response) => {
        setAssetDetail(response);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
};

export const markAssetForSale = async (
  contract,
  assetId,
  _address,
  setflag,
  flag
) => {
  try {
    await contract.methods
      .markAssetForSale(assetId)
      .send({ from: _address })
      .then((response) => {
        setflag(!flag);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
  // console.log(alert("transaction confirmed"))
};

export const removeAssetFromSale = async (
  contract,
  assetId,
  _address,
  setflag,
  flag
) => {
  try {
    await contract.methods
      .removeAssetFromSale(assetId)
      .send({ from: _address })
      .then((response) => {
        setflag(!flag);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
  // console.log(alert("transaction confirmed"))
};

export const getAllAssetsforSale = async (contract, setMyassets) => {
  try {
    await contract.methods
      .getAssetsForSale()
      .call()
      .then((response) => {
        setMyassets(response);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
};
