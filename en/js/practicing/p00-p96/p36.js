/*
Practice 36 - Create an object called "houseForSale" with the following properties: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Next:
     1. Print out the object;
     2. Delete the property which "built" is the key;
     3. Change the age of the owner to 30;
     4. Print out the maximum "offerPrice" value using reduce;
     5. Add the property: sale price -> 312000;
     6. Print out "houseForSale" again.
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

// 1. Print out the object;
console.log("Printing the object:");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// 2. Delete the property which "built" is the key;
console.log("Deleting 'built' property:");
delete houseForSale.built;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// 3. Change the age of the owner to 30;
console.log("Lets change the age of the owner:");
houseForSale.owner.age = 30;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// 4. Print out the maximum "offerPrice" value;
console.log("Which is the maximum offer?");
const maximumOffer = houseForSale.offers.reduce(
    (maximum, price) => Math.max(maximum, price),
    0
);
console.log(maximumOffer);
console.log("- - - - - - - - - -\n\n");

//5. Add the property: salePrice -> 312000 and 6. Print out the object;
console.log("Adding a new property:");
houseForSale["sale price"] = 312000;
console.log(houseForSale);
