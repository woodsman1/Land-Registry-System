// https://www.google.com/search?client=firefox-b-d&q=using+react+with+metamask&channel=crow2#kpvalbx=_2OI_XtWsEMef9QPp1LCgAg17
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { init } from './WalletConnection/Web3Client';
import { getUsers } from './IntractToContract';
// const k = require('./config/constants.js');
// const axios = require('axios');

function App() {

  // set the user as unverfied initially
  const [userType, setUserType] = useState(0);
  let land_registry_contract;

  // useEffect(() => {
  //   // setUserType
    
  //   // get deployed contract

  // }, []);

  const fetchUser = () => {
    getUsers('0x7BDBd09B7137De3763D017e872039d1758DAB279');
  }

  return (
    <div className="App">
			<button onClick={() => fetchUser()}>Refresh balance</button>
		</div>
  );
}

export default App;
