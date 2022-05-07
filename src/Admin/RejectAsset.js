import React, { useState } from 'react'
import { rejectAsset } from './InteractToContract';

const RejectAsset = ({contract, userAddress}) => {

  const [assetId, setAssetId] = useState(-1);

  const onSubmit = async () => {
    await rejectAsset(contract, assetId, userAddress)
  }

  return (
    <>
     <h1>Reject Asset</h1> 
      <label>Asset Id: </label>
      <input
        type="number"
        required
        value={assetId}
        onChange={(e) => {
          setAssetId(e.target.value);
        }}
      />
      <br/>
      <button type="button" onClick={onSubmit} > Reject Asset </button>
    </>
  )
}

export default RejectAsset



// also add function like by entering the id the owners and asset
// detail can be displayed befor rejecting