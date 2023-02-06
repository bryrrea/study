/*
Practice 16 - Write a function that receives an array of numbers and returns a new array with each element multiplied by 2.
*/

const randomNumbersFunction = (n1, n2) => {
    newNumber = Math.floor(Math.random() * (n2 - n1 + 1)) + n1;

    return newNumber;
};

const timesTwoFunction = (number) => {
    return number * 2;
};

const doubledArrayFunction = (arrayWithNumbers) => {
    return arrayWithNumbers.map(timesTwoFunction);
};

// Function to create an array with n numbers

const creatingArray = (numberOfElements) => {
    let newArray = [];
    let counter = 0;

    while (counter < numberOfElements) {
        newArray.push(randomNumbersFunction(0, 100));
        counter++;
    }
    return newArray;
};

const numbersArray = creatingArray(5);
const doubledArray = doubledArrayFunction(numbersArray);
console.log(numbersArray);
console.log(doubledArray);
