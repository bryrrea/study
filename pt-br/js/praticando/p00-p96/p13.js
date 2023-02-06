/*
Prática 13 - Escreva uma função que some todos os elementos de um array de números. 
*/

// Função que cria um número aleatório entre dois números quaisquer

const randomNumberFunction = (n1, n2) => {
    return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
};

// Criando função que retorne a soma dos números em um array

const sumNumbersInArrayFunction = (arrayWithNumbers) => {
    let sumOfNumbersInArray = 0;
    for (let number of arrayWithNumbers) {
        sumOfNumbersInArray += number;
    }
    return sumOfNumbersInArray;
};

// Criando um array com 5 números aleatórios

let arrayOfNumbers = [];
for (let i = 0; i < 5; i++) {
    arrayOfNumbers.push(randomNumberFunction(1, 100));
}

// Chamando a função para calcular os números do array

const sum = sumNumbersInArrayFunction(arrayOfNumbers);
console.log(arrayOfNumbers);
console.log(sum);
