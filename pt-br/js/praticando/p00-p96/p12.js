/*
    Prática 12 - Escreva uma função chamada "square", que deve ter um número como parâmetro. Esta função deve retornar o quadrado de um número. Após, escreva outra função chamada "SumOfSquares", que deve conter dois números como parâmetro. Utilize a função "square" dentro da função "sumOfSquares", e deve retornar a soma do quadrado dos dois números.
*/

const square = (number) => {
    return number ** 2;
};

const sumOfSquares = (square1, square2) => {
    sum = square(square1) + square(square2);
    console.log(sum);
};

sumOfSquares(3, 4);
