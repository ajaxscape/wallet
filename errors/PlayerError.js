const BaseError = require('./BaseError')

module.exports = class PlayerError extends BaseError {
  constructor (message) {
    // Providing default message and overriding status code.
    super(message || 'Unknown Player Error', 503)
  }
}
