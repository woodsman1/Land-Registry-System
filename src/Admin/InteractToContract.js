import Web3 from 'web3';



export const addInsepctor = async (contract, new_user_address, new_user_name, _address) => {
  const formated_address = Web3.utils.toChecksumAddress(new_user_address);
  try{
    await contract.methods.addInspector(formated_address, new_user_name)
    .send({from: _address})
    .then(response => {
      console.log(response)
    });
  }catch (err) {
    alert(`[Failed] : ${err}`)
  }
  console.log(alert("transaction confirmed"))
} 