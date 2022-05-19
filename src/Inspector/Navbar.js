import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="#">
          Inspector
        </a>
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link spacing" href="#">
              <Link to="/add-asset" style={{ marginRight: "15px" }}>
                Add Asset
              </Link>
            </a>
            <a className="nav-link spacing" href="/AddLandOwner">
              <Link to="/">Add Land Owner</Link>
            </a>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar">
        <h1>Inspector</h1>
        <div className="links">
          <Link to="/" style={{ marginRight: "15px" }}>
            Add Land Owner
          </Link>
          <Link to="/add-asset">Add Assets</Link>
          <h1></h1>
        </div>
      </nav> */}
    </>
  );
};

export default Navbar;
