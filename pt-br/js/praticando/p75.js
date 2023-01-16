/*
    Prática 75:
        1. Crie uma variável chamada "wizards" que aponte para o array: ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"].
        2. Utilize "map" sobre "wizards" para criar um novo array que faz o seguinte:
        - Se o nome contém a letra "n" ou "N" devolve o nome, mas com todos os "n" e "N" substituídos por um caractere "*".
        - Caso contrário, devolva o nome, mas em maiúsculas.
        - Use uma declaração regular de se/else para isso    
        3. Repetir o passo 2, mas com uma expressão ternária 
        BÔNUS: Você pode encurtar isto com a pequena sintaxe de uma arrow function?
*/

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"];

// if/else statement

const wizardsWithN = wizards.map((wizard) => {
   if (wizard.includes("n") || wizard.includes("N")) {
    return console.log(wizard.replace("n", "*").replace("N", "*"));
   } else {
    return console.log(wizard.toUpperCase());
   }
});

console.log("\n\n")

// ternary operator

const wizardsWithNTernary = wizards.map(wizard => wizard.includes("n") || wizard.includes("N")
? console.log(wizard.replace("n", "*").replace("N", "*"))
: console.log(wizard.toUpperCase())
);