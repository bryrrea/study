/*
    Prática 49 - Crie uma variável chamada "ages" que aponte para o seguinte array: [10, 42, 15, 22, 11, 74, 39, 2]. Em seguida:

        1. Crie um array chamado "results" que comece vazio.
        2. Utilize um laço for-of para iterar "ages" e adicione um Objeto ao "results" com uma chave chamada "age" cujos valores atrelados são os números presentes no array "ages". Adicione uma chave chamada "nome" que será sempre "dragon".
        3. Imprima "results". A saída deve ser um array de Objetos.
*/

const ages = [10, 42, 15, 22, 11, 74, 39, 2];

const results = [];

let dragonNumber = 1;

for (age of ages) {
    results.push({ age: age, name: `Dragon ${dragonNumber}` });

    dragonNumber++;
}
console.log(results);

/*
    Importante salientar que, visto que estou escrevendo Objetos literais, os nomes das chaves são automaticamente convertidas para string.
*/
