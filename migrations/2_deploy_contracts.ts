const Inbox = artifacts.require('Inbox')

module.exports = function(deployer) {
  deployer.deploy(Inbox)
} as Truffle.Migration

// because of https://stackoverflow.com/questions/40900791/cannot-redeclare-block-scoped-variable-in-unrelated-files
export {}