import React, { useState } from "react";
import { rejectAsset } from "./InteractToContract";

const RejectAsset = ({ contract, userAddress }) => {
  const [assetId, setAssetId] = useState(-1);

  const onSubmit = async () => {
    await rejectAsset(contract, assetId, userAddress);
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
                <h4>Reject Asset</h4>
              </div>


                <div class="col-md-12">
                  <label class="labels">Asset ID:</label>
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
              </div>

              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" onClick={onSubmit}>
                  {" "}
                  Reject Asset{" "}
                </button>
              </div>
            </div>
          </div>
        </div>


      {/* <h1>Reject Asset</h1>
      <label>Asset Id: </label>
      <input
        type="number"
        required
        value={assetId}
        onChange={(e) => {
          setAssetId(e.target.value);
        }}
      />
      <br />
      <button type="button" onClick={onSubmit}>
        {" "}
        Reject Asset{" "}
      </button> */}
    </>
  );
};

export default RejectAsset;

// also add function like by entering the id the owners and asset
// detail can be displayed befor rejecting
