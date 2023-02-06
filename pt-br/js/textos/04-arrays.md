# 4. _Arrays_ em JavaScript

## 4.1. Definição

Um _array_ é uma coleção de dados. Ele pode ser escrito com vários tipos de dados dentro de um mesmo _array_.

```javascript
const array1 = [1, 2, "banana", false, 3];
```

_Arrays_ são úteis para armazenar uma grande quantidade de dados dentro de uma variável. Entretanto, cada elemento do _array_ apontará para uma "caixa" separada na memória.

```

                               +--------+
                               |    1   |
                               +--------+
                               +--------+
                               |    2   |
                               +--------+
| array1 |    ==========>      +--------+
                               |"banana"|
                               +--------+
                               +--------+
                               |  false |
                               +--------+
                               +--------+
                               |   3    |
                               +--------+
```

Os _arrays_ são iteráveis, o que significa que podemos percorrer cada elemento de um _array_ para fazer algo com esse elemento. Portanto, os _arrays_ têm muitos métodos que funcionam apenas para _arrays_.

> Note que o JavaScript lida com _strings_ como um _array_ em que cada letra é um elemento desse _array_ (como muitas outras linguagens de programação)!

```javascript
const numbers = [1, 3, 5, 7, 9];

for (number = 0; number < numbers.length; number++) {
    console.log(numbers[number]);
}
```

No código acima, eu estava iterando sobre um _array_ chamado "_numbers_" para imprimir na tela cada número presente no _array_. Como podemos ver, para acessar um elemento do _array_, precisamos "chamar" o _array_ e, entre colchetes, definimos a posição que queremos acessar.

> Veja que o JavaScript começa com índice zero (assim como em muitas outras linguagens de programação).

Como você também pode ver no código acima, o uso do método `length` é comum quando estamos trabalhando com _arrays_, uma vez que nos permite incrementar ou diminuir o _array_ no futuro.  
Os _arrays_ têm muitos métodos que funcionam só com ele. Abaixo, listarei os cinco métodos mais comumente utilizados.

a. `length`: retorna o tamanho de um _array_;
b. `shift()`: remove e retorna o primeiro elemento de um _array_;
c. `unshift()`: adiciona um elemento no começo do array;
d. `pop()`: remove e retorna o último elemento de um _array_;
e. `push()`: adiciona um elemento no final de um _array_;

Podemos ler mais sobre outros métodos de _arrays_ [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).

### **'Bora praticar!**

-   Prática 12 - Escreva uma função chamada "_square_", que deve ter um número como parâmetro. Esta função deve retornar o quadrado de um número. Após, escreva outra função chamada "_SumOfSquares_", que deve conter dois números como parâmetro. Utilize a função "_square_" dentro da função "_sumOfSquares_", e deve retornar a soma do quadrado dos dois números.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 4.2. _map()_

O módulo `map()` é exclusivamente utilizado em _arrays_. Este módulo percorre um _array_ e recebe como parâmetro uma função de _callback_ que irá **modificar** ou **trabalhar** os dados existentes no _array_. O `map()` **retorna** um novo _array_, mantendo o original intacto.

> Devo prestar atenção no **retorna**, pois toda vez que o `map()` é chamado ele deve retornar alguma coisa!

A função pode ser escrita com a sintaxe que usa a palavra-chave _function_ ou com _arrow functions_. A função também pode ser escrita **fora** do `map()` e ser passada como argumento (o que, particularmente, acho melhor, pois fica mais claro).  
Abaixo, segue um exemplo baseado na minha preferência de escrever a função separadamente do módulo `map()`.

```javascript
const timesFive = (number) => (number *= 5);

numbers = [1, 2, 3, 4, 5];

const arrayTimesFive = numbers.map(timesFive);
console.log(arrayTimesFive);
```

Na primeira linha, escrevi uma função que recebe um número como parâmetro, e este número será multiplicado por 5. Após, criei um _array_ com cinco números. Depois, criei uma constante para utilizar o método `map()` no _array_ que criei anteriormente, passando a função como parâmetro a função que criei. A saída será um novo _array_ em que todos os elementos do _array_ original foram multiplicados por 5.

### **'Bora praticar!**

-   Prática 13 - Escreva uma função que some todos os elementos de um _array_ de números.

-   Prática 14 - Escreva uma função que calcule a média de um _array_ de notas de alunos (notas de 0 a 10).

-   Prática 15 - Escreva uma função que receba um _array_ de strings e retorne um novo _array_ com as strings em ordem alfabética.

-   Prática 16 - Escreva uma função que receba um _array_ de números e retorne um novo _array_ com cada elemento multiplicado por 2.

-   Prática 17 - Escreva uma função que dado um _array_ de strings, retorne um objeto com a contagem de ocorrências de cada string. Por exemplo, dado o _array_ ["a", "b", "a", "c", "b"], a função deve retornar o objeto { a: 2, b: 2, c: 1 }.

-   Prática 18 - Crie um _array_ com números de 25 a 30. Crie um novo _array_ usando o método `map()` e eleve cada número ao quadrado. No final, mostre os dois _arrays_.

-   Prática 19 - Crie um _array_ chamado _booleans_ e que receba `[true, true, false, true, false, false]`. Utilize o método `map()` para percorrer o _array_ e uma função que retorne um número qualquer quando a posição for `true` e zero quando for `false`. No final, mostre os dois _arrays_.

-   Prática 20 - Crie um _array_ chamado _"prices"_ e que receba os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um novo _array_ chamado _"taxedPrices"_ e, se o preço for maior do que 10, adicione 20% de taxa. Caso contrário, não adicione taxa alguma. No final, mostre os dois _arrays_.

-   Prática 21 - Crie um _array_ chamado _"items"_ que receba `["light", "banana", "phone", "book", "mouse"]`. Crie um novo _array_ chamado _"plurals"_ e crie uma função que, em conjunto com o método `map`, percorra todo o _array "items"_ e adicione um "s" no final de cada palavra. Imprima os dois _arrays_.

-   Prática 22 - Crie um _array_ chamado _"row"_ com os valores `[10, 20, 30, 40, 50]`. Crie um novo _array_ chamado _matrix_ a partir do uso do `map` no _array "row"_, retornando cada item em um _array_, resultando em um _array_ com duas dimensões. Imprima na tela os dois _arrays_. A resposta deve ser `[[10], [20], [30], [40], [50]]`.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 4.3. _`filter()`_

Temos alguns métodos para pesquisar _arrays_ em JavaScript.

|      Método       |                                                                                                        Como funciona                                                                                                        |
| :---------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|    `indexOf()`    | Devemos fornecer um parâmetro (uma palavra, um número, qualquer coisa) para ser pesquisado no _array_. Começa da esquerda para a direita e retorna a posição do índice do parâmetro fornecido. Caso contrário, retorna `-1` |
|  `lastIndexOf()`  |                                                          A mesma coisa que `indexOf()`, mas começa a executar o _array_ a partir do último elemento (lado direito)                                                          |
|   `includes()`    |                                                                Pesquisa por um elemento específico dentro do _array_ e retorna `true` se ele foi encontrado                                                                 |
|     `find()`      |                                         Também pesquisa por um elemento ou condição específica dentro do _array_. Se verdadeiro, retorna o elemento. Se falso, retorna `undefined`                                          |
|   `findIndex()`   |                                                      A mesma coisa que `find()`, mas retorna o índice do elemento se ele foi encontrado. Caso contrário, retorna `-1`                                                       |
| `findLastIndex()` |                                                                         Mesmo que `findIndex()`, mas começa a pesquisar da direita para a esquerda                                                                          |

Entretanto, temos um método especial para pesquisar coisas dentro de um _array_: o método `filter()`. O método `filter()` é semelhante aos métodos `find()`, `findIndex()` e `findLastIndex()`, pois aceita uma função para pesquisar elementos dentro de um _array_. No entanto, o método `filter()` difere no sentido de que ele retorna um novo _array_ contendo todos os elementos que correspondem aos critérios de pesquisa, enquanto os outros métodos retornam um único elemento ou o índice do elemento.

```javascript
const arrayWithNumbers = [1, 2, 3, 4, 5, 6];

const filteringEvenNumbers = arrayWithNumbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
});

console.log(arrayWithNumbers); // [ 1, 2, 3, 4, 5, 6 ]

console.log(filteringEvenNumbers); // [ 2, 4, 6]
```

Neste exemplo, o método `filter()` é usado para procurar números pares no _array_ `arrayWithNumbers`. O método `filter()` retorna um novo _array_ contendo todos os números pares encontrados no _array_ original, enquanto os outros métodos retornariam um único elemento ou o índice do elemento.

### **'Bora praticar!**

-   Prática 23 - Crie um _array_ chamado "_practice_" com números (10-20). Usando o filter, crie um novo _array_ que mantém os números pares em practice. Depois, imprima ambos os _arrays_. [Solução](/pt-br/js/praticando/p23.js)

-   Prática 24 - Crie um _array_ chamado "_countries_" com as seguintes entradas: ["France", "South Africa", "Brazil", "United States", "Sweden"]. Filtrar sobre o _array_ e manter somente os países que têm um espaço em branco em seu nome. Imprima ambos os _arrays_. [Solução](/pt-br/js/praticando/p24.js)

-   Prática 25 - Crie um _array_ chamado "_prices_" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um _array_ chamado "_lowPrices_" e use o _filter_ para manter todos os preços em que o preço mais um imposto de 15% é menor que 10.00. Imprima ambos os _arrays_. [Solução](/pt-br/js/praticando/p25.js)

-   Prática 26 - Crie um _array_ chamado "_values_": [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]. Crie um novo _array_ chamado "_hasTwos_" que filtre sobre os valores e mantenha somente os _sub-arrays_ que têm um 2 neles. Depois, imprima ambos os _arrays_. [Solução](/pt-br/js/praticando/p26.js)

-   Prática 27 - Crie um _array_ chamado "_nums_" com os seguintes valores: [10, 20, 30, 40, 50]. Crie um _array_ chamado "_timesTwo_" e, usando o `map()`, multiplique cada número por dois. Depois, crie um _array_ chamado "_over50_" que filtre "_timesTwo_" para manter somente os valores acima de 50. Portanto, imprima os três _arrays_. [Solução](/pt-br/js/praticando/p27.js)

## 4.4. _reduce()_

O método `reduce()` é um pouco mais complicado do que os dois métodos anteriores (`map()` e `filter()`), embora também seja usado para processar um _array_. Primeiro de tudo, este método aceita uma função como parâmetro. No entanto, esta função precisa ter dois parâmetros: um acumulador e uma variável para representar cada elemento do _array_. Outra coisa importante sobre o _reduce_ é que ele precisa de mais um parâmetro: um inicializador para o acumulador. Vejamos como a sintaxe funciona:

```javascript
array.reduce((acumulador, elementoDoArray) => {
    //código aqui
}, inicializador);
```

O inicializador será o primeiro valor assumido pelo acumulador, e ele será incrementado pelo próximo elemento do _array_.

```javascript
const numbersArray = [5, 10, 15, 20, 25, 30];

const sumOfNumbersArray = numbersArray.reduce(
    (previousNumber, currentNumber) => {
        return previousNumber + currentNumber;
    },
    0
);

console.log(numbersArray); // [5, 10, 15, 20, 25, 30]
console.log(sumOfNumbersArray); // 105
```

No código acima, criei um _array_ com números e uma variável para armazenar a soma dos números do _array_ anterior. Então, usei o método `.reduce()` e passei uma função anônima com dois parâmetros: `previousNumber` para acumular os números do _array_ (começando em zero, valor que eu defini como segundo parâmetro para `.reduce()`), e `currentNumber`, que irá iterar sobre cada elemento do _array_.

Portanto, na primeira iteração, `previousNumber = 0` e `currentNumber = 5`; na segunda iteração, `previousNumber = 5` (0 + 5) e `currentNumber = 10`; na terceira iteração, `previousNumber = 15` (5 + 10) e `currentNumber = 15`; na quarta iteração, `previousNumber = 30` (15 + 15) e `currentNumber = 20`; na quinta, `previousNumber = 50` e `currentNumber = 25`; na sexta, `previousNumber = 75` e `currentNumber = 30`; finalmente, na última iteração, `previousNumber = 105` e não há `currentNumber`. Portanto, a soma dos números do _array_ será igual ao parâmetro `previousNumber` após a última iteração.

> Observe que o `reduce()` também pode ser aplicado a _arrays_ de strings (o raciocínio é o mesmo) e este método **sempre** precisará retornar algo. Caso contrário, ele retorna `undefined`, o que pode causar erros na execução.

![](/src/jsReduce.jpg)

Portanto, podemos afirmar que o método `reduce()` retorna para nós uma forma reduzida do _array_ sem alterar quaisquer elementos do _array_ original.

### **'Bora praticar!**

-   Prática 28 - Crie um _array_ chamado "_points_" com os números de 55 a 60 (inclusos). Em seguida, crie uma variável chamada "_sum_" usando `reduce()` para somar os pontos em "points". Por último, imprima "points" e "sum". [Solução](/pt-br/js/praticando/p28.js)

-   Prática 29 - Crie um _array_ chamado "_companies_" com as seguintes _strings_: ["apple", "tesla", "spacex", "amazon", "google"]. Crie uma constante chamada "_modded_" que reduza o _array_ "_companies_" para uma string das empresas que não começam com a letra "a", separadas por traços. Imprima ambos. [Solução](/pt-br/js/praticando/p29.js)

-   Prática 30 - Crie um _array_ chamado "_prices_" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Em seguida, crie uma constante chamada "_afterTax_" que faça uma soma levando em consideração que, se o preço for maior que 6, adicione o preço sem imposto; caso contrário, adicione o preço mais um imposto de 20%. Finalmente, imprima ambos. [Solução](/pt-br/js/praticando/p30.js)

-   Prática 31 - Crie um _array_ chamado "_items_" com ["luz", "banana", "telefone", "livro", "mouse"]. Em seguida, crie um novo array chamado "_caps_", utilize `map()` sobre "_items_" e escreva em maiúsculo a primeira letra de cada string. Depois, crie uma constante chamada "_concat_" para reduzir todas as strings de _caps_ concatenando-as. Use um espaço para separar cada item. Finalmente, imprima "_items_", "_caps_" e "_concat_". (BÔNUS: tente fazer tudo em uma linha de código) [Solução](/pt-br/js/praticando/p31.js)

-   Prática 32 - Crie um _array_ chamado "_nums_" com [10, 30, 50, 70, 90]. Em seguida, crie um novo _array_ chamado "_squares_" e use `map()` sobre "_nums_" para retornar cada número ao quadrado. Depois, crie um _array_ chamado "_over1000_" e filtre os valores acima de 1000. Finalmente, crie uma constante chamada "_finale_" para reduzir o último _array_ a uma soma de seus elementos. Imprima cada _array_ e constante. (BÔNUS: tente fazer tudo em uma linha de código) [Solução](/pt-br/js/praticando/p32.js)
