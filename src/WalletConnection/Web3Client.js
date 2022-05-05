import Web3 from 'web3';

let selectedAccount;

export const init = async () => { 
  
  let provider = window.ethereum;

  if(typeof provider !== 'undefined'){
    console.log('here')
    // metamask is installed   
    
    provider.request({method: 'eth_requestAccounts'}).then(accounts => {
      selectedAccount = accounts[0];
      console.log(accounts)
      console.log(`Selected account changed to ${selectedAccount}`);
    }).catch(err => {
      console.log(err);
    })

    window.ethereum.on('accountsChanged', function (accounts) {
			selectedAccount = accounts[0];
			console.log(`Selected account changed to ${selectedAccount}`);
		});
  }
}