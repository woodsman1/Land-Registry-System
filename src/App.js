// https://www.google.com/search?client=firefox-b-d&q=using+react+with+metamask&channel=crow2#kpvalbx=_2OI_XtWsEMef9QPp1LCgAg17
import './App.css';
import React, { useState, useEffect } from 'react';
import Blockie from './component/blockie.js';

const Web3 = require('web3');
const gameData = require('./model/gameData.js');
// const k = require('./config/constants.js');
// const axios = require('axios');

let web3;

if (typeof web3 != 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else if (typeof (window.ethereum) !== 'undefined') {
  web3 = new Web3(window.ethereum);
} else {
  console.log("This Ain't metamask");
}

function App() {

  const ethereum = window.ethereum;
  const [config, setConfig] = useState('');

  // run at init
  useEffect(() => {
    async function fetchData() {
      if (typeof ethereum !== 'undefined') {
        ethereum.enable().then(async function (accounts) {
          const gameSetup = await gameData.initWithWeb3(web3, accounts[0]);
          setConfig(gameSetup);
          console.log(gameSetup);
        }).catch(function (reject) {
          console.log(reject)
        })
      }
    }
    fetchData();
  }, []);

  // run on redraw
  useEffect(() => {
    async function accountChange() {
      if (ethereum) {
        ethereum.on('accountsChanged', async function (accounts) {
          const gameSetup = await gameData.initWithWeb3(web3, accounts[0]);
          setConfig(gameSetup);
          console.log(gameSetup);
        });
      }
    }
    accountChange();

    console.log(config.address)
  }, [ethereum]);

  return (
    <div className="App">
      <header className="App-header">
        {console.log(config)}
        {ethereum && <p>Your ethereum address: {config.address}</p> }
        {!ethereum && <p>Get MetaMask!</p>}
        <Blockie address={config.address}/>
      </header>
    </div>
  );
}

export default App;
