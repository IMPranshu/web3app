require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();
const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks:{
    hardhat:{},
    ropsten:{
      url:API_URL,
      accounts:[`0x${PRIVATE_KEY}`]
    }
  }
};
