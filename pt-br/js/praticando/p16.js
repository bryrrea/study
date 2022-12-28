/*
Prática 16 - Escreva uma função que receba um array de números e retorne um novo array com cada elemento multiplicado por 2.
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

// Função que cria um array com n números

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
