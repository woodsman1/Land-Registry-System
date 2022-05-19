import React, { useEffect, useState } from "react";
import { getAllAssetsforSale } from "./InteractToContract";
import AllAssets from "./AllAssets";

const AssetsForSale = ({ contract, userAddress }) => {
  const [myAssets, setMyassets] = useState([]);

  useEffect(() => {
    getMyAssets();
  }, []);

  const getMyAssets = async () => {
    await getAllAssetsforSale(contract, setMyassets);
  };

  return (
    <>
     <h3> All Assets For Sale </h3>
      <div class="card mb-4">
                        
      <div class="card-body">
      
      <table class="table table-hover">
      
      
        <thead>
      <tr>
      <th> Asset ID </th>
        <th> Owner Address </th>
        <th> Property Value </th>
        <th> Asset Status </th>
        <th> Choose Action </th>
      </tr>
      </thead>
      <tbody>
      {/* <div className="assets-details"> */}
        
        {myAssets.map((assetId, index) => (
          <AllAssets
            key={index}
            assetId={parseInt(assetId, 10)}
            contract={contract}
            userAddress={userAddress}
          />
        ))}
        </tbody>
        </table>
      
      </div>
      </div>
    </>
  );
};
export default AssetsForSale;
