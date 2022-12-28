/*
Prática 18 - Crie um *array* com números de 25 a 30. Crie um novo *array* usando o método `map()` e eleve cada número ao quadrado. No final, mostre os dois *arrays*.
*/

const numbers = [25, 26, 27, 28, 29, 30];

// const numbersSquared = (number) => Math.pow(number, 2);

// const newArrayOfNumbers = numbers.map(numbersSquared);

const test = numbers.map((number) => Math.pow(number, 2));

console.log(numbers);
// console.log(newArrayOfNumbers);
console.log(test);
