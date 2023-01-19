# 13. Função Geradora

## 13.1. Definição

A **generator function** is a function that can return many values over time, being paused and resumed as many times as you like. An iterator Object is returned each time the generator function is called, and this iterator controls the execution of the generator.

## 13.2. Sintaxe

```javascript
function* anyName() {
    yield [value / code];
}
```

Um `*` é utilizado para mostrar que uma função geradora está sendo criada. A palavra reservada `yield` é utilizada para controlar a chamada/retorno da função.

## 13.3. Como ela funciona?

A função começa pausada quando a chamamos. Para retornar o valor ou funcionalidade, utilizamos `next()`, um método utilizado com funções geradoras para retornar o próximo valor ou funcionalidade da função. Vamos ver um exemplo:

```javascript
function* evenNumbers(number, n) {
    while (n > 0) {
        if (number % 2 === 0) {
            yield number;
            n--;
        }

        number++;
    }
}

const evenNumbersArray = Array.from(evenNumbers(99, 10));
console.log(evenNumbersArray);
```

A função geradora acima recebe dois números como parâmetro: o primeiro é qualquer número que você deseja verificar, e o segundo é para mostrar os `n` números pares existentes a partir do parâmetro `number`. Enquanto o parâmetro `n` é maior que zero, a função retornará o número se for um número par e 1 é subtraído de `n` e incrementamos o `número` em um. Então, criei um array utilizando o método `from()` do construtor `Array` para retornar um array com os números pares. A saída do exemplo acima - utilizando `number = 99` e `n = 10` - será o seguinte array: `[ 100, 102, 104, 106, 108, 110, 112, 114, 116, 118 ]`. Assim, a função retornou todos os 10 números pares existentes após o número 99.
Mas o código acima se parece muito com um código síncrono. Portanto, não é a melhor maneira de aplicar uma função geradora, pois esta é muito útil quando se deseja trabalhar com código assíncrono.

```javascript
function* evenNumbers(number, n) {
    while (n > 0) {
        if (number % 2 === 0) {
            yield number;
            n--;
        }

        number++;
    }
}

const evens = evenNumbers(99, 10);
const evenNumbersArray = [];
let nextNumber = evens.next();

while (nextNumber.done === false) {
    evenNumbersArray.push(nextNumber.value);
    nextNumber = evens.next();
}

console.log(evenNumbersArray);
```

O código acima é muito mais assíncrono do que o anterior. Eu criei um Objeto gerador (`evens`) que retorna um Objeto com duas entradas (`{value: value, done: true ou false}`). O método `next()` é chamado no iterador (`evens`) para retomar a função geradora. Então a função geradora para até que tenhamos um método `next()` para retomar a função novamente. Ela se repete até que tenhamos uma declaração `return` na função ou até que ela chegue ao final da função. No exemplo acima, não temos uma declaração de `return`, então a função geradora termina quando `n` é zero.

## 13.4. **'Bora praticar!**

-   Prática 81:

    1. Crie uma função geradora chamada "countTo10" que produzirá os números 0-10 (inclusive) e depois pare.
    2. Crie o objeto gerador chamando a função geradora e itere através do gerador usando um for...of loop.
       [Solução](/pt-br/js/praticando/p81.js)

-   Prática 82:

    1. Criar uma função geradora chamada "randomNumber" que irá gerar um novo número aleatório infinitamente
    2. Use um loop para gerar 10 números aleatórios usando o Objeto gerador que você obtém ao chamar "randomNumber".
       [Solução](/pt-br/js/praticando/p82.js)

-   Prática 83:

    1. Criar uma função geradora chamada "randomAmountFromRange" que tem 3 parâmetros: amount, min e max
    2. Esta função gerará a quantidade de números aleatórios fornecidos como argumento, entre o min e o max (inclusive), por exemplo: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Crie um for...of loop que irá percorrer através dos seguintes objetos geradores para testá-lo: - randomAmountFromRange(3, 10, 20) - randomMountFromRange(5, 100, 200) - randomMountFromRange(10, 1000, 2000)
       [Solução](/pt-br/js/praticando/p83.js)

-   Prática 84:
    1. Criar uma função geradora chamada "getRandomNumber" que gera um número aleatório entre 1-10 (inclusive)
       exatamente 5 vezes
    2. Criar outra função geradora chamada "groceryList". Dentro da "groceryList", crie uma variável chamada
       "groceries" que aponta para: ["Avocado", "Cookie", "Milk", "Soup", "Soda"]. O gerador irá retirar e remover de "groceries" um item aleatoriamente
       Ex: const groceries = groceryList();
       groceries.next() => "Cookie"
       groceries.next() => "Sopa
    3. Crie 2 objetos geradores chamando cada uma das 2 funções geradoras acima
    4. Crie um laço for regular para rodar 5 vezes e chamar o método .next() em cada um dos Objetos geradores para imprimir um número aleatório seguido de um item de compra aleatório:
       Ex: 5 Abacate
       10 Sopa
       [Solução](/pt-br/js/praticando/p84.js)
