/*
Prática 27 - Crie um *array* chamado "*nums*" com os seguintes valores: [10, 20, 30, 40, 50]. Crie um *array* chamado "*timesTwo*" e, usando o `map()`, multiplique cada número por dois. Depois, crie um *array* chamado "*over50*" que filtre "*timesTwo*" para manter somente os valores acima de 50. Portanto, imprima os três *arrays*.
*/

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => num * 2);

const over50 = timesTwo.filter((element) => element > 50);

console.log(nums);
console.log(timesTwo);
console.log(over50);
