/*
Prática 36 - Crie um "Map" chamado "houseForSale" com as seguintes propriedades: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Em seguida:
    1. Imprima o Map;
    2. Exclua a propriedade cuja chave é "built";
    3. Altere a idade do proprietário para 30;
    4. Imprima o valor máximo de "offerPrice" usando reduce;
    5. Adicione a propriedade: sale Price -> 312000;
    6. Imprima "houseForSale" novamente.
*/

const houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

// Imprimindo Map
console.log("Imprimindo o Map:");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Excluindo "built"
console.log("'built' não é mais necessário:");
houseForSale.delete("built");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Alterando idade
console.log("Parece que o proprietário é mais velho do que falou...");
houseForSale.get("owner").age = 30;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Valor máximo do array offers
const maxOffer = houseForSale
    .get("offers")
    .reduce((maximum, offer) => Math.max(maximum, offer));
console.log(`A maior oferta foi de $${maxOffer}`);
console.log("- - - - - - - - - -\n\n");

// Adicionando sale Price
console.log("Adicionando uma nova entrada...");
houseForSale.set("sale price", 312000);
console.log(houseForSale);
