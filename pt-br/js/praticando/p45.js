/*
    Prática 45 - Crie um array chamado "points" com os seguintes valores: [10, 20, 10, 30, 15, 15, 35, 60, 10]. Como podemos imprimir todos os valores **ÚNICOS** existentes em "points"?
*/

/*
    Acredito que poderíamos iterar sobre o array para adicionar todos os valores a um Set. Fazendo isso, apenas os valores únicos serão colocados no Set, já que essa estrutura de dados não aceita duplicatas.
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const pointsSet = new Set();

const noDuplicates = points.map((point) => {
    pointsSet.add(point);
});

console.log(points); // [ 10, 20, 10, 30, 15, 15, 35, 60, 10 ]
console.log("- - - - - - - - - - \n\n");
console.log(pointsSet); // { 10, 20, 30, 15, 35, 60 }
