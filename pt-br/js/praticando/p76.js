/*
    Prática 76:
        1. Crie uma variável chamada "characters" que aponte para o array: ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
        2. Filtrar sobre "characters" para criar uma novo array que faça o seguinte:
        - Se o nome tiver um espaço (" "), mantenha-o no resultado (retorne "verdadeiro")
        - Caso contrário, filtrá-lo (devolver "falso")
        - Use uma declaração regular de se/else para isso    
        3. Repetir o passo 2, mas com uma expressão ternária 
        BÔNUS: Você pode encurtar isto com a pequena sintaxe de uma arrow function?
*/

const characters = ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"];

// if/else statement

const notSingularName = characters.filter((name) => {
    if (name.includes(" ")) {
        return true;
    } else {
        return false;
    }
})

console.log(notSingularName);

console.log("\n\n");

// ternary operator

const notSingularNameTernary = characters.filter(name => name.includes(" ") ? true : false);

console.log(notSingularNameTernary);