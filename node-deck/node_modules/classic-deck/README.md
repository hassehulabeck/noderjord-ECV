# classic-deck
### A Deck of 52 shuffled Cards and basic methods to get you started in creating card games with JavaScript.

## Installation

Using npm:
```
npm install --save classic-deck
```
In Node.js:
```
const Deck =  require('classic-deck');
```

### Usage:
```
const Deck =  require('classic-deck');
const deck = new Deck();

// deck.show() returns randomly shuffled 52 card deck.
deck.show();  // => [
  'JD', '9D', '7S', '10H', '6H',  'JC',  'QH',
  '6C', '3D', 'KH', '7D',  '9H',  '10D', 'AD',
  '3C', '3S', 'JS', '8S',  '2S',  '3H',  '7H',
  '5H', '8H', '5D', '9S',  'KS',  '2C',  'AH',
  '2D', '6S', '8D', '8C',  '10S', 'QC',  '5C',
  '6D', 'KC', '4S', '4C',  'JH',  '5S',  '2H',
  'AC', 'AS', 'KD'
]


// deck.shuffleDeck() 
Will randomly shuffle remaining cards in the deck.


// deck.discard(x) 
Will discard "x" cards from the top of your deck.
Can use deck.show() to verify the cards have been discarded.


// deck.deal(x)
Will move "x" cards from top of deck
and return them into your hand. Example:

const myHand = deck.deal(7);
console.log(myHand);       // =>
[
  'KH',  'QD',
  '10S', '7D',
  'QS',  '10H',
  '7H'
]

```