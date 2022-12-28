/*
    Practice 50 - Create an empty Set called "names" with the following strings: "Bilbo", "Hermione", "Spock", "Leia". Next, create another empty Set called "capsNames". Use a for-of loop to loop over "names" and adds the capitalized version of each name to the "capsNames" Set. Finally, print out "capsNames".
*/

const names = new Set(["Bilbo", "Hermione", "Spock", "Leia"]);

let capsNames = new Set();

for (const name of names) {
    capsNames.add(name.toUpperCase());
}
console.log(capsNames); // { 'BILBO', 'HERMIONE', 'SPOCK', 'LEIA' }
