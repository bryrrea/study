/*
    Prática 63:
        1. Crie uma função chamada "fetchFast" que retorna uma *Promise* que se resolve com a String "Fast Done!" após 2 segundos
        2. Crie uma função chamada "fetchSlow" que retorna uma *Promise* que se resolve com a String "slow done!" após 6 segundos
        3. Imprimir "Program starting....".
        4. Crie uma função assíncrona que aguarde que os dados retornem do "fetchFast" e, em seguida, imprima os dados. Em seguida, use "await" para esperar que os dados voltem do "fetchSlow" e, logo em seguida, imprima.
        5. Chame a função assíncrona que você criou
        6. Imprima "Program complete!"
        7. Quanto tempo isso leva e por quê?
        8. Como você poderia acelerar o processo?
*/

const startCode = performance.now();

function fetchFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fast Done!");
        }, 2000);
    });
}

function fetchSlow() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow Done!");
        }, 6000);
    });
}

console.log("Program Starting...");

async function waitingData() {
    const fetchFastResult = fetchSlow();
    // console.log(fetchFastResult);
    
    const fetchSlowResult = fetchFast();
    // console.log(fetchSlowResult);

    const arrayWithPromise = await Promise.all([fetchFastResult, fetchSlowResult]);
    console.log(arrayWithPromise);
    // console.log(arrayWithPromise[1]);

    const endCode = performance.now();
    console.log(`\nTime to run the program: ${((endCode - startCode)/1000).toFixed(1)} s`);

    console.log("Program complete!");
}

waitingData();

/*
    O programa levou cerca de 8 segundos para ser concluído após utilizar o "await" na chamada das duas funções "fetch".  Isso faz com que a função assíncrona pare na linha de chamada da função "fetchFast", o que, por sua vez, para a função até que a Promise seja resolvida. O mesmo ocorre com a chamada da função "fetchSlow".
    
    Podemos executar ambas as funções sem o uso do "await", pois a resolução de uma não está atrelada à resolução da outra. Assim, o método ".all()"  do construtor Promise pode ser utilizado. Assim, apenas esta linha necessita ser assíncrona e, por isso, chamamos o "await" para esperar que ambas as Promessas sejam resolvidas. É retornado um array com ambas as Promessas cumpridas, e este array apresenta os elementos na ordem de escrita do código - no nosso caso, o primeiro elemento é a Promessa cumprida da função "fetchFast"  e o segundo elemento é a Promessa cumprida da função "fetchSlow. Levou cerca de 6 segundos para terminar o programa com esta abordagem.
*/