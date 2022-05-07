import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <h1>User</h1>
        <div className='links'>
          <Link to='/' style={{'marginRight': "15px"}}>My Assets</Link>
          <Link to='/my-asset-on-sale' style={{'marginRight': "15px"}}>My Assets On Sale</Link>
          <Link to='/all-asset-on-sale' >All Asset on Sale</Link>
          <h1></ h1>
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
