/*
    Practice 12 - Write a function called "square", which will have a number as a parameter. This function should return the square of the number. After, write another function called "sumOfSquares", which will have two numbers as parameter. Use the "square" function inside the "sumOfSquares" function, and return back the sum of the both numbers square.
*/

const square = (number) => {
    return number ** 2;
};

const sumOfSquares = (square1, square2) => {
    sum = square(square1) + square(square2);
    console.log(sum);
};

sumOfSquares(3, 4);
