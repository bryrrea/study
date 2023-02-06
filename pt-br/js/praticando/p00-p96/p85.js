/*
    Prática 85:

    1. Criar uma função geradora assíncrona que produza uma promessa que se resolve após 1 segundo com um número entre 0-9 (inteiro e inclusivo)
    2. Crie o objeto gerador chamando a função
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa)
*/

async function* generator() {
    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                const randomNumber = Math.floor(Math.random() * 10);
                resolve(randomNumber);
            }, 1000)
        })
    }
}        

const generatorObject = generator();

async function display() {
    for await (const number of generatorObject) {
        console.log(number);
    }
}

display();