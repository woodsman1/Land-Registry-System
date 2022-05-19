import React, { useState } from "react";
import { addInsepctor } from "./InteractToContract";

const AddInspector = ({ contract, userAddress }) => {
  const [inspectorAddress, setInspectorAddress] = useState("");
  const [inspectorName, setInspectorName] = useState("");

  const onSubmit = async () => {
    console.log(inspectorAddress);
    console.log(inspectorName);

    await addInsepctor(contract, inspectorAddress, inspectorName, userAddress);
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
                <h4>Add Inspector</h4>
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Owner Address</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    value={inspectorAddress}
                    onChange={(e) => {
                      setInspectorAddress(e.target.value);
                    }}
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Owner Name:</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={inspectorName}
                    onChange={(e) => {
                      setInspectorName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" onClick={onSubmit}>
                  {" "}
        Add New Owner{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInspector;
