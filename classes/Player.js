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

    give (items) {
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

    trade (trader, items) {
      this.give(items)
      trader.receive(items)
    }

    get coins () {
      return privateProps.get(this).wallet.coins
    }

    get stock () {
      const stock = (privateProps.get(this).stock).items
      return { ...stock }
    }

    set name (name) {
      const data = privateProps.get(this)
      data.name = name
    }

    get name () {
      return privateProps.get(this).name
    }

    get game () {
      return privateProps.get(this).game
    }

    join (game) {
      const data = privateProps.get(this)
      data.game = game
    }

    leave () {
      const data = privateProps.get(this)
      if (data.game) {
        delete data.game
      }
    }
  }

  return Player
})()
