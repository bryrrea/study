/*
Prática 37 - Crie um objeto chamado "myConsole" e:
    1. Atribua à "myConsole" a chave "log" com um valor que é uma função seta. Esta função seta terá um parâmetro chamado "mensagem" e a função apenas imprimirá a "mensagem";
    2. Como você chamaria essa função "log" dentro do objeto?
*/

const myConsole = {
    log: (message) => console.log(message),
};

myConsole.log("Hello, friend!");

console.log(console);
