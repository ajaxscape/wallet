const GameError = require('../errors/GameError')

module.exports = (function () {
  // Use a weak map to provide true private variables
  let privateProps = new WeakMap()

  class Game {
    constructor () {
      privateProps.set(this, { players: [] })
    }

    addPlayer (player) {
      const game = privateProps.get(this)
      if (game.players.includes(player)) {
        throw new GameError('Player already in the game')
      }
    }
  }

  return Game
})()
