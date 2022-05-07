import React, { useEffect, useState } from 'react'
import { getAssetDetails, removeAssetFromSale, markAssetForSale } from './InteractToContract';

const AssetSale = ({assetId, contract, userAddress}) => {
  const [assetDetail, setAssetDetail] = useState({});
  const [status, setStatus] = useState(1);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    getAssetDetails(contract, assetId, userAddress,setAssetDetail)
  }, [flag])

  useEffect(() => {
    setStatus(parseInt(assetDetail.status, 10));
  }, [assetDetail]);

  const changeStatus = () => {
    if(status == 1){
      markAssetForSale(contract, assetId, userAddress, setflag, flag)
    }else if (status == 2){
      // remove from sale
      removeAssetFromSale(contract, assetId, userAddress, setflag, flag)
    }
  }
  

  const assetStatus = ["NOT_EXIST", "APPROVED", "FOR_SALE", "REJECTED"]


  return (
    <>
    <div className='asset'>
      { (assetDetail.status == 2) ? <>
        <h4>Asset Id : {assetId}</h4>
        <p>Owner Address : {assetDetail.currOwner}</p>
        <p>Property Value : $ {assetDetail.value}</p>
        <p>assetStatus : {assetStatus[assetDetail.status]}</p>
        {(status == 1) ? (
          <button onClick={changeStatus}>Mark Asset for Sale</button>
        ):(
          ""
        )
        }
        {(status == 2) ? (
          <button onClick={changeStatus}>Remove Asset from Sale</button>
        ):(
          ""
        )
        }
      </> :  ""
      
    }
    </div>
    <br/>
    </>
  )
}

export default AssetSale
