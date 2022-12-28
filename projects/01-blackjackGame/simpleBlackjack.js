function newDeck() {
    const deck = [];
    const cards = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];
    const suits = ["clubs", "diamonds", "hearts", "spades"];

    for (const card of cards) {
        for (const suit of suits) {
            deck.push(`${card} of ${suit}`);
        }
    }

    return deck;
}

function drawCard(deck) {
    const auxIndex = Math.floor(Math.random() * deck.length);
    const card = deck[auxIndex];

    deck.splice(auxIndex, 1);

    return card;
}

function calculatingHandsValue(hand) {
    let sum = 0;

    for (const eachCard of hand) {
        if (eachCard.substring(0, 1) === "A") {
            sum += 1;
        } else if (
            eachCard.substring(0, 1) === "J" ||
            eachCard.substring(0, 1) === "Q" ||
            eachCard.substring(0, 1) === "K" ||
            eachCard.substring(0, 2) === "10"
        ) {
            sum += 10;
        } else {
            sum += +eachCard.substring(0, 1);
        }
    }
    return sum;
}

function blackjackGame() {
    const deckForAGame = newDeck();

    let playerHand = [];
    let dealerHand = [];

    playerHand.push(drawCard(deckForAGame));
    dealerHand.push(drawCard(deckForAGame));
    playerHand.push(drawCard(deckForAGame));
    dealerHand.push(drawCard(deckForAGame));

    let playerHandValue = calculatingHandsValue(playerHand);
    let dealerHandValue = calculatingHandsValue(dealerHand);

    console.log(`\nStarting Player's hand: ${playerHand}`);
    console.log(`Your initial hand has ${playerHandValue} points.\n`);
    console.log(`Starting Dealer's hand: ${dealerHand}`);
    console.log(`My initial hand has ${dealerHandValue} points.\n`);

    while (true) {
        playerHand.push(drawCard(deckForAGame));
        playerHandValue = calculatingHandsValue(playerHand);
        dealerHandValue = calculatingHandsValue(dealerHand);

        if (playerHandValue > 21) {
            console.log(`Player's hand: ${playerHand}`);
            console.log(`Dealer's hand: ${dealerHand}\n`);

            console.log(
                `You lost! You reached ${playerHandValue} points, and I have ${dealerHandValue}.`
            );

            break;
        } else if (playerHandValue === 21) {
            console.log(`Player's hand: ${playerHand}`);
            console.log(`Dealer's hand: ${dealerHand}\n`);

            console.log(
                `You won! You reached ${playerHandValue} points. I have ${dealerHandValue} points. Congrats!`
            );
            break;
        }

        dealerHand.push(drawCard(deckForAGame));
        dealerHandValue = calculatingHandsValue(dealerHand);

        if (dealerHandValue > 21) {
            console.log(`Player's hand: ${playerHand}`);
            console.log(`Dealer's hand: ${dealerHand}`);

            console.log(
                `I lost! You have ${playerHandValue} points, and I reached ${dealerHandValue}. Congrats!`
            );
            break;
        } else if (dealerHandValue === 21) {
            console.log(`Player's hand: ${playerHand}`);
            console.log(`Dealer's hand: ${dealerHand}`);

            console.log(
                `I won! You have ${playerHandValue} points, and I reached ${dealerHandValue}.`
            );
            break;
        }
    }
}

blackjackGame();
