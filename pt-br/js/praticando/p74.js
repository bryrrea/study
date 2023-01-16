/*
    Prática 74:
        1. Criar uma função chamada "over9000" que tem um único parâmetro que é um Número. Esta função:
            - Retorna "Acima de 9000!!!" se o argumento for > 9000
            - Retorna "Abaixo de 9000..." em todos os outros casos
        2. Faça o passo 1 com uma cláusula if/else regular primeiro 
        3. Refazer o passo 1 com uma expressão ternária
        BÔNUS: Você pode encurtar isto com a pequena sintaxe da arrow function?
*/

// if/else

const over9000 = (number) => {
    if (number > 9000) {
        return console.log("Acima de 9000!!!");
    } else {
        return console.log("Abaixo de 9000...");
    }
}

// ternary operator

const over9000Ternary = number => number > 9000 ? console.log("Acima de 9000!!!") : console.log("Abaixo de 9000...");

over9000(1000)
over9000Ternary(1000)

console.log("\n\n");

over9000(11000)
over9000Ternary(11000)