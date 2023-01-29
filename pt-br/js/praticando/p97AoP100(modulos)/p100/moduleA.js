/*
    Prática 100:

        1. Crie uma nova pasta chamada "exercise3".
        2. Dentro de "exercise3", crie 3 arquivos:
            - main.js
            - moduleA.js
            - moduleB.js
        3. Dentro de moduleA.js, imprima 'Module A'. Em seguida, crie e exporte (nomeada) uma variável chamada 'a' que aponte para a String 'A'.
        4. Dentro de moduleB.js, importe 'a' de moduleA.js. Além disso, imprima 'Module B' a seguir. Em seguida, crie e exporte (nomeada) uma variável chamada 'b' que aponte para a String 'B'. (Nota: não USAMOS 'a' aqui)
        5. Dentro de main.js, importe 'b' de moduleB.js. Imediatamente após isso, imprima 'MAIN'. (Nota, não USAMOS 'b' aqui)
        6. Tente prever a ordem das impressões quando você executar main.js. Por que isso pode acontecer?
        BÔNUS: Por que isso pode tornar o top-level await em módulos complicado de usar?
        DICA: Certifique-se de criar um arquivo package.json dentro de "exercise3" com isso dentro: { "type": "module" }
*/

console.log("Module A")

const a = "A";

export { a };