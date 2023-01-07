/*
    Prática 53: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que seja resolvida após 3 segundos e rejeitada após 2 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, por fim, imprima "Program completed" se a Promise for cumprida ou "Program failure" se a Promise for rejeitada.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program completed!");
    }, 3000);

    setTimeout(() => {
        reject("Program failure!");
    }, 2000);
});

{
    myPromise
        .then(message => console.log(message))
        .catch(error => console.log(error))
}        

console.log("Program started...")
console.log(myPromise);
console.log("Program in progress...");