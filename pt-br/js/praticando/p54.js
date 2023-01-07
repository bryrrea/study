/*
    Prática 54: Imprima "Programa Iniciado" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela está pendente. Depois, imprima "Programa em progresso...". Depois, imprima "Etapa 1 concluída!" quando a primeira Promise for cumprida. Faça a primeira Promise retornar uma nova Promise que será cumprida após 3 segundos com a mensagem "Etapa 2 concluída!". Finalmente, imprima a mensagem da segunda Promise depois que ela for cumprida.
*/

console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1 completed!");
    }, 3000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
    .then((myPromise) => {
        console.log(myPromise); 

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2 completed!");
            }, 3000);           
        })
    .then(message => console.log(message));
});
