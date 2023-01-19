/*
    Prática 81:

    1. Crie uma função geradora chamada "countTo10" que produzirá os números 0-10 (inclusive) e depois pare.
    2. Crie o objeto gerador chamando a função geradora e itere através do gerador usando um for...of loop.
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