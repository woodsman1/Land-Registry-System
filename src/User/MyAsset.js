import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Asset from './Asset';
import { getAssetsofUser } from './InteractToContract';

const MyAsset = ({contract, userAddress}) => {

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
          <Asset 
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

export default MyAsset