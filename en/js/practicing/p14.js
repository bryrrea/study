/*
Practice 14 - Write a function that calculates the average of a student grade array (grades from 0 to 10). 
*/

// Function to create random numbers

const randomNumberFunction = (n1, n2) => {
    return +(Math.random() * (n2 - n1 + 1) + n1).toFixed(2);
};

// Function to compute the mean on array

const meanGradesFunction = (arrayWithGrades) => {
    let sumOfGradesInArray = 0;
    arrayWithGrades.map((grade) => {
        sumOfGradesInArray += grade;
    });
    return sumOfGradesInArray / arrayWithGrades.length;
};

const generateArrayWithGrades = (howManyGrades) => {
    let arrayGrades = [];
    let aGrade = 0;

    while (aGrade < howManyGrades) {
        arrayGrades.push(randomNumberFunction(0, 10));

        aGrade++;
    }
    return arrayGrades;
};

const newArrayGrades = generateArrayWithGrades(4);
const mean = meanGradesFunction(newArrayGrades);
console.log(newArrayGrades);
console.log(+mean.toFixed(2));
