/*
Prática 22 - Crie um *array* chamado *row* com os valores `[10, 20, 30, 40, 50]`. Crie um novo *array* chamado *matrix* a partir do uso do `map` no *array row*, retornando cada item em um *array*, resultando em um *array* com duas dimensões. Imprima na tela os dois *arrays*. A resposta deve ser `[[10], [20], [30], [40], [50]]`.
*/
const row = [10, 20, 30, 40, 50];

const matrixFunction = (item) => {
    return Array.of(item);
};

const matrix = row.map(matrixFunction);

console.log(row);
console.log(matrix);
