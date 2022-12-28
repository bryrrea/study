/*
Practice 15 - Write a function that receives an array of strings and returns a new array with the strings in alphabetical order. 
*/

const stringsFunction = (arrayWithStrings) => {
    return arrayWithStrings.sort();
};

const stringsArray = ["racoon", "elephant", "dog", "cat"];

const sortedArray = stringsFunction(stringsArray);

console.log(sortedArray);
