/*
    Prática 94:
        1. Criar uma variável chamada "e-mail" que aponte para: "monkey@trees.com".
        2. Criar uma variável chamada "emailPattern" que é uma expressão regular que procurará uma string que TERMINE com ".com".
        3. Teste "email" em "emailPattern" para ver se ele retorna verdadeiro/falso usando .test no "emailPattern".
        4. Encontre uma correspondência usando .match em "email" com o "emailPattern regex".
        5. Imprimir os resultados de 3 e 4.
        BONUS: O que há de errado com este padrão?
*/

const email = "monkey@trees.com";

const emailPattern = /\.com$/

console.log(emailPattern.test(email));
console.log(email.match(emailPattern));

/*
    Podemos ter um problema com chars como "." porque eles têm algum significado para regEx, então precisamos usar uma contra-barra para usá-los literalmente.
*/