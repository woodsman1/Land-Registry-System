
import React, { useState, useEffect } from "react";

import { getAccount } from "./WalletConnection/Web3Client";
import { getUsers, getUserType, connectToContract } from "./IntractToContract";

import Admin from "./Admin/Admin";
import Inspector from "./Inspector/Inspector";
import User from "./User/User";

function App() {
  const [userAddress, setUserAddress] = useState("");
  const [userType, setUserType] = useState(-1);
  const [contract, setContract] = useState(undefined);

  useEffect(() => {
    // get deployed contract
    getContract();
    getUserAddress();
    // console.log("contract created")
  }, []);

  const getContract = async () => {
    setContract(await connectToContract());
  };

  const getUserAddress = async () => {
    setUserAddress(await getAccount());
  };

  useEffect(() => {
    if (userAddress !== "" && contract !== undefined) {
      getUserType(contract, userAddress, setUserType);
    }
  }, [userAddress, contract]);

  const handleAccountsChanged = async () => {
    const _address = await getAccount();
    setUserAddress(_address);
  };

  window.ethereum.on("accountsChanged", handleAccountsChanged);

  if (userType == 0) {
    return (
      <>
        <div className="App">
          <Admin contract={contract} userAddress={userAddress} />
        </div>
      </>
    );
  } else if (userType == 1) {
    return (
      <>
        <div className="App">
          <Inspector contract={contract} userAddress={userAddress} />
        </div>
      </>
    );
  } else if (userType == 2) {
    return (
      <>
        <div className="App">
          <User contract={contract} userAddress={userAddress} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="App">[Please Wait] : Connecting to MetaMask</div>
      </>
    );
  }
}

export default App;
