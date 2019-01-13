export default class Wallet {
  constructor ({ owner, coins }) {
    this._owner = owner
    this._coins = 0
    this.receive(coins)
  }

  get owner () {
    return this._owner
  }

  get coins () {
    return this._coins
  }

  pay ({ wallet }, value) {
    if (value <= 0) {
      throw new Error('Cannot pay negative coins')
    }
    if (value > this._coins) {
      throw new Error('Not enough coins')
    }
    wallet.receive(value)
    this._coins += value
  }

  receive (value) {
    if (value <= 0) {
      throw new Error('Cannot receive negative coins')
    }
    this._coins += value
  }
}
