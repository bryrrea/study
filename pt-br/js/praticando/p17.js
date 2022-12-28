/*
Prática 17 - Escreva uma função que dado um array de strings, retorne um objeto com a contagem de ocorrências de cada string. Por exemplo, dado o array ["a", "b", "a", "c", "b"], a função deve retornar o objeto { a: 2, b: 2, c: 1 }. 
*/

const occurrencesInArray = (arrayWithStrings) => {
    let occurrencesObject = {};

    arrayWithStrings.map((string) => {
        if (occurrencesObject[string]) {
            // Adiciona a string ao objeto. Se já tem, incrementa.
            occurrencesObject[string]++;
        } else {
            occurrencesObject[string] = 1; // Adiciona a string ao objeto. Começa a contagem no 1.
        }
    });

    return occurrencesObject;
};

const stringsArray = [
    "a",
    "b",
    "a",
    "c",
    "b",
    "d",
    "f",
    "s",
    "d",
    "s",
    "s",
    "c",
];
console.log(occurrencesInArray(stringsArray));
