const BaseError = require('./BaseError')

module.exports = class GameError extends BaseError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'Unknown Game Error', 503)
  }
}
