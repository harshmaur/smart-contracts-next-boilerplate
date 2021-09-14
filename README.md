## Boilerplate for Smart Contracts App

### Features

- NextJS + Typescript
- Hardhat + Ethers (Compile, Tests)
- Prettier + eslint
- Tailwindcss + React Icons + headlessui
- Sample Contract with tests

Look at package.json for scripts that you can run.

Check out master branch for Truffle + Web3 setup

### IDE Setup

1. Use VSCode as your editor
2. Install Solidity extension by Juan Blanco
3. Install Prettier Extension
4. Install Eslint Extension
5. Configure Solidity Formatter and set it to Prettier.

### Hardhat config

1. Copy .envrc.example to .envrc
2. Install and configure direnv
3. Add your WALLET_MNEMONIC and RINKEBY_PROJECT_URI to .envrc file
4. Alternatively if you do not need Rinkeby, you can comment out the network in the `hardhat.config.ts` file.

### Future

- [ ] Add OZ contracts
- [ ] Create an ERC20 Token Contract
- [ ] Create an ERC721 Token Contract
- [ ] Integrate Wallet Provider on Frontend
