/**
 Practice 40 - Create the following Maps:
       - banana (name -> "banana", quantity -> 1, price -> 1.95)
       - apple (name -> "apple", quantity -> 1, price -> 1.45)
       - candy (name -> "candy", quantity -> 1, price -> 3.50)
       - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])

       After, print out the "store" Map to the terminal, and next print out all the products from "store" (only). Next, print out the 3rd product from "store" (only). Change the price of the "banana" to 1.75, and print out "banana" and "store". Finally, change the price of "candy" to 4.99 e print out "store" and "candy".
 */

const banana = new Map([
    ["name", "banana"],
    ["quantity", 1],
    ["price", 1.95],
]);

const apple = new Map([
    ["name", "apple"],
    ["quantity", 1],
    ["price", 1.45],
]);

const candy = new Map([
    ["name", "candy"],
    ["quantity", 1],
    ["price", 3.5],
]);

const store = new Map([
    ["storeNumber", 5],
    ["locationCity", "Milan"],
    ["locationCountry", "Italy"],
    ["products", [banana, apple, candy]],
]);

console.log("Vamos ver nosso 'store':");
console.log(store);
console.log("- - - - - - - - - -\n");

// Printing the products (only)
console.log("Which products have in 'store'?");
store.get("products").map((product) => console.log(product));
console.log("- - - - - - - - - -\n");

// 3º product
console.log("Which is the third product in 'store'?");
console.log(store.get("products")[2]);
console.log("- - - - - - - - - -\n");

// Changing the price of banana
console.log("It looks like the price of bananas has changed...");
const getIndex = store.get("products").indexOf(banana);
const newPrice = store.get("products")[getIndex].set("price", 1.75);
console.log(store);
console.log("- - - - - - - - - -\n\n");
console.log(banana);
console.log("- - - - - - - - - -\n\n");

// Changing the price of candy
console.log("It looks like the price of candy has changed...");
const index = store.get("products").indexOf(candy);
const price = store.get("products")[index].set("price", 4.99);
console.log(store);
console.log("- - - - - - - - - -\n\n");
console.log(candy);
