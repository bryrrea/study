/*
    Practice 75:
        1. Create a variable called "wizards" that points at the array: ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"]
        2. Map over "wizards" to create a new array that does the following:
        - If the name contains the letter "n" or "N" return the name but with all the "n"'s  and "N"'s replaced with a "*" character
        - Otherwise return the name, but upper-cased
        - Use a regular if/else statement for this    
        3. Repeat step 2 but with a ternary expression 
        BONUS: Can you shorten this with the short "arrow function expression" syntax?
*/

const wizards = ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"];

// if/else statement

const wizardsWithN = wizards.map((wizard) => {
   if (wizard.includes("n") || wizard.includes("N")) {
    return console.log(wizard.replace("n", "*").replace("N", "*"));
   } else {
    return console.log(wizard.toUpperCase());
   }
});

console.log("\n\n")

// ternary operator

const wizardsWithNTernary = wizards.map(wizard => wizard.includes("n") || wizard.includes("N")
? console.log(wizard.replace("n", "*").replace("N", "*"))
: console.log(wizard.toUpperCase())
);