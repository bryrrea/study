/*
    Prática 96:
        1. Criar uma variável chamada "phoneNumber" que aponte para a string: "020-382-6940"
        2. Criar uma expressão regular chamada "phonePattern" que seja uma expressão regular que combine um número de telefone com o formato acima em "phoneNumber" (incluindo traços) 
        3. Teste "phoneNumber" em"phonePattern" para ver se ele retorna verdadeiro/falso usando .test no "phonePattern".
        4. Encontre uma correspondência usando .match no "phoneNumber" com o "phonePattern".
        5. Imprimir os resultados de 3 e 4.
        BONUS: O que há de errado com este padrão?
*/

const phoneNumber = "020-382-6940";

const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

console.log(phonePattern.test(phoneNumber));
console.log(phoneNumber.match(phonePattern));

/*
    A questão aqui é que nem todos os locais têm um número de telefone como o padrão. Precisamos ter em mente o código do país, o código do estado, etc...
*/