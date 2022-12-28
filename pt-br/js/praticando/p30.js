/*
Prática 30 - Crie um *array* chamado "*prices*" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Em seguida, crie uma constante chamada "*afterTax*" que faça uma soma levando em consideração que, se o preço for maior que 6, adicione o preço sem imposto; caso contrário, adicione o preço mais um imposto de 20%. Finalmente, imprima ambos.
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
