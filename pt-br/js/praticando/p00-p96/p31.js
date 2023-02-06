/*
Prática 31 - Crie um *array* chamado "*items*" com ["luz", "banana", "telefone", "livro", "mouse"]. Em seguida, crie um novo array chamado "*caps*", utilize `map()` sobre "*items*" e escreva em maiúsculo a primeira letra de cada string. Depois, crie uma constante chamada "*concat*" para reduzir todas as strings de *caps* concatenando-as. Use um espaço para separar cada item. Finalmente, imprima "*items*", "*caps*" e "*concat*". (BÔNUS: tente fazer tudo em uma linha de código)
*/

// const items = ["light", "banana", "phone", "book", "mouse"];

// const caps = items.map((item) => item[0].toUpperCase() + item.substring(1));

// const concat = caps.reduce((accumulator, item) => {
//     if (item === caps.length - 1) {
//         return accumulator + item;
//     }
//     return accumulator + item + " ";
// }, "");

// console.log(items);
// console.log(caps);
// console.log(concat);

// BONUS

console.log(
    ["light", "banana", "phone", "book", "mouse"]
        .map((item) => item[0].toUpperCase() + item.substring(1))
        .reduce(
            (accumulator, item) =>
                item ===
                ["light", "banana", "phone", "book", "mouse"].length - 1
                    ? accumulator + item
                    : accumulator + item + " ",
            ""
        )
);
