import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Inspector</h1>
        <div className="links">
          <Link to="/" style={{ marginRight: "15px" }}>
            Add Land Owner
          </Link>
          <Link to="/add-asset">Add Assets</Link>
          <h1></h1>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
