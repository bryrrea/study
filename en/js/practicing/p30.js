/*
Practice 30 - Create an array called "prices" with the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Next, create a constant called "afterTax" that does a sum getting in mind that, if the price is greater than 6, add the price without tax; otherwise, add the price plus a tax of 20%. Finally, print out both.
*/

const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const afterTax = prices.reduce((accumulator, price) => {
    if (price > 6) {
        return accumulator + price;
    } else {
        return +(accumulator + price * 1.2).toFixed(2);
    }
}, 0);

console.log(prices);
console.log(afterTax);
