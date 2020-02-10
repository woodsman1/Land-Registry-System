const k = require('../config/constants.js');

let erc20;
// let contract;

module.exports = {

  initWithWeb3: async function (web3, account){
    const network = await web3.eth.net.getNetworkType();
    if (network === "main"){
      console.log("there is no contract on mainnet at the moment.");
      return false;
    } else if(network === "ropsten"){
      erc20 = new web3.eth.Contract(k.abiErc20, k.erc20Address);
      // contract = new web3.eth.Contract(k.abiContract, k.contractAddress);
      const ercBal = await(erc20.methods.balanceOf(account)).call();
      const ethBal = await web3.eth.getBalance(account);
      return {ercBal: ercBal, ethBal: ethBal, address: account}
    } else if (network === "private") {
      console.log("there is no contract on private network at the moment.");
      return false;
    } else {
      console.log("Cannot detect network.");
      return false;
    }
  }
};