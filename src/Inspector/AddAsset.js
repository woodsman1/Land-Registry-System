import React, { useState } from "react";
import { addAsset } from "./InteractToContract";

const AddAsset = ({ contract, userAddress }) => {
  const [assetId, setAssetId] = useState(-1);
  const [ownerAddress, setOwnerAddress] = useState("");
  const [assetValue, setAssetValue] = useState(0);

  const onSubmit = async () => {
    await addAsset(contract, assetId, ownerAddress, assetValue, userAddress);
  };

  return (
    <>
  <div id="layoutSidenav_content" />
      <main />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>Add Asset</h4>
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Asset ID: </label>
                  <input
                    type="number"
                    required
                    class="form-control"
                    value={assetId}
                    onChange={(e) => {
                      setAssetId(e.target.value);
                    }}
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Asset Owner Address: </label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={ownerAddress}
                    onChange={(e) => {
                      setOwnerAddress(e.target.value);
                    }}
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Asset Value : </label>
                  <input
                    type="number"
                    required
                    class="form-control"
                    value={assetValue}
                    onChange={(e) => {
                      setAssetValue(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" onClick={onSubmit}>
                  {" "}
                  Add Asset{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <h1>Add Inspector</h1>
      <label>Asset Id Number : </label>
      <input
        type="number"
        required
        value={assetId}
        onChange={(e) => {
          setAssetId(e.target.value);
        }}
      />
      <br />
      <label>Asset Owner Address: </label>
      <input
        type="text"
        required
        value={ownerAddress}
        onChange={(e) => {
          setOwnerAddress(e.target.value);
        }}
      />
      <br />
      <label>Asset Value : </label>
      <input
        type="number"
        required
        value={assetValue}
        onChange={(e) => {
          setAssetValue(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={onSubmit}>
        {" "}
        Add Asset{" "}
      </button> */}
    </>
  );
};

export default AddAsset;
