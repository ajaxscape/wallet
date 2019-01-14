const GameError = require('../errors/GameError')

module.exports = (function () {
  // Use a weak map to provide true private variables
  let privateProps = new WeakMap()

  class Game {
    constructor () {
      privateProps.set(this, { players: [] })
    }

    addPlayer (player) {
      const { players } = privateProps.get(this)
      if (players.includes(player)) {
        throw new GameError('Player already in the game')
      }
      players.push(player)
    }

    removePlayer (player) {
      const game = privateProps.get(this)
      const { players } = game
      if (!players.includes(player)) {
        throw new GameError('Player has already left the game')
      }
      players.splice(players.indexOf(player), 1)
    }

    withPlayers (fn) {
      const game = privateProps.get(this)
      const { players } = game
      players.forEach((player) => fn(player))
    }
  }

  return Game
})()
