/*
    Prática 48 - Crie uma variável chamada "numbers" que aponte para o seguinte array: [10, 20, 40, 50, 20, 100]. Utilize o laço for-of para imprimir cada número ao quadrado.
*/

const numbers = [10, 20, 40, 50, 20, 100];

for (const number of numbers) {
    console.log(Math.pow(number, 2));
}
// Output
// 100
// 400
// 1600
// 2500
// 400
// 10000
