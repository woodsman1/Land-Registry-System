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
      <h3> All Assets for Sale  </h3>
      <div className="assets-details">
        {myAssets.map((assetId, index) => (
          <AllAssets
            key={index}
            assetId={parseInt(assetId, 10)}
            contract={contract}
            userAddress={userAddress}
          />
        ))}
      </div>
    </>
  );
};
export default AssetsForSale;
