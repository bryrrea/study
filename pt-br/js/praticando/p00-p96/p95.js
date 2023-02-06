/*
    Prática 95: Baseado no exercício 2
        1. Criar uma variável chamada "e-mail" que aponte para: "monkey@trees.com".
        2. Criar uma variável chamada "emailPattern" que é uma expressão regular que procurará uma string que TERMINE com ".com". E tem QUALQUER número de letras seguido do char '@' seguido de QUALQUER número de letras e terminando com o "".com".
        3. Teste "email" em "emailPattern" para ver se ele retorna verdadeiro/falso usando .test no "emailPattern".
        4. Encontre uma correspondência usando .match em "email" com o "emailPattern".
        5. Imprimir os resultados de 3 e 4.
        BONUS: O que há de errado com este padrão?
*/

const email = "monkey@trees.com";

const emailPattern = /\w*@\w*\.com$/;

console.log(emailPattern.test(email));
console.log(email.match(emailPattern));

/*
    Um problema é que nem todo e-mail tem um domínio ".com". Outra questão é que '\w' assume qualquer caractere, incluindo caracteres proibidos em e-mail como '!' ou '*', por exemplo.
*/