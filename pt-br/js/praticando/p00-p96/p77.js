/*
    Prática 77:
        1. Crie uma variável chamada "food" que aponta para aString "Donut"
        2. Crie uma série de if/else statements que:
            - Cheque se "food" é igual a "Fish" e imprima "Sounds fishy..." se verdadeiro
            - Cheque se "food" é igual a "Hummus" e imprima "Want chips with that?" se verdadeiro
            - Cheque se "food" é igual a "Sushi" e imprima "With or without seaweed?" se verdadeiro
            - Imprima "Food not in our database, sorry!" em qualquer outro caso
        3. Rode o programa e certifique de que está tudo correto, e então mude "food" para "Sushi" e veja se ainda funciona como esperado.
        4. Crie uma declaração switch que simule os passos 2 e 3
*/

const food = "Sushi";

// if/else

if (food === "Fish") {
    console.log("Sounds fishy...");
} else if (food === "Hummus") {
    console.log("Want chips with that?")
} else if (food === "Sushi") {
    console.log("With or without seaweed?")
} else {
    console.log("Food not in our database, sorry!")
}

console.log("\n\n")

// switch

switch (food) {
    case ("Fish"): {
        console.log("Sounds fishy...");
        break;
    }
    case ("Hummus"): {
        console.log("Want chips with that?")
        break;
    }
    case ("Sushi"): {
        console.log("With or without seaweed?")
        break;
    }
    default: {
        console.log("Food not in our database, sorry!")
        break;
    }
}