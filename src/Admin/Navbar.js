import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="#">
          Admin
        </a>
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link spacing" href="#">
              <Link to="/" style={{ marginRight: "15px" }}>
                Add Inspector
              </Link>
            </a>
            <a className="nav-link spacing" href="#">
              <Link to="/reject-asset">Reject Assets</Link>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
