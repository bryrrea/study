/* Prática 5 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a opção de pagamento escolhida. Utilize as seguintes condições:
1 - 10% de desconto quando pago à vista no Débito;
2 - 15% de desconto quando pago à vista em dinheiro ou PIX;
3 - Se pago em duas vezes no cartão de crédito, o consumidor pagará o preço de etiqueta;
4 - Se fizer em mais de duas vezes no cartão de crédito, será cobrado o preço da etiqueta acrescido de 10%. */

const productPrice = 100.00; // em R$
const discountCard = 0.10;
const discountCash = 0.15;
const increase = 0.10;
const payment = 3;

if (payment === 1) {
    let productFinalPrice = (productPrice * (1 - discountCard)).toFixed(2);
    console.log("Sua compra terá 10% de desconto. O preço final do produto é R$ " + productFinalPrice + "." );
} else if (payment === 2) {
    let productFinalPrice = (productPrice * (1 - discountCash)).toFixed(2);
    console.log("Sua compra terá 15% de desconto. O preço final do produto é R$ " + productFinalPrice + "." );
} else if (payment === 3) {
    console.log("O consumidor pagará o preço de etiqueta. Portanto, o preço final do produto é R$ " + productPrice + "." );
} else {
    let productFinalPrice = (productPrice * (1 + increase)).toFixed(2);
    console.log("Sua compra terá 10% de juros. O preço final do produto é R$ " + productFinalPrice + "." );
}