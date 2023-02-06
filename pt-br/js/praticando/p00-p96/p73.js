/*
    Prática 73:
        1. Crie uma variável chamada "hangry" que comece como true;
        2. Crie uma declaração if/else que:
        - Se "hangry" for verdadeiro, imprima "Coma um biscoito!"
        - Caso contrário, imprima: "Sem biscoitos para você!";
        3. Execute o código para ter certeza de que ele funciona.
        4. Repita os passos 2-3, mas com uma expressão ternária.
*/

const hungry = true;

// if/else statement

if (hungry === true) {
    console.log("Have a cookie! 🍪")
} else {
    console.log("No cookies for you!");
}

// ternary operator

hungry === true ? console.log("\n\nHave a cookie! 🍪") : console.log("\n\nNo cookies for you!");