/*
    Prática 83:

    1. Criar uma função geradora chamada "randomAmountFromRange" que tem 3 parâmetros: amount, min e max
    2. Esta função gerará a quantidade de números aleatórios fornecidos como argumento, entre o min e o max (inclusive), por exemplo: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Crie um for...of loop que irá percorrer através dos seguintes objetos geradores para testá-lo:
        - randomAmountFromRange(3, 10, 20)
        - randomMountFromRange(5, 100, 200)
        - randomMountFromRange(10, 1000, 2000)
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