// https://www.google.com/search?client=firefox-b-d&q=using+react+with+metamask&channel=crow2#kpvalbx=_2OI_XtWsEMef9QPp1LCgAg17
import './App.css';
import React, { useState, useEffect } from 'react';
import Blockie from './component/blockie.js';
import Web3 from 'web3';

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
  let [network, setNetwork] = useState(true);

  // run at init
  useEffect(() => {
    async function fetchData() {
      if (typeof ethereum !== 'undefined') {
        ethereum.autoRefreshOnNetworkChange = false;
        ethereum.enable().then(async function (accounts) {
          const gameSetup = await gameData.initWithWeb3(web3, accounts[0]);
          if(gameSetup){
            setConfig(gameSetup);
          } else {
            setNetwork(false);
          }
        }).catch(function (reject) {
          console.log(reject)
        })
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  }, [ethereum, config.address]);

  return (
    <div className="App">
      <header className="App-header">
        {ethereum && network && <p>Your ethereum address: {config.address}</p> }
        {!ethereum && !network && <p>Get MetaMask!</p>}
        {ethereum && !network && <p>Contract address on this network doesn't exist!</p>}
        <Blockie address={config.address}/>
      </header>
    </div>
  );
}

export default App;
