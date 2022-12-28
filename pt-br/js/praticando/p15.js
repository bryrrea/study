/*
Prática 15 - Escreva uma função que receba um array de strings e retorne um novo array com as strings em ordem alfabética.  
*/

const stringsFunction = (arrayWithStrings) => {
    return arrayWithStrings.sort();
};

const stringsArray = ["guaxinim", "elefante", "cachorro", "gato"];

const sortedArray = stringsFunction(stringsArray);

console.log(sortedArray);
