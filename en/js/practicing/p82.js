/*
    Practice 82:

    1. Create a generator function called "randomNumber" that will generate a new random number infinitely
    2. Use a loop to generate 10 random numbers using the generator Object you get from calling "randomNumber"
*/

function* randomNumber(n1, n2) {
    while (true) {
        yield (Math.floor(Math.random() * (n2 - n1 + 1)) + n1);
    }
}

const iterator = randomNumber(0, 100000);

for (let i = 0; i < 10; i++) {
    console.log("\n", iterator.next().value);
}