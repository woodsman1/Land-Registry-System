import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddAsset from "./AddAsset";
import AddLandOwner from "./AddLandOwner";
import Navbar from "./Navbar";

const Inspector = ({ contract, userAddress }) => {
  return (
    <>
      <Router>
        <div className="inspector-class">
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <AddLandOwner contract={contract} userAddress={userAddress} />
                }
              />
              <Route
                exact
                path="/add-asset"
                element={
                  <AddAsset contract={contract} userAddress={userAddress} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Inspector;

// add and verfiy user
// add Asset
