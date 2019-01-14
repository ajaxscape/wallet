const Wallet = require('./Wallet')
const Stock = require('./Stock')

module.exports = (function () {
  // Use a weak map to provide true private variables
  let privateProps = new WeakMap()

  class Player {
    constructor () {
      privateProps.set(this, {
        wallet: new Wallet(),
        stock: new Stock()
      })
    }

    trade (trader, items) {
      const data = privateProps.get(this)
      const { coins, ...trade } = items
      if (coins) {
        const wallet = data.wallet
        wallet.pay(items.coins)
      }
      if (trade) {
        const stock = data.stock
        stock.remove(trade)
      }
      return trader.receive(items)
    }

    receive (items) {
      const data = privateProps.get(this)
      const { coins, ...trade } = items
      if (coins) {
        const wallet = data.wallet
        wallet.receive(items.coins)
      }
      if (trade) {
        const stock = data.stock
        stock.add(trade)
      }
    }

    get coins () {
      const wallet = privateProps.get(this).wallet
      return wallet.coins
    }

    get stock () {
      const stock = (privateProps.get(this).stock).items
      return { ...stock }
    }
  }

  return Player
})()
