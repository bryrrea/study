/*
    Practice 57:
    1. Print out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program, print out "Program completed!"
    4. Run the program and watch it crash
    5. Create a `try...catch` block that print out the error message
    6. Run the program again and see the difference
*/

console.log("Program started...");

try {
    throw new Error("Uh oh!");
} catch(error) {
    console.error(error);
}

console.log("Program completed!");