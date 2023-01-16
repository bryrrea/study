/*
    Prática 73:
        1. Crie uma variável chamada "hungry" que comece como true;
        2. Crie uma declaração de if/else que:
        - Se "hungry" for verdadeiro, imprima "Coma um biscoito!""
        - Caso contrário, imprima: "Sem biscoitos para você!";
        3. Execute o código para ter certeza de que ele funciona.
        4. Repita os passos 2-3, mas com uma expressão ternária.
*/

const hungry = true;

// if/else statement

if (hungry === true) {
    console.log("Coma um biscoito! 🍪")
} else {
    console.log("Sem biscoitos para você!");
}

// ternary operator

hungry === true ? console.log("\n\nComa um biscoito! 🍪") : console.log("\n\nSem biscoitos para você!");