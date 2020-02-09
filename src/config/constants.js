const erc20Abi = require('./abiWhackers.js');
const contractAbi = require('./abiWhackd.js');

module.exports = {
  contractAddress: '0xa843e9f51d11dfc456fc76aceb1ff0d05ac011fa',
  erc20Address: '0xc49a8c2fbb6ac8a85f0302523ba035755f04be3e',
  abiContract: erc20Abi.abi(),
  abiErc20: contractAbi.abi()

};