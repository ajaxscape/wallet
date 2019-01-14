const WalletError = require('../errors/WalletError')

module.exports = (function () {
  // Use a weak map to provide true private variables
  let privateProps = new WeakMap()

  class Wallet {
    constructor ({ owner, coins = 0 } = {}) {
      privateProps.set(this, { coins: 0 })
      this.receive(coins)
    }

    get coins () {
      return privateProps.get(this).coins
    }

    pay (value) {
      const wallet = privateProps.get(this)
      if (value <= 0) {
        throw new WalletError('Cannot pay negative coins')
      }
      if (value > this.coins) {
        throw new WalletError('Not enough coins')
      }
      wallet.coins = this.coins - value
      return true
    }

    receive (value) {
      const wallet = privateProps.get(this)
      if (value < 0) {
        throw new WalletError('Cannot receive negative coins')
      }
      wallet.coins = this.coins + value
      return true
    }
  }

  return Wallet
})()
