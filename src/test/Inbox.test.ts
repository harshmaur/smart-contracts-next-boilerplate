// @ts-ignore
const Inbox = artifacts.require('Inbox')

contract('Inbox', (accounts) => {
  it('is deployed', async () => {
    const inboxInstance = await Inbox.deployed()
    expect(inboxInstance.address).to.exist
  })

  it('gets initialised with a default value', async () => {
    const inboxInstance = await Inbox.deployed()
    const message = await inboxInstance.message()
    expect(message).to.eq('Yo')
  })

  it('should set the message', async () => {
    const newMessage = 'New Message'
    const inboxInstance = await Inbox.deployed()
    await inboxInstance.setMessage(newMessage)
    const message = await inboxInstance.message()
    expect(message).to.eq(newMessage)
  })
})
