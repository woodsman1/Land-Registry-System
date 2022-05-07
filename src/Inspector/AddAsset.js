import React, { useState } from 'react'
import { addAsset } from './InteractToContract';

const AddAsset = ({contract, userAddress}) => {

  const [assetId, setAssetId] = useState(-1);
  const [ownerAddress, setOwnerAddress] = useState("");
  const [assetValue, setAssetValue] = useState(0);

  const onSubmit = async () => {
    await addAsset(contract, assetId, ownerAddress, assetValue, userAddress)
  }

  return (
    <>
      <h1>Add Inspector</h1> 
      <label>Asset Id Number : </label>
      <input
        type="number"
        required
        value={assetId}
        onChange={(e) => {
          setAssetId(e.target.value);
        }}
      />
      <br/>
      <label>Asset Owner Address:  </label>
      <input
        type="text"
        required
        value={ownerAddress}
        onChange={(e) => {
          setOwnerAddress(e.target.value);
        }}
      />
      <br/>
      <label>Asset Value :  </label>
      <input
        type="number"
        required
        value={assetValue}
        onChange={(e) => {
          setAssetValue(e.target.value);
        }}
      />
      <br/>
      <button type="button" onClick={onSubmit} > Add Asset </button>
    </>
  )
}

export default AddAsset
