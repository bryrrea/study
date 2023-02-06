/*
Practice 33 - Create an object called "mexico" with the following properties: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Next, print out the object to the terminal. Next, change the "id" to be 25, and add "Honduras" to the list of neighbors to "mexico". Finally, print out "mexico" to the terminal again.
*/

let mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbors: ["USA", "Guatemala", "Belize"],
};

console.log(mexico);
console.log("------------------------------------------------- \n");

mexico.id = 25;
mexico.neighbors.push("Honduras");
console.log(mexico);
