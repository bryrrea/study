/*
    Prática 51 - Crie um Map chamado "backpack" e adicione as seguintes entradas:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    Utilize um laço for-of em "backpack" e imprima o nome e o valor de cada item no seguinte formato: Name: $Value. Ainda, imprima o valor total dos itens de "backpack".
*/

/*
    O "truque" aqui é: eu tenho que criar um array com duas variáveis (uma para as chaves do Map e outra para os valores do Map) no laço for-of. Por que um array? Porque o Map é um array de chaves e valores.
*/

const backpack = new Map();
let totalValue = 0;

backpack
    .set(1, { name: "Sword", value: 300 })
    .set(2, { name: "Banana", value: 5 })
    .set(3, { name: "Gold Nugget", value: 10000 })
    .set(4, { name: "Pants", value: 100 });

for (const [key, value] of backpack) {
    console.log(`${value.name}: $${value.value}`);

    totalValue += value.value;
}

console.log(`Total value of the backpack: ${totalValue}`);
