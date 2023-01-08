/*
    Prática 57:
    1. Imprimir "Programa iniciado".
    2. Lance um objeto de erro com a mensagem "Uh oh!".
    3. Ao final do programa, imprima "Programa concluído"!
    4. Executar o programa e assistir ao seu travamento.
    5. Criar um bloco de "tentativa...captura" que imprima a mensagem de erro
    6. Execute o programa novamente e veja a diferença
*/

console.log("Program started...");

try {
    throw new Error("Uh oh!");
} catch(error) {
    console.error(error);
}

console.log("Program completed!");