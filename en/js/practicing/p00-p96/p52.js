/*
    Practice 52: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds. Show the Promise while it's pending. Next, print out "Program in progress..." and, finally, print out "Program completed" when the Promise completes after 3 seconds.
*/

const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Program completed!")
    }, 3000)
});

newPromise.then(message => console.log(message))

console.log(newPromise);
console.log("Program started...");
console.log("Program in progress...");

