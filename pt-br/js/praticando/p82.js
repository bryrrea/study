/*
    Prática 82:

    1. Criar uma função geradora chamada "randomNumber" que irá gerar um novo número aleatório infinitamente
    2. Use um loop para gerar 10 números aleatórios usando o Objeto gerador que você obtém ao chamar "randomNumber".
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