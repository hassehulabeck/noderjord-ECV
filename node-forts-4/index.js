const Deck = require("classic-deck");

const deck = new Deck();

deck.shuffleDeck();

// Dela ut två kort
let hand = deck.deal(2);

function calculateValue() {
    let value = 0;

    let facecards = ["J", "Q", "K"];

    hand.forEach((card) => {
        let cardValue = card.slice(0, 1);
        console.log(cardValue)
        if (cardValue >= 2 && cardValue <= 9) {
            value += Number(cardValue);
        } else if (facecards.includes(cardValue)) {
            value += 10;
        } else if (cardValue == 1) {
            value += 10;
        } else {
            value += 11;
            if (value >= 22) {
                value -= 10;
            }
        }
    });
    console.log(hand, value);
}

calculateValue();