/*
Practice 13 - Write a function that sums all elements of a number array. 
*/

// Function to create a random number between two any numbers

const randomNumberFunction = (n1, n2) => {
    return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
};

// Function to sum the numbers in an array

const sumNumbersInArrayFunction = (arrayWithNumbers) => {
    let sumOfNumbersInArray = 0;
    for (number in arrayWithNumbers) {
        sumOfNumbersInArray += arrayWithNumbers[number];
    }
    return sumOfNumbersInArray;
};

// Creating an array with 5 random numbers

let arrayOfNumbers = [];
for (i = 0; i < 5; i++) {
    arrayOfNumbers.push(randomNumberFunction(1, 100));
}

// Summing the numbers on array

const sum = sumNumbersInArrayFunction(arrayOfNumbers);
console.log(arrayOfNumbers);
console.log(sum);
