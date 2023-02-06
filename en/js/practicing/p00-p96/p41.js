/*
Practice 41 - Create a Map called "houseForSale" with the following entries: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Next:
     1. Print out the Map;
     2. Delete the entry which "built" is the key;
     3. Change the age of the owner to 30;
     4. Print out the maximum "offerPrice" value using reduce;
     5. Add the property: salePrice -> 312000;
     6. Print out "houseForSale" again.
*/

const houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", "2012");
houseForSale.set("owner", { name: "Blake", age: 29 });
houseForSale.set("offers", [290000, 295000, 315000, 312000]);

// Printing Map
console.log("Printing Map:");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Deleting "built"
console.log("'built' is no more necessary:");
houseForSale.delete("built");
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Changing owner's age
console.log("It looks like the owner is more older than he said...");
houseForSale.get("owner").age = 30;
console.log(houseForSale);
console.log("- - - - - - - - - -\n\n");

// Max malue from offer array
const maxOffer = houseForSale
    .get("offers")
    .reduce((maximum, offer) => Math.max(maximum, offer));
console.log(`The bigger offer was $${maxOffer}.`);
console.log("- - - - - - - - - -\n\n");

//Adding sale price
console.log("Adding a new entry...");
houseForSale.set("sale price", 312000);
console.log(houseForSale);
