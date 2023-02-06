/*
    Prática 72:
        1. Criar uma função chamada "xyzCalc" que tenha um único parâmetro que é uma coordenada. Ele espera obter essas coordenadas como um argumento que se parece com o seguinte formato: { x: 20, y: 2, z: 7 }
        2. A função retornará o seguinte cálculo usando x, y e z dentro das coordenadas: 5 * x - 2 * y - z
        3. Chame esta função usando os seguintes Objetos e certifique-se de que os resultados coincidam:
        - xyzCalc({ x: 20, y: 2, z: 7 }) => 89
        - xyzCalc({ x: 2, y: 1, z: 20 }) => -12
        - xyzCalc({ x: 100, y: 100, z: 100 }) => 200
        4. Use a desestruturação dentro da lista de parâmetros do "xyzCalc" para pegar os valores x, y e z diretamente
        dentro da lista de parâmetros de funções (em oposição a dentro do corpo funcional).
        5. Refaça o passo 3 e certifique-se de que ainda funciona 
            a. Qual método você prefere?
            b. Qual método é mais claro?
*/

function xyzCalc(coordinates) {
    return 5 * coordinates.x - 2 * coordinates.y - coordinates.z;
}

console.log(xyzCalc({ x: 20, y: 2, z: 7}));

console.log(xyzCalc({ x: 2, y: 1, z: 20}));

console.log(xyzCalc({ x: 100, y: 100, z: 100}));


function xyzCalcDestructured( { x, y, z } ) {
    return 5 * x - 2 * y - z;
}

console.log("\n\n", xyzCalc({ x: 20, y: 2, z: 7 }));

console.log(xyzCalc({ x: 2, y: 1, z: 20 }));

console.log(xyzCalc({ x: 100, y: 100, z: 100 }));

/*
    Eu prefiro utilizar a desestruturação, pois é mais conciso e claro para entender o que está acontecendo.
*/