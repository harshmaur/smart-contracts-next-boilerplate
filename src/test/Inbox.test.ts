import { ethers } from 'hardhat'
import { Signer } from 'ethers'
import { expect } from 'chai'
import { Inbox } from '../types'

describe('Inbox', () => {
  let accounts: Signer[]
  let inbox: Inbox
  beforeEach(async function () {
    accounts = await ethers.getSigners()
    const Inbox = await ethers.getContractFactory('Inbox')
    inbox = await Inbox.deploy('Hello World')
  })

  it('should be deployed', async () => {
    const initialMessage = await inbox.message()
    expect(initialMessage).to.eq('Hello World')
  })

  it('should set the message', async () => {
    await inbox.setMessage('Hola, mundo!')
    const newMessage = await inbox.message()
    expect(newMessage).to.equal('Hola, mundo!')
  })
})
