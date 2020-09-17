const { freeze, drop, take, shuffle } = require('ez-read');
const initializeDeck = require('./deck-init');


class Deck {
    constructor() 
    {
    this.suits = freeze(['S', 'H', 'D', 'C']);
    this.ranks = freeze(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
    this.deck = shuffle(initializeDeck(this.suits, this.ranks));
    }

    show()
    {
        console.log(this.deck);
    }

    shuffleDeck()
    { 
        this.deck = shuffle(this.deck)
    }

    discard(num)
    {   
        this.deck = drop(num, this.deck);
    }

    deal(num)
    {
        const hand = take(num, this.deck);
        this.deck = drop(num, this.deck);
        return hand;
    }

    reset()
    {
        this.deck = shuffle(initializeDeck(this.suits, this.ranks));
    }
}


module.exports = Deck;