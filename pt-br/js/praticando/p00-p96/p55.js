/*
    Prática 55:
        1. Imprima "Programa iniciado" no início do seu código
        2. Crie uma Promise que se resolve após 5 segundos com o valor {data: "Olá, amigo", error: null}
        3. Imprima a Promise enquanto ela estiver pendente
        4. Imprima "Programa em progresso..."
        5. Crie uma primeira cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a primeira Promise for cumprida
        6. Faça a primeira Promise retornar outra Promise que será cumprida após 2 segundos com a mensagem "Primeira cadeia de Promises concluída!"
        7. Imprima a mensagem da Promise acima depois que ela for cumprida
        8. Crie uma segunda cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a segunda Promise for cumprida
        9. Faça essa segunda Promise retornar outra Promise que será cumprida após 10 segundos com a mensagem "Segunda cadeia de Promises concluída!"
        10. Imprima a mensagem da Promise acima depois que ela for cumprida
*/

console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            data: "Hello, friend!",
            error: null,
        });
    }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
    .then((myPromise) => {
        console.log(myPromise);

        const newPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve("First Promise chain completed!");
            }, 2000)
        });

        return newPromise;
    })
    .then((newPromise) => {
        console.log(newPromise);

        const anotherPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second Promise chain completed!");
            }, 10000);
        });

        return anotherPromise
    })
    .then(anotherPromise => console.log(anotherPromise));