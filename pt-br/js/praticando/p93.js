/*
    Prática 93:
        1. Criar uma variável chamada "quote" que aponte para: "What is this? A center for ants?"
        2. Criar uma variável chamada "pattern" que aponte para uma expressão regular para procurar por "formiga" em uma corda.
        3. Use o método .test no "pattern" na etapa 2 para verificar se "quote" tem o padrão
        4. Use o método .match na string "quote" para retornar uma correspondência para a regexp "pattern".
        5. Imprimir os resultados das etapas 3 e 4
*/

const quote = "What is this? A center for ants?"

const pattern = /ant/;

console.log(pattern.test(quote));

console.log(quote.match(pattern));

