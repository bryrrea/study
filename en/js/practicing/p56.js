/*
    Practice 56: Create a Promise that resolver with the number 10 after 3 seconds. Next, create another Promise that resolves withe the number 20 after 5 seconds. How can we compute the sum of these two resolved values after both promises successfully fulfill?
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
