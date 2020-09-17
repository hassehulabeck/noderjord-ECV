const Deck = require('classic-deck');

const deck = new Deck();

deck.shuffleDeck()

console.log(deck.deal(1))