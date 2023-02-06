/*
    Prática 64:
        1. Crie uma função chamada "goGetCandies" que retornará um Objeto *Promise* que resolve { candy: "sour keys", quantity: 10 } após 2 segundos
        2. Crie uma função chamada "sellCandies" que pegará um Objeto "candy" e retornará um número que é .25 * quantity. Isto será o quanto receberemos por nossos doces. No entanto, faça esta função levar 3 segundos para fazer esta matemática.
        3. Crie uma função assíncrona que usa "await" para:
            a. Obter o Objeto "candy da goGetCandies()
            b. Passa-o para "sellCandies" e use "await" para esperar a resposta
            c. Imprime quanto dinheiro ganhamos com nossa venda

        4. Faça os mesmos passos que o número 3, mas com *Promises*:
            P1: Qual destes 2 métodos você prefere?
            P2: Qual destes 2 métodos é mais fácil de ler?
*/

function goGetCandies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "sour keys", quantity: 10 });
        }, 2000);
    })
}

function sellCandies(candyObject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(.25 * candyObject.quantity);
        }, 3000)
    })
}

const start = performance.now();

async function howMuchMoneyMade() {
    const candyObject = await goGetCandies();

    const moneyMade = await sellCandies(candyObject);
    console.log(`\nMoney received: $ ${moneyMade.toFixed(2)}`);

    const end = performance.now();
    console.log(`\nRuntime: ${((end - start)/1000).toFixed(1)} s.`);
}

howMuchMoneyMade();

// const candyObject = goGetCandies();

// candyObject
//     .then((candiesObj) => {
//         const moneyMade = sellCandies(candiesObj);
        
//         console.log(moneyMade);

//         moneyMade.then((cashReceived) => {
//             console.log(`\nMoney received: $ ${cashReceived.toFixed(2)}`);

//             const end = performance.now();
//             console.log(`\nRuntime execution: ${((end - start) / 1000).toFixed(1)} s.`);
//         })
//     })

/*
   A função assíncrona e a solução utilizando a Promise tiveram o mesmo tempo de execução (~5 s). Contudo, foi mais simples trabalhar com a função assíncrona e ela ficou muito mais legível também.
*/