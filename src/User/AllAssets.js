import React, { useEffect, useState } from 'react'
import { getAssetDetails, removeAssetFromSale, markAssetForSale } from './InteractToContract';
import Web3 from 'web3';

const AllAssets = ({contract, assetId, userAddress}) => {
  const [assetDetail, setAssetDetail] = useState({});
  const [status, setStatus] = useState(1);
  const [flag, setflag] = useState(true);

  useEffect(() => {
    getAssetDetails(contract, assetId, userAddress,setAssetDetail)
  }, [flag])

  useEffect(() => {
    setStatus(parseInt(assetDetail.status, 10));
  }, [assetDetail]);

  const buyAsset = () => {
    
  }

  const assetStatus = ["NOT_EXIST", "APPROVED", "FOR_SALE", "REJECTED"]

  return (
    <>
    <div className='asset'>
    { ( assetDetail.currOwner != Web3.utils.toChecksumAddress(userAddress)) ? <>
        <h4>Asset Id : {assetId}</h4>
        <p>Owner Address : {assetDetail.currOwner} {userAddress}</p>
        <p>Property Value : $ {assetDetail.value}</p>
        <p>assetStatus : {assetStatus[assetDetail.status]}</p>
        <button onClick={buyAsset}>Buy Asset</button>
      </> :  ""
      
    }
    </div>
    <br/>
    </>
  )
}

export default AllAssets
