/*
    Practice 54: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds. Show the Promise while it's pending. Next, print out "Program in progress...". After, print out "Step 1 completed!" when the firs Promise fulfills. Make the first Promise return a new Promise that will fulfill after 3 seconds with the message "Step 2 completed!". Finally, print out the message from the second Promise after it fulfills.
*/

console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Step 1 completed!");
    }, 3000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
    .then((myPromise) => {
        console.log(myPromise); 

        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Step 2 completed!");
            }, 3000);           
        })
    .then(message => console.log(message));
});
