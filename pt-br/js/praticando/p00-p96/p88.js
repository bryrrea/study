/*
    Prática 88:
    
    1. Criar uma função geradora assíncrona que tenha um único parâmetro chamado "time". Esta função produzirá uma Promessa que se resolve com o tempo passado como parâmetro (em ms). O tempo para cada promessa subsequente levará o dobro de tempo necessário.
    2. Crie o objeto gerador chamando a função com o valor 100 para iniciar.
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa).
    4. Exemplo de saída se começamos com:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
        - Se imprimirmos o "time" de cada laço, receberíamos:
        - 100, 200, 400, 800, 1600, 1600, 3200 ... etc.
*/

async function* generator (time) {
    while (true) {
        yield new Promise((resolve, reject) => {
            
                setTimeout(() => {
                    resolve(`Promise Fulfilled after ${time} ms.`);
                }, time)

                time *= 2;        
        })
    }
}

const generatorObject = generator(100);

async function run () {
    for await (const value of generatorObject) {
        console.log(value);
    }
}

run();