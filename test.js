const { Game, Player } = require('./index')

const game = new Game()
const myPlayer = new Player()
const yourPlayer = new Player()

game.addPlayer(myPlayer)
game.addPlayer(yourPlayer)

game.withPlayers((player, index) => {
  player.name = `Player-${index}`
  player.receive({ coins: 100 })
})

myPlayer.receive({ goats: 11, sheep: 120, cows: 300, cheese: 20 })

game.withPlayers((player) => {
  console.log()
  console.log(`*********** ${player.name} ***********`)
  console.log(`Coins: `, player.coins)
  console.log(`Stock: `, player.stock)
})

game.trade(myPlayer, { goats: 5, cheese: 19 }, yourPlayer, { coins: 22 })

console.log('============================================')

game.withPlayers((player) => {
  console.log()
  console.log(`*********** ${player.name} ***********`)
  console.log(`Coins: `, player.coins)
  console.log(`Stock: `, player.stock)
})
