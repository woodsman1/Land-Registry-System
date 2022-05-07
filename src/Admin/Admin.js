import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddInspector from "./AddInspector";
import Navbar from "./Navbar";
import RejectAsset from "./RejectAsset";

const Admin = ({ contract, userAddress }) => {
  return (
    <>
      <Router>
        <div className="admin-class">
          <Navbar />
          <div className="content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <AddInspector contract={contract} userAddress={userAddress} />
                }
              />
              <Route
                exact
                path="/reject-asset"
                element={
                  <RejectAsset contract={contract} userAddress={userAddress} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Admin;
