/*
Prática 20 - Crie um *array* chamado *prices* e que receba os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um novo *array* chamado *taxedPrices* e, se o preço for maior do que 10, adicione 20% de taxa. Caso contrário, não adicione taxa alguma. No final, mostre os dois *arrays*.
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const taxFunction = (price) => {
    if (price > 10) {
        newPrice = +(price * 1.2).toFixed(2);
    } else {
        newPrice = +price.toFixed(2);
    }
    return newPrice;
};

const taxedPrices = prices.map(taxFunction);

console.log(prices);
console.log(taxedPrices);
