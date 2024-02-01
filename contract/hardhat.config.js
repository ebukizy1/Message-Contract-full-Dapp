require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
    networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.AlchemyUrl,
      accounts: [process.env.privateKey]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },

};
