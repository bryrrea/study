/*
    Prática 56: Crie uma Promise que se resolva com o número 10 após 3 segundos. Em seguida, crie outra Promise que se resolva com o número 20 após 5 segundos. Como podemos calcular a soma desses dois valores resolvidos após ambas as Promises serem cumpridas com sucesso?
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});

const newPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 5000);
});

Promise
    .all([myPromise, newPromise])
    .then((values) => {
        const sum = values[0] + values[1];

        return sum;        
    })
    .then((sum) => console.log(sum));

/*
    The `.all()` method accepts an array with Promises and returns a new Promise that will be fulfilled after all Promises from the array are fulfilled. The resolved values of the Promises from the array will be returned as an array of resolved values in the same order of the previous array. A `.then()` method was used and a callback function will receives an array of resolved values to be used to sum 10 and 20.
*/
