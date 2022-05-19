import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Asset from "./Asset";
import { getAssetsofUser } from "./InteractToContract";

const MyAsset = ({ contract, userAddress }) => {
  const [myAssets, setMyassets] = useState([]);

  useEffect(() => {
    getMyAssets();
  }, []);

  const getMyAssets = async () => {
    await getAssetsofUser(contract, userAddress, setMyassets);
  };

  return (
    <>
    
      <h3> My Assets </h3>
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
          // <tr>
          <Asset
          
            key={index}
            assetId={parseInt(assetId, 10)}
            contract={contract}
            userAddress={userAddress}
          />
          // </tr>
        ))}

        {/* </div> */}
         </tbody>
        </table>
      
      </div>
      </div>
    </>
  );
};

export default MyAsset;
