/* Practice 5 - Create an algorithm that calculates how much should be paid for a product, considering the normal price tag and the chosen payment option. Use the following conditions:
1 - 10% discount when paid in cash on Debit;
2 - 15% discount when paid in cash or PIX;
3 - If paid in two installments on credit card, the consumer will pay the tag price;
4 - If paid in more than two installments on a credit card, the tag price plus 10% will be charged. */

const productPrice = 100.00; // $
const discountCard = 0.10;
const discountCash = 0.15;
const increase = 0.10;
const payment = 3;

if (payment === 1) {
    let productFinalPrice = (productPrice * (1 - discountCard)).toFixed(2);
    console.log("Your purchase will receive a 10% discount. The final price of the product is $ " + productFinalPrice + "." );
} else if (payment === 2) {
    let productFinalPrice = (productPrice * (1 - discountCash)).toFixed(2);
    console.log("Your purchase will receive a 15% discount. The final price of the product is $ " + productFinalPrice + "." );
} else if (payment === 3) {
    console.log("The consumer will pay the tag price. Therefore, the final price of the product is $ " + productPrice + "." );
} else {
    let productFinalPrice = (productPrice * (1 + increase)).toFixed(2);
    console.log("Your purchase will bear 10% interest. The final price of the product is $ " + productFinalPrice + "." );
}