const k = require('../config/constants.js');

let erc20;
// let contract;

module.exports = {

  initWithWeb3: async function (web3, account){

    erc20 = new web3.eth.Contract(k.abiErc20, k.erc20Address);
    // contract = new web3.eth.Contract(k.abiContract, k.contractAddress);

    const ercBal = await(erc20.methods.balanceOf(account)).call();
    const ethBal = await web3.eth.getBalance(account);

    return {ercBal:ercBal, ethBal:ethBal, address:account}
  }

};