/*
Practice 18 - Create an array with numbers from 25 to 30. Create a new array using the `map`() method and square each number. At the end, show the two arrays.
*/

const numbers = [25, 26, 27, 28, 29, 30];

// const numbersSquared = (number) => Math.pow(number, 2);

// const newArrayOfNumbers = numbers.map(numbersSquared);

const test = numbers.map((number) => Math.pow(number, 2));

console.log(numbers);
// console.log(newArrayOfNumbers);
console.log(test);
