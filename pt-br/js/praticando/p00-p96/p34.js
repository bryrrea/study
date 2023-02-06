/*
Prática 34 - Crie um objeto chamado "myPet" com as seguintes propriedades: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Imprima "myPet" no terminal e, em seguida, adicione uma nova propriedade (color -> "Black"), altere "breed" para "Beagle". Em seguida, remova "Data" da lista de amigos e imprima "myPet" no terminal novamente. Finalmente, adicione "Chip" à lista de amigos e imprima "myPet" no terminal.
*/

let myPet = {
    name: "Sudo",
    type: "Dog",
    breed: "Poodle",
    age: 7,
    friends: ["Bit", "Byte", "Data"],
};

console.log("Vamos ver nosso objeto?");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Adicionando novo conjunto
console.log("Adicionando a propriedade 'cor':");
myPet.color = "Black";
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Alterando breed
console.log("Alterando a raça do cão:");
myPet.breed = "Beagle";
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Removendo o amigo e adicionando o novo amigo
console.log("Data não é mais amigo do Sudo, mas Sudo fez um novo amigo!");
myPet.friends.pop();
console.log(myPet);
console.log("- - - - - - - - - -\n");

myPet.friends.push("Chip");
console.log(myPet);
