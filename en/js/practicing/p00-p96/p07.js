/* Practice 5 - Create an algorithm that calculates how much should be paid for a product, considering the normal price tag and the chosen paymentMethod option. Use the following conditions:
1 - 10% discount when paid in cash on Debit;
2 - 15% discount when paid in cash or PIX;
3 - If paid in two installments on credit card, the consumer will pay the tag price;
4 - If paid in more than two installments on a credit card, the tag price plus 10% will be charged. */

function applyingDiscount (productPrice, paymentMethod) {
    if (paymentMethod === 1) {
        discount = 1 - 0.10;
        let productFinalPrice = (productPrice * discount).toFixed(2);
        return console.log("Your purchase will receive a 10% discount. The final price of the product is $ " + productFinalPrice + "." );
    } else if (paymentMethod === 2) {
        discount = 1 - 0.15;
        productFinalPrice = (productPrice * discount).toFixed(2);
        return console.log("Your purchase will receive a 15% discount. The final price of the product is $ " + productFinalPrice + "." );
    } else if (paymentMethod === 3) {
        return console.log("The consumer will pay the tag price. Therefore, the final price of the product is $ " + productPrice.toFixed(2) + "." );
    } else {
        discount = 1+ 0.10;
        productFinalPrice = (productPrice * discount).toFixed(2);
        return console.log("Your purchase will bear 10% interest. The final price of the product is $ " + productFinalPrice + "." );
    }
}

(function () {
    const productPrice = 100.00; // $
    const paymentMethod = 3;

    applyingDiscount(productPrice, paymentMethod);
})();