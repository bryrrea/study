/*
    Practice 55:
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the value {data: "Hello, friend", error: null}
    3. Print out the Promise while it's pending
    4. Print out "Program in progress..."
    5. Create a first Promise chain using the Promise above and print out the resolved value when the first Promise fulfills
    6. Make the first Promise return another Promise that will fulfills after 2 seconds with the message "First Promise chain complete!"
    7. Print out the message from the above Promise after it fulfills
    8. Create a second Promise chain using the Promise above and print out the resolved value when the second Promise fulfills
    9. Make this second Promise return another Promise that will fulfill after 10 seconds with the message "Second Promise chain completed!"
    10. Print out the message from the above Promise after it fulfills
*/

console.log("Program started...");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            data: "Hello, friend!",
            error: null,
        });
    }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
    .then((myPromise) => {
        console.log(myPromise);

        const newPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve("First Promise chain completed!");
            }, 2000)
        });

        return newPromise;
    })
    .then((newPromise) => {
        console.log(newPromise);

        const anotherPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Second Promise chain completed!");
            }, 10000);
        });

        return anotherPromise
    })
    .then(anotherPromise => console.log(anotherPromise));