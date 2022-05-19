import React, { useState } from "react";
import { addOnwer } from "./InteractToContract";

const AddLandOwner = ({ contract, userAddress }) => {
  const [ownerAddress, setOwnerAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const onSubmit = async () => {
    console.log(ownerAddress);
    console.log(ownerName);

    await addOnwer(contract, ownerAddress, ownerName, userAddress);
  };

  // return (
  //   <>
  //     <h1>Add Inspector</h1>
  //     <label>Owner Address: </label>
  //     <input
  //       type="text"
  //       required
  //       value={ownerAddress}
  //       onChange={(e) => {
  //         setOwnerAddress(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <label>Owner Name: </label>
  //     <input
  //       type="text"
  //       required
  //       value={ownerName}
  //       onChange={(e) => {
  //         setOwnerName(e.target.value);
  //       }}
  //     />
  //     <br />
  //     <button type="button" onClick={onSubmit}>
  //       {" "}
  //       Add New Owner{" "}
  //     </button>
  //   </>
  // );

  return (
    <>
      <div id="layoutSidenav_content" />
      <main />
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-6 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4>Add Land Owner</h4>
              </div>

              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Owner Address</label>
                  <input
                    type="text"
                    class="form-control"
                    required
                    value={ownerAddress}
                    onChange={(e) => {
                      setOwnerAddress(e.target.value);
                    }}
                  />
                </div>

                <div class="col-md-12">
                  <label class="labels">Owner Name:</label>
                  <input
                    type="text"
                    required
                    class="form-control"
                    value={ownerName}
                    onChange={(e) => {
                      setOwnerName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div class="mt-5 text-center">
                <button
                  class="btn btn-primary profile-button"
                  onClick={onSubmit}
                >
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

export default AddLandOwner;
