const StockError = require('../errors/StockError')
const validStock = ['goats', 'sheep', 'cows', 'cheese']

module.exports = (function () {
  // Use a weak map to provide true private variables
  let privateProps = new WeakMap()

  class Stock {
    constructor () {
      privateProps.set(this, {
        validStock: (stockName) => {
          if (validStock.includes(stockName)) {
            return true
          } else {
            throw new StockError(`Invalid stock item: ${stockName}`)
          }
        }
      })
    }

    add (items) {
      const stock = privateProps.get(this)
      Object.entries(items).forEach(([stockName, count]) => {
        if (stock.validStock(stockName)) {
          if (!stock[stockName]) {
            stock[stockName] = count
          } else {
            stock[stockName] += count
          }
        }
      })
    }

    remove (items) {
      const stock = privateProps.get(this)
      Object.entries(items).forEach(([stockName, count]) => {
        if (stock.validStock(stockName)) {
          if (stock[stockName] && count < stock[stockName]) {
            stock[stockName] -= count
          } else {
            throw new StockError(`With only ${stock[stockName]} ${stockName} there are not enough to remove ${count}`)
          }
        }
      })
    }

    get items () {
      const { validStock, ...stock } = privateProps.get(this)
      return stock
    }
  }

  return Stock
})()
