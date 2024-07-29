require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x6cc7a3b15f3ddfda591e64070e971b53575b7319355ed437e879a68d5a529941"],
    },
  },
};
