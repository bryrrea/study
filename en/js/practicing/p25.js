/*
Practice 25 - Create an array called "prices" with the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Create an array called "lowPrices" and use filter to keep all the prices where the price plus a 15% tax is less than 10.00. Print out both arrays.
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
    if (price * 1.15 < 10.0) {
        return true;
    }
    return false;
});

console.log(prices);
console.log(lowPrices);
