const BaseError = require('./BaseError')

module.exports = class StockError extends BaseError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'Unknown Stock Error', 502)
  }
}
