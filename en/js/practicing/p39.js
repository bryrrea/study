/**
Practice 39 - Create a Mao called "myPet" with the following entries: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Print out "myPet" to the terminal and, after that, add a new entry (color -> "Black"), change "breed" to be "Beagle". Next, remove "Data" from the list of friends and print out "myPet" to the terminal again. Finally, add "Chip" to the list of friends and print out "myPet" to the terminal.
*/

const myPet = new Map();

myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);

console.log("Let's see the Map?");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Adding new entry
console.log("Adding the entry 'color':");
myPet.set("color", "Black");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Changing breed
console.log("Changing the dog's breed:");
myPet.set("breed", "Beagle");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Removing last friend and adding a new friend
console.log("Data is no more Sudo's friend, but Sudo got a new friend!");
myPet.get("friends").pop();
myPet.get("friends").push("Chip");
console.log(myPet);
