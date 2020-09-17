const Deck = require("classic-deck");

const deck = new Deck();

deck.shuffleDeck();

// Dela ut två kort
let hand = deck.deal(2);

function calculateValue() {
    let value = 0;

    let facecards = ["J", "Q", "K"];

    hand.forEach((card) => {
        cardValue = card.slice(0, 1);
        if (cardValue >= 2 && cardValue <= 10) {
            value += Number(cardValue);
        } else if (facecards.includes(cardValue)) {
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
