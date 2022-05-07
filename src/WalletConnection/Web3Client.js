export const getAccount = async () => {
  let provider = window.ethereum;

  if (typeof provider !== "undefined") {
    // metamask is installed
    let account_address = "";
    await provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        // console.log(accounts[0])
        account_address = accounts[0];
      })
      .catch((err) => {
        console.log(err);
        return "error";
      });
    return account_address;
  }

  console.log("MetaMask wallet not found");
};
