import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <h1>Admin</h1>
        <div className='links'>
          <Link to='/' style={{'marginRight': "15px"}}>Add Inspector</Link>
          <Link to='/reject-asset' >Reject Assets</Link>
          <h1></ h1>
        </div>

      </nav>
    </>
  );
}

export default Navbar
