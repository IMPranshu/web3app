require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/qX_w4j0B3NeCPIT4QdviaMcrPpPdBSeZ',
      accounts: ['79f6650fdf7b2a0decbd1561cb8474b3095eb5721ffac6e2de20548bfedcaf12'],
    }

  },
};