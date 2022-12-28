/*
Prática 26 - Crie um *array* chamado "*values*": [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]. Crie um novo *array* chamado "*hasTwos*" que filtre sobre os valores e mantenha somente os *sub-arrays* que têm um 2 neles. Depois, imprima ambos os *arrays*.
*/

const values = [
    [1, 2, 3],
    [0, 0, 1],
    [3, 6, 9],
    [0, 1, 2],
];

const hasTwos = values.filter((value) => {
    if (value.includes(2)) {
        return true;
    }
    return false;
});

console.log(values);
console.log(hasTwos);
