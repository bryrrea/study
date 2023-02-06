/*
Prática 35 - Crie os seguintes objetos:
    - banana (name -> "banana", quantity -> 1, price -> 1.95)
    - apple (name -> "apple", quantity -> 1, price -> 1.45)
    - candy (name -> "candy", quantity -> 1, price -> 3.50)
    - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])
    
    Em seguida, imprima o objeto "store" no terminal e, em seguida, imprima todos os produtos de "store" (apenas). Em seguida, imprima o 3º produto de "store" (apenas). Altere o preço da "banana" para 1.75 e imprima "banana" e "store". Finalmente, altere o preço de "candy" para 4.99 e imprima "store" e "candy".
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

console.log("Vamos ver nosso 'store':");
console.log(store);
console.log("- - - - - - - - - -\n");

// Imprimindo apenas os produtos
console.log("Quais produtos tem em 'store'?");
store.products.map((product) => console.log(product));
console.log("- - - - - - - - - - -\n");

// 3º produto em store
console.log("Qual é o terceiro produto em 'store'?");

console.log(store.products[2]);
console.log("- - - - - - - - - - -\n");

// Alterando preço de banana
console.log("Parece que o preço da banana mudou...");

const i = store.products.indexOf(banana);
store.products[i].price = 1.75;
console.log(store);
console.log("- - - - - - - - - - -\n");
console.log(banana);
console.log("- - - - - - - - - - -\n");

// Alterando preço de candy
console.log("Parece que o preço do doce também mudou...");

const index = store.products.indexOf(candy);
store.products[index].price = 4.99;
console.log(store);
console.log("- - - - - - - - - - -\n");
console.log(candy);
