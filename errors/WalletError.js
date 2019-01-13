const BaseError = require('./BaseError')

module.exports = class WalletError extends BaseError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'Unknown Wallet Error', 501)
  }
}
