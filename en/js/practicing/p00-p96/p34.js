/*
Practice 34 - Create an object called "myPet" with the following properties: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Print out "myPet" to the terminal and, after that, add a new property (color -> "Black"), change "breed" to be "Beagle". Next, remove "Data" from the list of friends and print out "myPet" to the terminal again. Finally, add "Chip" to the list of friends and print out "myPet" to the terminal.
*/

let myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"],
};

console.log(myPet);
console.log("----------------------------------------- \n");

myPet.color = "Black";
myPet.breed = "Beagle";
myPet.friends.pop();
console.log(myPet);
console.log("----------------------------------------- \n");

myPet.friends.push("Chip");
console.log(myPet);
