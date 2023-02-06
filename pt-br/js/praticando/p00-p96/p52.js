/*
    Prática 52: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, finalmente, imprima "Program completed" quando a Promise for concluída após 3 segundos.
*/

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program completed!")
    }, 3000)
});

newPromise.then(message => console.log(message))

console.log(newPromise);
console.log("Program started...");
console.log("Program in progress...");

