/*
Practice 20 - Create an array called prices and that receives the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Create a new array using the `map`() method and round each number to the nearest integer. At the end, show the two arrays.
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
