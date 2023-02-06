/*
Prática 14 - Escreva uma função que calcule a média de um array de notas de alunos (notas de 0 a 10). 
*/

// Função para criar números aleatórios

const randomNumberFunction = (n1, n2) => {
    return +(Math.random() * (n2 - n1 + 1) + n1).toFixed(2);
};

// Função para calcular a média das notas em um array

const meanGradesFunction = (arrayWithGrades) => {
    let sumOfGradesInArray = 0;
    arrayWithGrades.map((grade) => {
        sumOfGradesInArray += grade;
    });
    return +(sumOfGradesInArray / arrayWithGrades.length).toFixed(2);
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
console.log(mean);
