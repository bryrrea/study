/*
Prática 32 - Crie um *array* chamado "*nums*" com [10, 30, 50, 70, 90]. Em seguida, crie um novo *array* chamado "*squares*" e use `map()` sobre "*nums*" para retornar cada número ao quadrado. Depois, crie um *array* chamado "*over1000*" e filtre os valores acima de 1000. Finalmente, crie uma constante chamada "*finale*" para reduzir o último *array* a uma soma de seus elementos. Imprima cada *array* e constante. (BÔNUS: tente fazer tudo em uma linha de código)
*/

// const nums = [10, 30, 50, 70, 90];

// const squares = nums.map((num) => Math.pow(num, 2));

// const over1000 = squares.filter((square) => {
//     if (square > 1000) {
//         return true;
//     }
//     return false;
// });

// const finale = over1000.reduce((sum, eachNum) => sum + eachNum, 0);

// console.log(nums);
// console.log(squares);
// console.log(over1000);
// console.log(finale);

console.log(
    [10, 30, 50, 70, 90]
        .map((num) => Math.pow(num, 2))
        .filter((square) => (square > 1000 ? true : false))
        .reduce((sum, eachNumber) => sum + eachNumber, 0)
);
