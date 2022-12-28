/*
Prática 25 - Crie um *array* chamado "*prices*" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um *array* chamado "*lowPrices*" e use o *filter* para manter todos os preços em que o preço mais um imposto de 15% é menor que 10.00. Imprima ambos os *arrays*.
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
