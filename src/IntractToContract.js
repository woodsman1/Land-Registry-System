import Web3 from "web3";
import { ContractAbi, contract_address } from "./ContractAbi";

export const connectToContract = async () => {
  let provider = window.ethereum;
  const web3 = new Web3(provider);
  const networkId = await web3.eth.net.getId();

  return new web3.eth.Contract(ContractAbi, contract_address);
};

export const getUserType = async (contract, _address, setUserType) => {
  const user = Web3.utils.toChecksumAddress(_address);
  await contract.methods
    .getUserType(user)
    .call()
    .then((response) => {
      setUserType(response);
    });
};

export const getUsers = async (contract, land_owner_address) => {
  const user = Web3.utils.toChecksumAddress(land_owner_address);
  contract.methods
    .users(user)
    .call()
    .then((response) => {
      console.log(response);
    });
};
