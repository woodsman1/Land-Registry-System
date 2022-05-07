import React, { useState } from 'react'
import { addOnwer } from './InteractToContract'

const AddLandOwner = ({contract, userAddress}) => {
  const [ownerAddress, setOwnerAddress] = useState("")
  const [ownerName, setOwnerName] = useState("")
  
  const onSubmit = async () => {
    console.log(ownerAddress);
    console.log(ownerName);

    await addOnwer(contract, ownerAddress, ownerName, userAddress)
  }

  return (
    <>
      <h1>Add Inspector</h1> 
      <label>Owner Address: </label>
      <input
        type="text"
        required
        value={ownerAddress}
        onChange={(e) => {
          setOwnerAddress(e.target.value);
        }}
      />
      <br/>
      <label>Owner Name:  </label>
      <input
        type="text"
        required
        value={ownerName}
        onChange={(e) => {
          setOwnerName(e.target.value);
        }}
      />
      <br/>
      <button type="button" onClick={onSubmit} > Add New Owner </button>
    </>
  )
}

export default AddLandOwner
