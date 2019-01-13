const { Player } = require('./index')

console.log(Player)

const myPlayer = new Player()
const yourPlayer = new Player()

myPlayer.receive({ coins: 100, goats: 50, sheep: 120, cows: 300, cheese: 20 })
yourPlayer.receive({ coins: 100 })

try {
  myPlayer.trade(yourPlayer, { coins: 22, goats: 5, cheese: 19 })
} catch (error) {
  console.log(error.message)
}

console.log(`My Coins: ${myPlayer.coins}`)
console.log(`My Stock: `, myPlayer.stock)
console.log(`Your Coins: ${yourPlayer.coins}`)
console.log(`Your Stock:`, yourPlayer.stock)
