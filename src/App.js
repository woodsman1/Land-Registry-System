// https://www.google.com/search?client=firefox-b-d&q=using+react+with+metamask&channel=crow2#kpvalbx=_2OI_XtWsEMef9QPp1LCgAg17

import React, { useState } from 'react';
import './App.css';

function App() {

  const ethereum = window.ethereum;
  const [addr, setAddr] = useState('');

  if(ethereum){
    ethereum.on('accountsChanged', function(accounts){
      console.log(accounts[0]);
      if(ethereum.isMetaMask){ console.log("Using Meta Mask")}
      setAddr(accounts[0]);
    });

    ethereum.enable().then(function(accounts){
      console.log(accounts)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {ethereum && <p>Your ethereum address: {addr}</p> }
        {!ethereum && <p>Get Metamask!</p>}
      </header>
    </div>
  );
}

export default App;
