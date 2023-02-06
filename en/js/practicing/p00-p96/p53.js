/*
    Practice 53: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds and rejects after 2 seconds. Show the Promise while it's pending. Next, print out "Program in progress..." and, finally, print out "Program completed" if the Promise fulfills or "Program failure" if the Promise rejects.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program completed!");
    }, 3000);

    setTimeout(() => {
        reject("Program failure!");
    }, 2000);
});

{
    myPromise
        .then(message => console.log(message))
        .catch(error => console.log(error))
}        

console.log("Program started...")
console.log(myPromise);
console.log("Program in progress...");