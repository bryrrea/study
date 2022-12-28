/*
 Prática 33 - Crie um objeto chamado "mexico" com as seguintes propriedades: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Em seguida, imprima o objeto no terminal. Em seguida, altere o "id" para 25 e adicione "Honduras" à lista de vizinhos de "mexico". Finalmente, imprima "mexico" no terminal novamente.

*/

let mexico = {
    id: 24,
    name: "Mexico",
    capital: "Mexico City",
    neighbors: ["USA", "Guatemala", "Belize"],
};

console.log("Vamos ver nosso Map:");
console.log(mexico);
console.log("- - - - - - - - - -\n");

// Trocando a ID
console.log("Trocando a ID:");
mexico.id = 25;
console.log(mexico);
console.log("- - - - - - - - - -\n");

// Adicionando país
console.log("Adicionando Honduras como neighbor:");
mexico.neighbors.push("Honduras");
console.log(mexico);
