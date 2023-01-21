/*
    Prática 87:

    1. Criar uma função geradora assíncrona que tenha um único parâmetro chamado "sentence". A função fará um loop através de "sentence" letra por letra, e para cada letra ela produzirá uma Promessa que resolve após 100ms que:
        - Se a letra for uma vogal (a, e, i, o, u) então resolva com um "\*".
        - Caso contrário, resolva com a letra, mas em maiúscula
    2. Crie o objeto gerador chamando a função com um valor de "Monkeys are the coolest animal!"
    3. Use um for-await-of- loop para percorrer o gerador. Há MUITAS maneiras de verificar se uma string tem alguma das letras
*/

const vowelArray = ["a", "e", "i", "o", "u"]

async function* generatorSentence (sentence) {
    for (let i = 0; i < sentence.length; i++) {
        const stringPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (vowelArray.includes(sentence[i].toLowerCase())) {
                    resolve("*");
                } else {
                    resolve(sentence[i].toUpperCase());
                }
            }, 100);
        })
        yield stringPromise
    }

}

const generatorObject = generatorSentence("Monkeys are the coolest animal!");

async function run () {
    for await (const value of generatorObject) {
        console.log(value);
    }
}

run();