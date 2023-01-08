/*
    Prática 60:
    1. Criar um bloco "try" que faça: criar uma variável chamada "number" e inicializá-la no número 1337, adicionar um número aleatório entre 0-1000 ao "number" e imprimir "number". Se o número for inferior a 2000, um erro deve ser lançado com a mensagem "You lose!", caso contrário imprima "You win" sem "lançar"/erro.
    2. Criar um bloco `catch` que "captura" o erro e o imprime
    3. Dentro do bloco `catch`, imprimir também o "number".
    4. Qual é o problema com esta configuração/código?
    5. Como podemos corrigi-lo para que possamos acessar o "number" no `catch`?
*/

let number = 1337;

function creatingRandomNumber(a, b) {
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;

    return randomNumber;
}

try {
    // let number = 1337;

    const randomNumber = creatingRandomNumber(0, 1000);

    number += randomNumber;

    console.log(randomNumber);

    console.log(number);

    if (number < 2000) {
        throw new Error("You lose!");
    } else {
        console.log("You win!");
    }
} catch(error) {
    console.error(error);

    console.log(number);
}

console.log("Done!");

/*
    O problema aqui é que a variável "number" é uma variável local, ou seja, ela só existe e só pode ser chamada dentro do bloco "try". Para corrigir isto, podemos criar esta variável fora do bloco "try", o que a transformará em uma variável global, que pode ser acessada onde quisermos.
*/