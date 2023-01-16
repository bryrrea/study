/*
    Practice 76:
        1. Create a variable called "characters" that points at the array: ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
        2. Filter over "characters" to create a new array that does the following:
        - If the name has a space in it " ", keep it in the result (return true)
        - Otherwise, filter it out (return false)
        - Use a regular if/else statement for this    
        3. Repeat step 2 but with a ternary expression 
        BONUS: Can you shorten this with the short "arrow function expression" syntax?
*/

const characters = ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"];

// if/else statement

const notSingularName = characters.filter((name) => {
    if (name.includes(" ")) {
        return true;
    } else {
        return false;
    }
})

console.log(notSingularName);

console.log("\n\n");

// ternary operator

const notSingularNameTernary = characters.filter(name => name.includes(" ") ? true : false);

console.log(notSingularNameTernary);