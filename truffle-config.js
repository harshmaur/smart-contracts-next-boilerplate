/* eslint-disable @typescript-eslint/no-var-requires */
const HDWalletProvider = require('@truffle/hdwallet-provider')
const mnemonic = process.env.WALLET_MNEMONIC

module.exports = {
  networks: {
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(mnemonic, RINKEBY_PROJECT_URI)
      },
      network_id: 4,
    },
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
  },
  contracts_build_directory: './src/abi/',
  contracts_directory: './src/contracts/',
  compilers: {
    solc: {
      version: '0.8.4',
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
