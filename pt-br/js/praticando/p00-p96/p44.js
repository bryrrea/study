/*
    Pratica 44 - Crie uma variável chamada "números" que aponte para um novo conjunto e adicione os seguintes números a ele: 1, 2, 3, 4, 5, 2, 3, 4. Imprima "números" e veja o que está dentro dele. Repita o mesmo criando um array e veja as diferenças.
*/

const numbers = new Set();

numbers.add(1).add(2).add(3).add(4).add(5).add(2).add(3).add(4);

console.log(numbers); // { 1, 2, 3, 4, 5 }

console.log("- - - - - - - - - - \n\n");

const numbersArray = [1, 2, 3, 4, 5, 2, 3, 4];

console.log(numbersArray); // [ 1, 2, 3, 4, 5, 2, 3, 4 ]

/*
    A estrutura de dados Set funciona apenas com dados não duplicados, enquanto um array aceita dados duplicados. No entanto, se tentarmos adicionar 1, 2, 3, 4, 5, "2", "3", "4", "5", o resultado será Set { 1, 2, 3, 4, 5, "2", "3", "4", "5" }, já que "2", "3", "4", "5" são strings.
*/
