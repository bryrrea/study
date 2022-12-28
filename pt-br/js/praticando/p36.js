/*
Prática 36 - Crie um objeto chamado "houseForSale" com as seguintes propriedades: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Em seguida:
    1. Imprima o objeto;
    2. Exclua a propriedade cuja chave é "built";
    3. Altere a idade do proprietário para 30;
    4. Imprima o valor máximo de "offerPrice" usando reduce;
    5. Adicione a propriedade: salePrice -> 312000;
    6. Imprima "houseForSale" novamente.
*/

const houseForSale = {
    area: 940,
    value: 320000,
    streetName: "Fifth Street",
    built: "2012",
    owner: {
        name: "Blake",
        age: 29,
    },
    offers: [290000, 295000, 315000, 312000],
};

// Imprimindo Map
console.log("Imprimindo o Map:");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Excluindo "built"
console.log("'built' não é mais necessário:");
delete houseForSale.built;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Alterando idade
console.log("Parece que o proprietário é mais velho do que falou...");
houseForSale.owner.age = 30;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Valor máximo do array offers
const maxOffer = houseForSale.offers.reduce(
    (maximum, price) => Math.max(maximum, price),
    0
);
console.log(`A maior oferta foi de $${maxOffer}`);
console.log("- - - - - - - - - -\n\n");

// Adicionando sale Price
console.log("Adicionando uma nova entrada...");
houseForSale["sale price"] = 312000;
console.log(houseForSale);
