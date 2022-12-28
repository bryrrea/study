/*
Practice 35 - Create the following objects:
       - banana (name -> "banana", quantity -> 1, price -> 1.95)
       - apple (name -> "apple", quantity -> 1, price -> 1.45)
       - candy (name -> "candy", quantity -> 1, price -> 3.50)
       - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])

       After, print out the "store" object to the terminal, and next print out all the products from "store" (only). Next, print out the 3rd product from "store" (only). Change the price of the "banana" to 1.75, and print out "banana" and "store". Finally, change the price of "candy" to 4.99 e print out "store" and "candy".
*/

let banana = {
    name: "banana",
    quantity: 1,
    price: 1.95,
};

let apple = {
    name: "apple",
    quantity: 1,
    price: 1.45,
};

let candy = {
    name: "candy",
    quantity: 1,
    price: 3.5,
};

let store = {
    storeNumber: 5,
    locationCity: "Milan",
    locationCountry: "Italy",
    products: [banana, apple, candy],
};

console.log(store);
console.log("- - - - - - - - - - -");

// Printing all products imagining that I could increase the array
console.log("Printing all the products:\n");

store.products.map((product) => console.log(product));
console.log("- - - - - - - - - - -");

// Third product
console.log("Printing the third product from 'store' object:\n");

console.log(store.products[2]);
console.log("- - - - - - - - - - -");

// Changing price of bananas
console.log("I think the price of the banana has increased!\n");

const i = store.products.indexOf(banana);
store.products[i].price = 1.75;
console.log(store);
console.log("- - - - - - - - - - -\n");
console.log(banana);
console.log("- - - - - - - - - - -");

// Changing price of candy
console.log("I think the price of the candy has increased!\n");

const index = store.products.indexOf(candy);
store.products[index].price = 4.99;
console.log(store);
console.log("- - - - - - - - - - -\n");
console.log(candy);
