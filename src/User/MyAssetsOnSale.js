import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import AssetSale from './AssetSale';
import { getAssetsofUser } from './InteractToContract';

const MyAssetsOnSale = ({contract, userAddress}) => {

  const [myAssets, setMyassets] = useState([]);

  useEffect(() => {
    getMyAssets()
  }, []);

  const getMyAssets = async () =>{
    await getAssetsofUser(contract, userAddress, setMyassets);
  }

  return (
    <>
      <h3> My Assets </h3>
      <div className='assets-details'>
        {myAssets.map((assetId, index) => 
          <AssetSale
          key={index} 
          assetId = {parseInt(assetId, 10)}
          contract = {contract}
          userAddress = {userAddress}
          />
        )}
      </div>
    </>
  )
}

export default MyAssetsOnSale
