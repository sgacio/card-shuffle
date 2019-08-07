// const baseCardsArray = 
//   'Ace of Spades', '2 of Spades', '3 of Spades', '4 of Spades', '5 of Spades', '6 of Spades', '7 of Spades', '8 of Spades', '9 of Spades', '10 of Spades', 'Jack of Spades', 'Queen of Spades', 'King of Spades',
//   'Ace of Diamonds', '2 of Diamonds', '3 of Diamonds', '4 of Diamonds', '5 of Diamonds', '6 of Diamonds', '7 of Diamonds', '8 of Diamonds', '9 of Diamonds', '10 of Diamonds', 'Jack of Diamonds', 'Queen of Diamonds', 'King of Diamonds',
//   'Ace of Hearts', '2 of Hearts', '3 of Hearts', '4 of Hearts', '5 of Hearts', '6 of Hearts', '7 of Hearts', '8 of Hearts', '9 of Hearts', '10 of Hearts', 'Jack of Hearts', 'Queen of Hearts', 'King of Hearts',
//   'Ace of Clubs', '2 of Clubs', '3 of Clubs', '4 of Clubs', '5 of Clubs', '6 of Clubs', '7 of Clubs', '8 of Clubs', '9 of Clubs', '10 of Clubs', 'Jack of Clubs', 'Queen of Clubs', 'King of Clubs'
// 

const ranks = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
const suits = ['spades', 'Clubs', 'Hearts', 'Diamonds']
const deck = []

const createDeck = () => {
  for (let r = ranks.length - 1; r >= 0; r--) {
    for (let s = suits.length - 1; s >= 0; s--) {
      let card = [
        ranks[r],
        suits[s]
      ]
      deck.push(card)
    }
    console.log(deck)
  }
}

const shuffleArray = () => {
  for (let i = deck.length - 1; i > 0; i--) {
    // console.log(i)
    const random = Math.floor(Math.random() * deck.length)
    // console.log(random)
    const holder = deck[i]
    deck[i] = deck[random]
    deck[random] = holder
  }
  document.querySelector('.result').textContent = deck[0]
  console.log(deck)
}

const doTheThing = () => {
  createDeck()
  shuffleArray()
}

document
  .querySelector('.button')
  .addEventListener('click', doTheThing)