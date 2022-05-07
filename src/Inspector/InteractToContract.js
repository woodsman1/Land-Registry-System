import Web3 from "web3";

export const addOnwer = async (
  contract,
  new_user_address,
  new_user_name,
  _address
) => {
  try {
    const formated_address = Web3.utils.toChecksumAddress(new_user_address);
    await contract.methods
      .addAndVerifyUser(formated_address, new_user_name)
      .send({ from: _address })
      .then((response) => {
        console.log(response);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
  console.log(alert("transaction confirmed"));
};

export const addAsset = async (
  contract,
  assetId,
  new_user_address,
  assetValue,
  _address
) => {
  try {
    const formated_address = Web3.utils.toChecksumAddress(new_user_address);
    await contract.methods
      .addAsset(assetId, formated_address, assetValue)
      .send({ from: _address })
      .then((response) => {
        console.log(response);
      });
  } catch (err) {
    alert(`[Failed] : ${err}`);
  }
  console.log(alert("transaction confirmed"));
};
