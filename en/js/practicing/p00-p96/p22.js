/*
Practice 22 - Create an array called row with the values [10, 20, 30, 40, 50]. Create a new array called matrix from the use of map in the row array, returning each item in an array, resulting in an array with two dimensions. Print the two arrays on the screen. The answer should be [[10], [20], [30], [40], [50]].
*/
const row = [10, 20, 30, 40, 50];

const matrixFunction = (item) => {
    return Array.of(item);
};

const matrix = row.map(matrixFunction);

console.log(row);
console.log(matrix);
