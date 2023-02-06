/**
 Prática 40 - Crie os seguintes "Map"s:
    - banana (name -> "banana", quantity -> 1, price -> 1.95)
    - apple (name -> "apple", quantity -> 1, price -> 1.45)
    - candy (name -> "candy", quantity -> 1, price -> 3.50)
    - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])
    
    Em seguida, imprima o objeto "store" no terminal e, em seguida, imprima todos os produtos de "store" (apenas). Em seguida, imprima o 3º produto de "store" (apenas). Altere o preço da "banana" para 1.75 e imprima "banana" e "store". Finalmente, altere o preço de "candy" para 4.99 e imprima "store" e "candy".
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

// Imprimindo apenas os produtos
console.log("Quais produtos tem em 'store'?");
store.get("products").map((product) => console.log(product));
console.log("- - - - - - - - - -\n");

// 3º produto em store
console.log("Qual é o terceiro produto em 'store'?");
console.log(store.get("products")[2]);
console.log("- - - - - - - - - -\n");

// Alterando preço de banana
console.log("Parece que o preço da banana mudou...");
const getIndex = store.get("products").indexOf(banana);
const newPrice = store.get("products")[getIndex].set("price", 1.75);
console.log(store);
console.log("- - - - - - - - - -\n\n");
console.log(banana);
console.log("- - - - - - - - - -\n\n");

// Alterando preço de candy
console.log("Parece que o preço do doce também mudou...");
const index = store.get("products").indexOf(candy);
const price = store.get("products")[index].set("price", 4.99);
console.log(store);
console.log("- - - - - - - - - -\n\n");
console.log(candy);
