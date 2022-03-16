require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/PlnOdgpEOAY4NWoPlL_lQbBsTCVBmR7d',
      accounts: ['08d39866bb880772d5cca49ef9aa1177e7a9b9537ea083bee779e0a20e494a48'],
    },
  },
};