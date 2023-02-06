/*
Practice 38 - Create an Map called "mexico" with the following properties: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Next, print out the Map to the terminal. Next, change the "id" to be 25, and add "Honduras" to the list of neighbors to "mexico". Finally, print out "mexico" to the terminal again.
*/

const mexico = new Map([
    ["id", 24],
    ["name", "Mexico"],
    ["capital", "Mexico City"],
    ["neighbors", ["USA", "Guatemala", "Belize"]],
]);

console.log("Let's see the Map:");
console.log(mexico);
console.log("- - - - - - - - - -\n");

// Changing ID
console.log("Changing ID:");
mexico.set("id", 25);
console.log(mexico);
console.log("- - - - - - - - - -\n");

// Adding country
console.log("Adding Honduras as neighbor:");
mexico.get("neighbors").push("Honduras");
console.log(mexico);
console.log("- - - - - - - - - -\n");
