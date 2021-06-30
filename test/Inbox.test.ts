const Inbox = artifacts.require('Inbox')

contract('Inbox', (accounts) => {
  it('deploys a contract', async () => {
    console.log(accounts)
    const inboxInstance = await Inbox.deployed()
    const message = await inboxInstance.message()
    expect(message).to.eq('Yo')
  })
})
