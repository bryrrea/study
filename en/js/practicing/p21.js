/*
Prática 21 - Crie um *array* chamado *items* que receba `["light", "banana", "phone", "book", "mouse"]`. Crie um novo *array* chamado *plurals* e crie uma função que, em conjunto com o método `map`, percorra todo o *array items* e adicione um "s" no final de cada palavra. Imprima os dois *arrays*.
*/

const items = ["light", "banana", "phone", "book", "mouse"];

const returningPlurals = (item) => {
    if (item === "mouse") {
        return "Mice";
    }
    return item + "s";
};

const plurals = items.map(returningPlurals);

console.log(items);
console.log(plurals);
