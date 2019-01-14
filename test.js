const { Player } = require('./index')

const myPlayer = new Player()
const yourPlayer = new Player()

myPlayer.receive({ coins: 100, goats: 11, sheep: 120, cows: 300, cheese: 20 })
yourPlayer.receive({ coins: 100 })

myPlayer.trade(yourPlayer, { coins: 22, goats: 5, cheese: 19 })

console.log(`My Coins: ${myPlayer.coins}`)
console.log(`My Stock: `, myPlayer.stock)
console.log(`Your Coins: ${yourPlayer.coins}`)
console.log(`Your Stock:`, yourPlayer.stock)
