import Web3 from 'web3';
import { ContractAbi, contract_address } from './ContractAbi';
import { init } from './WalletConnection/Web3Client';


let land_registy_contract = NaN;
let isInitialized = false;
let selectedAccount;

const connectToContract = async () => {
  let provider = window.ethereum;
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();
  
  land_registy_contract = new web3.eth.Contract(ContractAbi, contract_address);
  
  isInitialized = true
}



export const getUsers = async (land_owner_address) => {
  if(!isInitialized){
    await init();
    await connectToContract();
  }

  const user = Web3.utils.toChecksumAddress(land_owner_address);
  land_registy_contract.methods.users(user).call().then((response)=>{
      console.log(response)
    });
}