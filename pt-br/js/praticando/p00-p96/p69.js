/*
    Prática 69:
        1. Criar uma variável chamada "selva" que aponte para a array: ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]
        2. Usar a desestruturação de array para desestruturar o "Lion", e "Rabbit" enquanto ignora os outros animais
        3. Imprima suas variáveis contendo "Lion" e "Rabbit".
*/

const jungle = ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"];

const [, lion, , rabbit] = jungle;

console.log(lion);
console.log(rabbit);