/*
    Practice 83:

    1. Create a generator function called "randomAmountFromRange" which has 3 parameters: amount, min, and max
    2. This function will generate the amount of random numbers provided as an argument, between the min and max (inclusive), Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Create a for...of loop that will loop through the following generator objects to test it:
        - randomAmountFromRange(3, 10, 20)
        - randomAmountFromRange(5, 100, 200)
        - randomAmountFromRange(10, 1000, 2000)
*/

const start = performance.now();
const memoryUsedBefore = process.memoryUsage().heapUsed;

function* randomAmountFromRange(amount, min, max) {
    let counter = 0;

    while (counter < amount) {
        yield (Math.floor(Math.random() * (max - min + 1)) + min);
        counter++;
    }
}

const firstIterator = randomAmountFromRange(3, 10, 20);
const secondIterator = randomAmountFromRange(5, 100, 200);
const thirdIterator = randomAmountFromRange(10, 1000, 2000);

for (const numbersThirdIterator of thirdIterator) {
    for (const numbersSecondIterator of secondIterator) {
        for (const numbersFirstIterator of firstIterator) {
            console.log(numbersFirstIterator);
        }

        console.log(numbersSecondIterator);
    }
    console.log(numbersThirdIterator);
}

const end = performance.now();
const memoryUsedAfter = process.memoryUsage().heapUsed;

console.log(`\nRuntime: ${(end - start).toFixed(1)} ms\nMemory usage: ${((memoryUsedAfter - memoryUsedBefore)/Math.pow(1024, 2)).toPrecision(3)} MB`);

// const iterators = [...firstIterator, ...secondIterator, ...thirdIterator]

// for (const number of iterators) {
//     console.log(number);
// }

// const end = performance.now();
// const memoryUsedAfter = process.memoryUsage().heapUsed;

// console.log(`\nRuntime: ${(end - start).toFixed(1)} ms\nMemory usage: ${((memoryUsedAfter - memoryUsedBefore)/Math.pow(1024, 2)).toPrecision(3)} MB`);


/*
    Curious fact after running the code 10 times with each scenario
        Average runtime with nested for loop: 15.5 s
        Average Memory usage with nested for loop: 0.48 MB

        Average Runtime with for...of loop: 16.22 ms
        Average Memory usage with for...of loop: 0.506 MB
*/