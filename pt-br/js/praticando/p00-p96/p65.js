/*
    Prática 65:
        1. Crie uma variável chamada "points" que aponte para esta matriz: [10, 15, 20, 30, 5]
        2. Criar outra variável chamada "pointsCopy" que cria uma cópia dos "points" utilizando o operador de propagação, mas também acrescenta
            2 valores extras no final: 50 e 75
        3. Imprimir ambos os arrays.
*/

const point = [10, 15, 20, 30, 5];

const pointsCopy = [...point, 50, 75];

console.log(point);
console.log(pointsCopy);