const { Wallet } = require('./index')

console.log(Wallet)

const myWallet = new Wallet({ coins: 100 })
const yourWallet = new Wallet()

try {
  myWallet.pay(yourWallet, 99)
} catch (error) {
  console.log(error.message)
}

console.log(`My Coins: ${myWallet.coins}`)
console.log(`Your Coins: ${yourWallet.coins}`)
