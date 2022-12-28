/**
 Prática 39 - Crie um "Map" chamado "myPet" com as seguintes propriedades: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Imprima "myPet" no terminal e, em seguida, adicione um novo conjunto (color -> "Black"), altere "breed" para "Beagle". Em seguida, remova "Data" da lista de amigos e imprima "myPet" no terminal novamente. Finalmente, adicione "Chip" à lista de amigos e imprima "myPet" no terminal. 
*/

const myPet = new Map();

myPet.set("name", "Sudo");
myPet.set("type", "Dog");
myPet.set("breed", "Poodle");
myPet.set("age", 7);
myPet.set("friends", ["Bit", "Byte", "Data"]);

console.log("Vamos ver nosso Map?");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Adicionando novo conjunto
console.log("Adicionando o conjunto 'cor':");
myPet.set("color", "Black");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Alterando breed
console.log("Alterando a raça do cão:");
myPet.set("breed", "Beagle");
console.log(myPet);
console.log("- - - - - - - - - -\n");

// Removendo o amigo e adicionando o novo amigo
console.log("Data não é mais amigo do Sudo, mas Sudo fez um novo amigo!");
myPet.get("friends").pop();
myPet.get("friends").push("Chip");
console.log(myPet);
