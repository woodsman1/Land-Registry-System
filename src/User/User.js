import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MyAsset from "./MyAsset";
import MyAssetOnSale from "./MyAssetsOnSale";
import AssetForSale from "./AssetsForSale";

const User = ({ contract, userAddress }) => {
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
                  <MyAsset contract={contract} userAddress={userAddress} />
                }
              />
              <Route
                exact
                path="/my-asset-on-sale"
                element={
                  <MyAssetOnSale
                    contract={contract}
                    userAddress={userAddress}
                  />
                }
              />
              <Route
                exact
                path="/all-asset-on-sale"
                element={
                  <AssetForSale contract={contract} userAddress={userAddress} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default User;
