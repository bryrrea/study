# *Arrays* em JavaScript  

## 10. *Arrays*  
Um *array* é uma coleção de dados. Ele pode ser escrito com vários tipos de dados dentro de um mesmo *array*.  

```javascript
const array1 = [1, 2, "banana", false, 3];
```  

*Arrays* são úteis para armazenar uma grande quantidade de dados dentro de uma variável. Entretanto, cada elemento do *array* apontará para uma "caixa" separada na memória. 

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

Os *arrays* são iteráveis, o que significa que podemos percorrer cada elemento de um *array* para fazer algo com esse elemento. Portanto, os *arrays* têm muitos métodos que funcionam apenas para *arrays*.  

> Note que o JavaScript lida com *strings* como um *array* em que cada letra é um elemento desse *array* (como muitas outras linguagens de programação)!  

```javascript
const numbers = [1, 3, 5, 7, 9];

for (number = 0; number < numbers.length; number++){
    console.log(numbers[number]);
}
```  

No código acima, eu estava iterando sobre um *array* chamado "*numbers*" para imprimir na tela cada número presente no *array*. Como podemos ver, para acessar um elemento do *array*, precisamos "chamar" o *array* e, entre colchetes, definimos a posição que queremos acessar.  

> Veja que o JavaScript começa com índice zero (assim como em muitas outras linguagens de programação).  

Como você também pode ver no código acima, o uso do método `length` é comum quando estamos trabalhando com *arrays*, uma vez que nos permite incrementar ou diminuir o *array* no futuro.  
Os *arrays* têm muitos métodos que funcionam só com ele. Abaixo, listarei os cinco métodos mais comumente utilizados.  

 a. `length`: retorna o tamanho de um *array*;
 b. `shift()`: remove e retorna o primeiro elemento de um *array*;
 c. `unshift()`: adiciona um elemento no começo do array;
 d. `pop()`: remove e retorna o último elemento de um *array*;
 e. `push()`: adiciona um elemento no final de um *array*;  

Podemos ler mais sobre outros métodos de *arrays* [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).  


#### **'Bora praticar!**

 - Prática 12 - Escreva uma função chamada "*square*", que deve ter um número como parâmetro. Esta função deve retornar o quadrado de um número. Após, escreva outra função chamada "*SumOfSquares*", que deve conter dois números como parâmetro. Utilize a função "*square*" dentro da função "*sumOfSquares*", e deve retornar a soma do quadrado dos dois números. [Solução](/pt-br/js/praticando/13-p12.js)  

### 10.1. *map()*  
O módulo `map()` é exclusivamente utilizado em *arrays*. Este módulo percorre um *array* e recebe como parâmetro uma função de *callback* que irá **modificar** ou **trabalhar** os dados existentes no *array*. O `map()` **retorna** um novo *array*, mantendo o original intacto.  

> Devo prestar atenção no **retorna**, pois toda vez que o `map()` é chamado ele deve retornar alguma coisa!  

A função pode ser escrita com a sintaxe que usa a palavra-chave *function* ou com *arrow functions*. A função também pode ser escrita **fora** do `map()` e ser passada como argumento (o que, particularmente, acho melhor, pois fica mais claro).  
Abaixo, segue um exemplo baseado na minha preferência de escrever a função separadamente do módulo `map()`.  

```javascript
const timesFive = (number) => (number *= 5);

numbers = [1, 2, 3, 4, 5];

const arrayTimesFive = numbers.map(timesFive);
console.log(arrayTimesFive);
```  

Na primeira linha, escrevi uma função que recebe um número como parâmetro, e este número será multiplicado por 5. Após, criei um *array* com cinco números. Depois, criei uma constante para utilizar o método `map()` no *array* que criei anteriormente, passando a função como parâmetro a função que criei. A saída será um novo *array* em que todos os elementos do *array* original foram multiplicados por 5.  

#### **'Bora praticar!**

 - Prática 13 - Escreva uma função que some todos os elementos de um *array* de números. [Solução](/pt-br/js/praticando/p13.js)

 - Prática 14 - Escreva uma função que calcule a média de um *array* de notas de alunos (notas de 0 a 10). [Solução](/pt-br/js/praticando/p14.js)

 - Prática 15 - Escreva uma função que receba um *array* de strings e retorne um novo *array* com as strings em ordem alfabética. [Solução](/pt-br/js/praticando/p15.js)

 - Prática 16 - Escreva uma função que receba um *array* de números e retorne um novo *array* com cada elemento multiplicado por 2. [Solução](/pt-br/js/praticando/p16.js)

 - Prática 17 - Escreva uma função que dado um *array* de strings, retorne um objeto com a contagem de ocorrências de cada string. Por exemplo, dado o *array* ["a", "b", "a", "c", "b"], a função deve retornar o objeto { a: 2, b: 2, c: 1 }. [Solução](/pt-br/js/praticando/p17.js)

 - Prática 18 - Crie um *array* com números de 25 a 30. Crie um novo *array* usando o método `map()` e eleve cada número ao quadrado. No final, mostre os dois *arrays*. [Solução](/pt-br/js/praticando/p18.js)

 - Prática 19 - Crie um *array* chamado *booleans* e que receba `[true, true, false, true, false, false]`. Utilize o método `map()` para percorrer o *array* e uma função que retorne um número qualquer quando a posição for `true` e zero quando for `false`. No final, mostre os dois *arrays*. [Solução](/pt-br/js/praticando/p19.js)

 - Prática 20 - Crie um *array* chamado *"prices"* e que receba os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um novo *array* chamado *"taxedPrices"* e, se o preço for maior do que 10, adicione 20% de taxa. Caso contrário, não adicione taxa alguma. No final, mostre os dois *arrays*. [Solução](/pt-br/js/praticando/p20.js)

 - Prática 21 - Crie um *array* chamado *"items"* que receba `["light", "banana", "phone", "book", "mouse"]`. Crie um novo *array* chamado *"plurals"* e crie uma função que, em conjunto com o método `map`, percorra todo o *array "items"* e adicione um "s" no final de cada palavra. Imprima os dois *arrays*. [Solução](/pt-br/js/praticando/p21.js)

 - Prática 22 - Crie um *array* chamado *"row"* com os valores `[10, 20, 30, 40, 50]`. Crie um novo *array* chamado *matrix* a partir do uso do `map` no *array "row"*, retornando cada item em um *array*, resultando em um *array* com duas dimensões. Imprima na tela os dois *arrays*. A resposta deve ser `[[10], [20], [30], [40], [50]]`. [Solução](/pt-br/js/praticando/p22.js)  

### 10.2. *`filter()`*  
Temos alguns métodos para pesquisar *arrays* em JavaScript.

|Método|Como funciona|
|:----:|:-----------:|
|`indexOf()`|Devemos fornecer um parâmetro (uma palavra, um número, qualquer coisa) para ser pesquisado no *array*. Começa da esquerda para a direita e retorna a posição do índice do parâmetro fornecido. Caso contrário, retorna `-1`|
|`lastIndexOf()`|A mesma coisa que `indexOf()`, mas começa a executar o *array* a partir do último elemento (lado direito)|
|`includes()`|Pesquisa por um elemento específico dentro do *array* e retorna `true` se ele foi encontrado|
|`find()`|Também pesquisa por um elemento ou condição específica dentro do *array*. Se verdadeiro, retorna o elemento. Se falso, retorna `undefined`|
|`findIndex()`|A mesma coisa que `find()`, mas retorna o índice do elemento se ele foi encontrado. Caso contrário, retorna `-1`|
|`findLastIndex()`|Mesmo que `findIndex()`, mas começa a pesquisar da direita para a esquerda|  

Entretanto, temos um método especial para pesquisar coisas dentro de um *array*: o método `filter()`. O método `filter()` é semelhante aos métodos `find()`, `findIndex()` e `findLastIndex()`, pois aceita uma função para pesquisar elementos dentro de um *array*. No entanto, o método `filter()` difere no sentido de que ele retorna um novo *array* contendo todos os elementos que correspondem aos critérios de pesquisa, enquanto os outros métodos retornam um único elemento ou o índice do elemento.  

```javascript
const arrayWithNumbers = [1, 2, 3, 4, 5, 6];

const filteringEvenNumbers = arrayWithNumbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
})

console.log(arrayWithNumbers); // [ 1, 2, 3, 4, 5, 6 ]

console.log(filteringEvenNumbers); // [ 2, 4, 6]
```  

Neste exemplo, o método `filter()` é usado para procurar números pares no *array* `arrayWithNumbers`. O método `filter()` retorna um novo *array* contendo todos os números pares encontrados no *array* original, enquanto os outros métodos retornariam um único elemento ou o índice do elemento.  

#### **'Bora praticar!**

 - Prática 23 - Crie um *array* chamado "*practice*" com números (10-20). Usando o filter, crie um novo *array* que mantém os números pares em practice. Depois, imprima ambos os *arrays*. [Solução](/pt-br/js/praticando/p23.js)

 - Prática 24 - Crie um *array* chamado "*countries*" com as seguintes entradas: ["France", "South Africa", "Brazil", "United States", "Sweden"]. Filtrar sobre o *array* e manter somente os países que têm um espaço em branco em seu nome. Imprima ambos os *arrays*. [Solução](/pt-br/js/praticando/p24.js)

 - Prática 25 - Crie um *array* chamado "*prices*" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Crie um *array* chamado "*lowPrices*" e use o *filter* para manter todos os preços em que o preço mais um imposto de 15% é menor que 10.00. Imprima ambos os *arrays*. [Solução](/pt-br/js/praticando/p25.js)

 - Prática 26 - Crie um *array* chamado "*values*": [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]. Crie um novo *array* chamado "*hasTwos*" que filtre sobre os valores e mantenha somente os *sub-arrays* que têm um 2 neles. Depois, imprima ambos os *arrays*. [Solução](/pt-br/js/praticando/p26.js)

 - Prática 27 - Crie um *array* chamado "*nums*" com os seguintes valores: [10, 20, 30, 40, 50]. Crie um *array* chamado "*timesTwo*" e, usando o `map()`, multiplique cada número por dois. Depois, crie um *array* chamado "*over50*" que filtre "*timesTwo*" para manter somente os valores acima de 50. Portanto, imprima os três *arrays*. [Solução](/pt-br/js/praticando/p27.js)  

### 10.3. *reduce()*  
O método `reduce()` é um pouco mais complicado do que os dois métodos anteriores (`map()` e `filter()`), embora também seja usado para processar um *array*. Primeiro de tudo, este método aceita uma função como parâmetro. No entanto, esta função precisa ter dois parâmetros: um acumulador e uma variável para representar cada elemento do *array*. Outra coisa importante sobre o *reduce* é que ele precisa de mais um parâmetro: um inicializador para o acumulador. Vejamos como a sintaxe funciona:  

```javascript
array.reduce((acumulador, elementoDoArray) => {
    //código aqui
}, inicializador);
```  

O inicializador será o primeiro valor assumido pelo acumulador, e ele será incrementado pelo próximo elemento do *array*.  

```javascript
const numbersArray = [5, 10, 15, 20, 25, 30];

const sumOfNumbersArray = numbersArray.reduce((previousNumber, currentNumber) => {
    return previousNumber + currentNumber;
}, 0);

console.log(numbersArray); // [5, 10, 15, 20, 25, 30]
console.log(sumOfNumbersArray); // 105
```  

No código acima, criei um *array* com números e uma variável para armazenar a soma dos números do *array* anterior. Então, usei o método `.reduce()` e passei uma função anônima com dois parâmetros: `previousNumber` para acumular os números do *array* (começando em zero, valor que eu defini como segundo parâmetro para `.reduce()`), e `currentNumber`, que irá iterar sobre cada elemento do *array*.

Portanto, na primeira iteração, `previousNumber = 0` e `currentNumber = 5`; na segunda iteração, `previousNumber = 5` (0 + 5) e `currentNumber = 10`; na terceira iteração, `previousNumber = 15` (5 + 10) e `currentNumber = 15`; na quarta iteração, `previousNumber = 30` (15 + 15) e `currentNumber = 20`; na quinta, `previousNumber = 50` e `currentNumber = 25`; na sexta, `previousNumber = 75` e `currentNumber = 30`; finalmente, na última iteração, `previousNumber = 105` e não há `currentNumber`. Portanto, a soma dos números do *array* será igual ao parâmetro `previousNumber` após a última iteração.  

> Observe que o `reduce()` também pode ser aplicado a *arrays* de strings (o raciocínio é o mesmo) e este método **sempre** precisará retornar algo. Caso contrário, ele retorna `undefined`, o que pode causar erros na execução.  

![](/src/jsReduce.jpg)  

Portanto, podemos afirmar que o método `reduce()` retorna para nós uma forma reduzida do *array* sem alterar quaisquer elementos do *array* original.  

#### **'Bora praticar!**  

 - Prática 28 - Crie um *array* chamado "*points*" com os números de 55 a 60 (inclusos). Em seguida, crie uma variável chamada "*sum*" usando `reduce()` para somar os pontos em "points". Por último, imprima "points" e "sum". [Solução](/pt-br/js/praticando/p28.js)

 - Prática 29 - Crie um *array* chamado "*companies*" com as seguintes *strings*: ["apple", "tesla", "spacex", "amazon", "google"]. Crie uma constante chamada "*modded*" que reduza o *array* "*companies*" para uma string das empresas que não começam com a letra "a", separadas por traços. Imprima ambos. [Solução](/pt-br/js/praticando/p29.js)

 - Prática 30 - Crie um *array* chamado "*prices*" com os seguintes valores: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Em seguida, crie uma constante chamada "*afterTax*" que faça uma soma levando em consideração que, se o preço for maior que 6, adicione o preço sem imposto; caso contrário, adicione o preço mais um imposto de 20%. Finalmente, imprima ambos. [Solução](/pt-br/js/praticando/p30.js)

 - Prática 31 - Crie um *array* chamado "*items*" com ["luz", "banana", "telefone", "livro", "mouse"]. Em seguida, crie um novo array chamado "*caps*", utilize `map()` sobre "*items*" e escreva em maiúsculo a primeira letra de cada string. Depois, crie uma constante chamada "*concat*" para reduzir todas as strings de *caps* concatenando-as. Use um espaço para separar cada item. Finalmente, imprima "*items*", "*caps*" e "*concat*". (BÔNUS: tente fazer tudo em uma linha de código) [Solução](/pt-br/js/praticando/p31.js)

 - Prática 32 - Crie um *array* chamado "*nums*" com [10, 30, 50, 70, 90]. Em seguida, crie um novo *array* chamado "*squares*" e use `map()` sobre "*nums*" para retornar cada número ao quadrado. Depois, crie um *array* chamado "*over1000*" e filtre os valores acima de 1000. Finalmente, crie uma constante chamada "*finale*" para reduzir o último *array* a uma soma de seus elementos. Imprima cada *array* e constante. (BÔNUS: tente fazer tudo em uma linha de código) [Solução](/pt-br/js/praticando/p32.js)




