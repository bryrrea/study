/* 
Prática 23 - Crie um *array* chamado "*practice*" com números (10-20). Usando o filter, crie um novo *array* que mantém os números pares em practice. Depois, imprima ambos os *arrays*.
*/

const arrayWithNumbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const checkForEvenNumbers = arrayWithNumbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
});

console.log(arrayWithNumbers);
console.log(checkForEvenNumbers);
