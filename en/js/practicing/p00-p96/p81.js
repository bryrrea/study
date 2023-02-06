/*
    Practice 81:

    1. Create a generator function called "countTo10" that will yield the numbers 0-10 (inclusive) then stop.
    2. Create the generator object by calling the generator function and iterate through the generator using a for...of loop.
*/

function* countTo10() {
    for (let number = 0; number <= 10; number++) {
        yield number;
    }
}

const iterator = countTo10()

for (const value of iterator) {
    console.log(value);
}