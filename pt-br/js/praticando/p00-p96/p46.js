/*
    Prática 46 - Crie um array chamado "numbers" com os valores [10, 20, 15, 30, 15, 20, 35, 60, 10]. Encontre o primeiro valor duplicado em "numbers" e imprima-o no terminal.
*/

/*
    Eu posso iterar sobre o array usando um loop for comum, o método forEach, o método find, um map, os métodos filter ou reduce, um loop for...of, entre outros... A ideia principal é usar uma declaração if/else para testar se um número já está dentro do Set. Se for verdadeiro, imprima o número e o seu índice (se você quiser mostrar o índice também), caso contrário, basta adicionar o número no Set. Métodos como find e filter precisam retornar um boolean também.
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const setWithNumbers = new Set();

for (let i = 0; i < numbers.length; i++) {
    if (setWithNumbers.has(numbers[i])) {
        console.log(numbers[i]); //15
        break;
    }

    setWithNumbers.add(numbers[i]);
}

console.log(setWithNumbers); // { 10, 20, 15, 30 }

// Another possible solution
const numbersArray = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const newSet = new Set();

let firstIndex;

const noDuplicates = numbersArray.find((number, index) => {
    if (newSet.has(number)) {
        firstIndex = numbersArray.indexOf(number);
        console.log(
            `The number ${number} is already in the set. It was found first at index ${firstIndex} and its double is at index ${index}.`
        ); // The number 15 is already in the set. It was found first at index 2 and its double is at index 4.

        return true;
    }

    newSet.add(number);
    return false;
});

console.log(newSet); // { 10, 20, 25, 30 }
