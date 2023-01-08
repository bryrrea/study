/*
    Practice 60:
    1. Create a `try` block that does the following: create a variable called "number" and initialize it to the number 1337, add a random number between 0-1000 to "number", and print out "number. If the number is lower than 2000, an Error should be threw with the message "You lose!", otherwise print out "You win" without throw/error
    2. Create a `catch` block that catches the error and print out it
    3. Inside the `catch` block, print out "number" as well
    4. What is the issue with this setup/code?
    5. How can we fix it so we can access "number" in the `catch`?
*/

let number = 1337;

function creatingRandomNumber(a, b) {
    const randomNumber = Math.floor(Math.random() * (b - a + 1)) + a;

    return randomNumber;
}

try {
    // let number = 1337;

    const randomNumber = creatingRandomNumber(0, 1000);

    number += randomNumber;

    console.log(randomNumber);

    console.log(number);

    if (number < 2000) {
        throw new Error("You lose!");
    } else {
        console.log("You win!");
    }
} catch(error) {
    console.error(error);

    console.log(number);
}

console.log("Done!");

/*
    The problem here is that the variable "number" is a local variable, i.e., it only exists and can only be called inside the "try" block. To fix this, we can create this variable OUTSIDE the "try" block, which will change it to a global variable, which can be accessed wherever we want. 
*/