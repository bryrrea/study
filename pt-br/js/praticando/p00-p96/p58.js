/*
    Prática 58:
    1. Crie um laço que faça um loop 10 vezes a partir de 1
    2. Em cada iteração de loop, imprima o número do loop
    3. No loop número 5, "lance" um objeto de erro com a mensagem "Boom!
    4. "Pegue" o erro e imprima o número do laço
    5. Certifique-se de que o laço vai até 10
*/

for (let loop = 1; loop <= 10; loop++) {
    console.log(`Loop number ${loop}.`);

    if (loop === 5) {
        try {
            throw new Error("Boom!");
        } catch(error) {
            console.error(`${error} at loop ${loop}.`);
        }
    }
}