/*
    Prática 59: 
        1. Atribua um objeto a uma variável chamada "user". O Objeto pode ter { name: "Misha", age: 22, settings: { color: "blue" } }
        2. Imprimir "Criando usuário..."
        3. Tente imprimir o "user.profile.color"
        4. Imprimir "Usuário criado!"
        5. Execute o código e observe o comportamento
        6. Como você consertaria este código (sem alterar os passos 1-4 ou o Objeto do usuário)? Além disso, adicione qualquer registro apropriado que você ache que faz sentido.
*/

try {
    let user = {}

    user.name = "Misha";
    user.age = 22;
    user.settings = { color: "blue" };

    console.log(`Creating user ${user.name}...\n`);

    console.log(user.profile.color);

    console.log(user);

    console.log("User created!");
} catch(error) {
    console.error(error);
}

console.log("Program completed!");