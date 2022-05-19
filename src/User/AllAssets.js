import React, { useEffect, useState } from "react";
import {
  getAssetDetails,
  removeAssetFromSale,
  markAssetForSale,
} from "./InteractToContract";
import Web3 from "web3";

const AllAssets = ({ contract, assetId, userAddress }) => {
  const [assetDetail, setAssetDetail] = useState({});
  const [status, setStatus] = useState(1);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    getAssetDetails(contract, assetId, userAddress, setAssetDetail);
  }, [flag]);

  useEffect(() => {
    setStatus(parseInt(assetDetail.status, 10));
  }, [assetDetail]);

  const buyAsset = () => {};

  const assetStatus = ["NOT_EXIST", "APPROVED", "FOR_SALE", "REJECTED"];

  return (
    <>
      <tr>
        {assetDetail.currOwner != Web3.utils.toChecksumAddress(userAddress) ? (
          <>
            <td> {assetId}</td>
            <td> {assetDetail.currOwner} {userAddress} </td>
            <td> {assetDetail.value}</td>
            <td> {assetStatus[assetDetail.status]}</td>
            <td><button onClick={buyAsset}>Buy Asset</button></td>
          </>
        ) : (
          ""
        )}
        </tr>
      <br />
    </>
  );
};

export default AllAssets;
