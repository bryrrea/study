/* Prática 7 - Crie funções para calcular o que deve ser pago por um produto, considerando o preço normal de etiqueta e a opção de pagamento escolhida. Utilize as seguintes condições:
1 - 10% de desconto quando pago à vista no Débito;
2 - 15% de desconto quando pago à vista em dinheiro ou PIX;
3 - Se pago em duas vezes no cartão de crédito, o consumidor pagará o preço de etiqueta;
4 - Se fizer em mais de duas vezes no cartão de crédito, será cobrado o preço da etiqueta acrescido de 10%. */

function aplicandoDesconto (precoDoProduto, modoDePagamento) {
    if (modoDePagamento === 1) {
        desconto = 1 - 0.10;
        let precoFinal = (precoDoProduto * desconto).toFixed(2);
        return console.log("Sua compra terá 10% de desconto. O preço final do produto é R$ " + precoFinal + "." );
    } else if (modoDePagamento === 2) {
        desconto = 1 - 0.15;
        precoFinal = (precoDoProduto * desconto).toFixed(2);
        return console.log("Sua compra terá 15% de desconto. O preço final do produto é R$  " + precoFinal + "." );
    } else if (modoDePagamento === 3) {
        return console.log("O consumidor pagará o preço da etiqueta. Assim, o preço final é R$ " + precoDoProduto.toFixed(2) + "." );
    } else {
        desconto = 1+ 0.10;
        precoFinal = (precoDoProduto * desconto).toFixed(2);
        return console.log("Sua compra terá um acréscimo de 10%. O preço final do produto é R$ " + precoFinal + "." );
    }
}

(function () {
    const precoDoProduto = 100.00; // $
    const modoDePagamento = 1;

    aplicandoDesconto(precoDoProduto, modoDePagamento);
})();