import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // return (
  //   <>
  //     <nav className='navbar'>
  //       <h1>User</h1>
  //       <div className='links'>
  //         <Link to='/' style={{'marginRight': "15px"}}>My Assets</Link>
  //         <Link to='/my-asset-on-sale' style={{'marginRight': "15px"}}>My Assets On Sale</Link>
  //         <Link to='/all-asset-on-sale' >All Asset on Sale</Link>
  //         <h1></ h1>
  //       </div>
  //     </nav>
  //   </>
  // );
  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="#">
          Users
        </a>
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link spacing" href="#">
              <Link to="/" style={{ marginRight: "15px" }}>
                My Assets
              </Link>
            </a>
            <a className="nav-link spacing" href="#">
              <Link to="/my-asset-on-sale">My Assets on Sale</Link>
            </a>
            <a className="nav-link spacing" href="#">
              <Link to="/all-asset-on-sale">All Assets on Sale</Link>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar


// his own assets (mark asset for sale) (edit value of assets)
// other assets for sale


// User Details
// My Lands
// Land Gallery
