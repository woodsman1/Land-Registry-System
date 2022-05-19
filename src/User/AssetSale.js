import React, { useEffect, useState } from "react";
import {
  getAssetDetails,
  removeAssetFromSale,
  markAssetForSale,
} from "./InteractToContract";

const AssetSale = ({ assetId, contract, userAddress }) => {
  const [assetDetail, setAssetDetail] = useState({});
  const [status, setStatus] = useState(1);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    getAssetDetails(contract, assetId, userAddress, setAssetDetail);
  }, [flag]);

  useEffect(() => {
    setStatus(parseInt(assetDetail.status, 10));
  }, [assetDetail]);

  const changeStatus = () => {
    if (status == 1) {
      markAssetForSale(contract, assetId, userAddress, setflag, flag);
    } else if (status == 2) {
      // remove from sale
      removeAssetFromSale(contract, assetId, userAddress, setflag, flag);
    }
  };

  const assetStatus = ["NOT_EXIST", "APPROVED", "FOR_SALE", "REJECTED"];

  return (
    <>
        {assetDetail.status == 2 ? (
          <tr>
            <td>Asset Id : {assetId}</td>
            <td>Owner Address : {assetDetail.currOwner}</td>
            <td>Property Value : $ {assetDetail.value}</td>
            <td>assetStatus : {assetStatus[assetDetail.status]}</td>
            <td> {status == 1 ? (
              <button onClick={changeStatus}>Mark Asset for Sale</button>
            ) : (
              ""
            )}
            {status == 2 ? (
              <button onClick={changeStatus}>Remove Asset from Sale</button>
            ) : (
              ""
            )}
          
        </td>
        </tr>
        ): ("")} 
    </>
  );
  // return (
  //   <>
  //     <tr>
  //       <td> {assetId} </td>
  //       <td>{assetDetail.currOwner} </td>
  //       <td> {assetDetail.value} </td>
  //       <td> {assetStatus[assetDetail.status]} </td>
  //       <td>
  //         {" "}
  //         {status == 1 ? (
  //           <button onClick={changeStatus}>Mark Asset for Sale</button>
  //         ) : (
  //           ""
  //         )}
  //         {status == 2 ? (
  //           <button onClick={changeStatus}>Remove Asset from Sale</button>
  //         ) : (
  //           ""
  //         )}
  //       </td>
  //     </tr>
  //     {/* <h4>Asset Id : {assetId}</h4>
  //       <p>Owner Address : {assetDetail.currOwner}</p>
  //       <p>Property Value : $ {assetDetail.value}</p>
  //       <p>assetStatus : {assetStatus[assetDetail.status]}</p> */}

  //     <br />
  //   </>
  // );
};

export default AssetSale;
