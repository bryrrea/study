/*
Prática 28 - Crie um *array* chamado "*points*" com os números de 55 a 60 (inclusos). Em seguida, crie uma variável chamada "*sum*" usando `reduce()` para somar os pontos em "points". Por último, imprima "points" e "sum".
*/

const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((accumulator, point) => point + accumulator, 0);

console.log(points);
console.log(sum);
