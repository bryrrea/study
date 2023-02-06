/*
    Practice 87:

    1. Create an async Generator function that has a single parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will yield a Promise that resolves after 100ms that:
        - If the letter is a vowel (a, e, i, o, u) then resolve with a "*"
        - Otherwise resolve with the letter, but in uppercase
    2. Create the generator object by calling the function with a value of "Monkeys are the coolest animal!"
    3. Use a for-await-of loop to loop through the generator. There are MANY ways to check if a string has any of several letters
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