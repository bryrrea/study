/*
    Practice 86:

    1. Create an async Generator function that has a 50% chance of yielding either of the following Promises:
        - Resolve after 500ms with the value "Fast!"
        - Resolve after 3000ms with the value "Slow!"
    2. Create the generator object by calling the function
    3. Use a for-await-of loop to loop through the generator indefinitely (ctrl-c to force exit the program)
*/

const resolves = ["Fast!", "Slow!"];

async function* fastSlowGenerator () {
    while (true) {
        const randomIndex = Math.floor(Math.random() * resolves.length);

        const waitingTimeFast = 500;
        const waitingTimeSlow = 3000;
        
        const logicalTime = randomIndex === 0 ? waitingTimeFast : waitingTimeSlow

        yield new Promise (resolve => setTimeout(() => resolve(resolves[randomIndex]), logicalTime));
    }
}

const promiseGenerator = fastSlowGenerator();

async function runPromise () {
    for await (const value of promiseGenerator) {
        console.log(value);
    }
}

runPromise();