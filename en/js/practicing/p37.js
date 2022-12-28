/*
Practice 37 - Create an object called "myConsole" and:
     1. Assign to "myConsole" the key "log" with a value that is an arrow function. This arrow function will have one parameter called "message" and the function will just print out the "message";
     2. How would you call this "log" function from inside the object?
*/

const myConsole = {
    log: (message) => console.log(message),
};

myConsole.log("Hello, friend!");

console.log(console);
