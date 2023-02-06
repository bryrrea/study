/*
    Prática 86:

    1. Criar uma função geradora assíncrona que tenha 50% de chance de produzir uma das seguintes promessas:
        - Resolver após 500 ms com o valor "Fast!"
        - Resolver depois de 3000ms com o valor "Slow!".
    2. Crie o objeto gerador chamando a função
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa)
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