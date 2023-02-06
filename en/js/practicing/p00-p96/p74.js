/*
    Practice 74:
        1. Create a function called "over9000" that has a single parameter which is a Number. This function:
            - Returns "It's over 9000!!!" if the argument is > 9000
            - Returns "Taking a Nappe..." in all other cases
        2. Do step 1 with a regular if/else clause first 
        3. Re-do step 1 with a ternary expressions
        BONUS: Can you shorten this with the short "arrow function expression" syntax?
*/

// if/else

const over9000 = (number) => {
    if (number > 9000) {
        return console.log("It's over 9000!!!");
    } else {
        return console.log("Taking a Nappe...");
    }
}

// ternary operator

const over9000Ternary = number => number > 9000 ? console.log("It's over 9000!!!") : console.log("Taking a Nappe...");

over9000(1000)
over9000Ternary(1000)

console.log("\n\n");

over9000(11000)
over9000Ternary(11000)