const WalletError = require('../errors/WalletError')

module.exports = (function () {
  // Use a weak map to provide true private variables

  let privateProps = new WeakMap()

  class Wallet {
    constructor ({ owner, coins = 0 } = {}) {
      privateProps.set(this, { owner })
      privateProps.set(this, { coins: 0 })
      this.receive(coins)
    }

    get owner () {
      return privateProps.get(this).owner
    }

    get coins () {
      return privateProps.get(this).coins
    }

    pay (wallet, value) {
      if (value <= 0) {
        throw new WalletError('Cannot pay negative coins')
      }
      if (value > this.coins) {
        throw new WalletError('Not enough coins')
      }
      wallet.receive(value)
      privateProps.set(this, { coins: this.coins - value })
    }

    receive (value) {
      if (value < 0) {
        throw new WalletError('Cannot receive negative coins')
      }
      privateProps.set(this, { coins: this.coins + value })
    }
  }

  return Wallet
})()
