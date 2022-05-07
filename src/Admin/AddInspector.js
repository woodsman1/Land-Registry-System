import React, { useState } from 'react'
import { addInsepctor } from './InteractToContract'

const AddInspector = ({contract, userAddress}) => {

  const [inspectorAddress, setInspectorAddress] = useState("")
  const [inspectorName, setInspectorName] = useState("")

  const onSubmit = async () => {
    console.log(inspectorAddress);
    console.log(inspectorName);

    await addInsepctor(contract, inspectorAddress, inspectorName, userAddress);
    
  }

  return (
    <>
      <h1>Add Inspector</h1> 
      <label>Owner Address: </label>
      <input
        type="text"
        required
        value={inspectorAddress}
        onChange={(e) => {
          setInspectorAddress(e.target.value);
        }}
      />
      <br/>
      <label>Owner Name:  </label>
      <input
        type="text"
        required
        value={inspectorName}
        onChange={(e) => {
          setInspectorName(e.target.value);
        }}
      />
      <br/>
      <button type="button" onClick={onSubmit} > Add New Owner </button>
    </>
  )
}

export default AddInspector
