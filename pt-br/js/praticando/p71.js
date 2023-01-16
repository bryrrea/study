/*
    Prática 71:
        1. Criar uma variável chamada "store" que é um Mapa. Em seguida, acrescente as seguintes entradas para "store":
            - Cups" com um valor de 46
            - "Candles" com um valor de 121
            - "Vases" com um valor de 15
        2. Use um for...of loop para percorrer através de "store", mas dentro a sintaxe do laço (const ____ de ____), desestruturação do uso para desestruturar a chave e o valor usando o estilo Array desestruturação.        
        3. Dentro do laço, imprima a chave e o valor no mesma linha separada por um " => ". Ex: Copos => 46
        (O corpo do laço deve ter apenas uma linha de código)
*/

const store = new Map();

store.set("Cups", 46);
store.set("Candles", 121); 
store.set("Vases", 15);

for (const [key, value] of store) {
    console.log(`${key} => ${value}`);
}