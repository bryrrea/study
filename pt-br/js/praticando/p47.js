/*
    Prática 47 - Crie um array chamado "valores" com os seguintes valores:
    - {name -> "banana", quantity -> 1, price -> 1,95}
    - {name -> "maçã", quantity -> 1, price -> 1,45}
    - {name -> "banana", quantity -> 10, price -> 0,05}
    - {name -> "doces", quantity -> 1, price -> 3,50}

    Em seguida:
      1. Crie um novo array chamado "resultados" que começa vazio.
      2. Crie um Set chamado "duplicatas".
      3. Adicione todos os objetos em "itens" a "resultados" em ordem, ignorando quaisquer objetos com nomes duplicados que você encontrar dentro de "itens".
      4. Imprima "resultados".
*/

const values = [
    { name: "banana", quantity: 1, price: 1.95 },
    { name: "apple", quantity: 1, price: 1.45 },
    { name: "banana", quantity: 10, price: 0.05 },
    { name: "candy", quantity: 1, price: 3.5 },
];

let results = [];

const duplicates = new Set();

values.filter((value) => {
    if (!duplicates.has(value.name)) {
        results.push(value);
        duplicates.add(value.name);
        return true;
    }
});

console.log(duplicates); // { 'banana', 'apple', 'candy' }

console.log(results); //  [{ name: "banana", quantity: 1, price: 1.95 }, { name: "apple", quantity: 1, price: 1.45 }, { name: "candy", quantity: 1, price: 3.5 }]

/*
    Minha ideia aqui era usar um filtro para acessar a chave "name" de cada objeto. Se dois objetos tivessem o mesmo valor para a chave "name", o valor não seria adicionado no Set e o objeto inteiro não seria adicionado à nova matriz.
*/
