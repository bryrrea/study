/*
Practice 28 - Create an array called "points" with the numbers 55-60 (inclusive). Then create a variable called "sum" using `reduce()` that sums up the points in "points". For last, print out "points" and "sum".
*/

const points = [55, 56, 57, 58, 59, 60];

const sum = points.reduce((accumulator, point) => point + accumulator, 0);

console.log(points);
console.log(sum);
