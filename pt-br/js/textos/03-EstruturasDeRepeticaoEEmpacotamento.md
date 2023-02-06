# 3. Estruturas de repetição e empacotamento

## 3.1. Estruturas de repetição

As estruturas de repetição são estruturas que permitem a execução do mesmo bloco de código mais de uma vez.

### 3.1.1. _Loop for_

O _loop for_ é usado em _loops_ contáveis. Esta estrutura é comumente chamada de "estrutura de repetição com variável de controle". Abaixo, segue a sintaxe para escrever um _loop for_.

```javascript
for (let index = 0; index < array.length; index++) {
  bloco de código;
}
```

Vamos examinar o código acima:

-   **"`let index = 0`"** está criando uma variável chamada `"index"` e começa com o valor (índice) zero (quase todas as linguagens de programação começam o índice por zero).
-   **"`index < array.length`"** é uma estrutura booliana que verifica se a condição é verdadeira ou false (`true` ou `false`).
-   **"`index++`"** está incrementando a variável `"index"` em uma unidade. Ela pode ser incrementada mais do que uma unidade também.

### 3.1.2. _Loop while_

O **_while loop_** é usado quando temos incontáveis loops. É comumente chamado de **"estrutura de repetição com um teste lógico"**, uma vez que precisamos iniciar uma variável fora do loop e incrementá-la (ou diminui-la) para funcionar. Vamos ver a sintaxe abaixo:

```javascript
variável inicializada
while (teste lógico com a variável que foi inicializada) {
  código aqui
}
```

Uma variável é logicamente testada e um pedaço de código será executado enquanto essa lógica for "verdadeira" (ou "falsa" em alguns casos). Vamos ver um exemplo:

```javascript
let points = 100;

while (points > 100 === false) {
    console.log(points + " is lower than 100.");

    points--;

    if (points < 0) {
        break;
    }
}
```

No código acima, iniciei uma variável chamada "_points_" e o laço de repetição será executado enquanto esta variável **não for** maior que 100. Um "_if statement_" foi adicionado para parar o loop quando a variável chegar a zero. A utilização da palavra reservada _`break`_ é restrita a loops "while" e "for".

## 3.2. Empacotamento

Quando estamos criando um aplicativo, criamos algumas características neste. Portanto, é quase sempre uma boa prática criar **módulos** separados do script principal. Isso melhora a organização e a capacidade de manutenção de nosso código.  
Para usar aqueles módulos que foram escritos fora do script principal, precisamos **importá-los** no script principal. Mas, para importá-los no script principal, precisamos exportar aquele módulo para ser importado para onde quisermos. Vamos ver um exemplo abaixo:

```javascript
let numberArray = [];
function creatingRandomNumbers(n1, n2) {
    for (i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * (n2 - n1 + 1)) + n1; //floor will round the random number, since "random" only generates numbers between 0 and 1 (1 excluded). The n2+1 is to include the n2 in the range of random numbers; +n1 ensures that the range will be between n1 and n2, and not between 0 and 10; n2-n1+1 is to ensure how many integers will be between n1 and n2. For example, if n1=10 and n2=20, 20-10+1=11, i.e., we have 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 and 20.
        numberArray[i] = number;
    }
    return numberArray;
}

function returningEvenNumbers() {
    let numberList = creatingRandomNumbers(1, 1000);
    console.log(`The list of numbers is ${numberList}`);

    let sumOfEvens = 0;
    for (i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) {
            sumOfEvens++;
            console.log(`${numberList[i]} is even.`);
        } else {
            console.log(`${numberList[i]} is odd.`);
        }
    }
    console.log(`The list of numbers has ${sumOfEvens} even numbers.`);
}
```

Acima, criei um roteiro com duas funções (ou módulos): uma para gerar uma lista com 10 números aleatórios entre um intervalo definido por mim, e uma para verificar e retornar se um número é ímpar ou par. Vamos imaginar que estas funções foram criadas em um script chamado "checkingNumbers.js", mas eu quero usar pelo menos um destes módulos em outro programa/script. Para isso, precisamos adicionar uma linha de código no script "checkingNumbers.js" para exportar os módulos.

```javascript
module.exports = { creatingRandomNumbers, returningEvenNumbers };

/* Escrevemos como acima nos dias de hoje, mas no passado:
module.exports = {
  creatingRandomNumbers : creatingRandomNumbers,
  returningEvenNumbers : returningEvenNumbers
}; */
```

Agora, se você quiser utilizar o módulo "creatingRandomNumbers" em outro script/programa, você utiliza a palavra reservada **"`require`"** no arquivo no qual você quer usar o módulo.

```javascript
const randomList = require("./checkingNumbers");

console.log(randomList.creatingRandomNumbers(1, 100));
```

Eu criei uma variável para importar os módulos do script "checkingNumbers.js". Utilizei a palavra reservada **"`require`"** e dei uma string com a localização do script como argumento. Depois, utilizei o módulo "creatingRandomNumbers" para criar e imprimir na tela uma lista com 10 números.

## 3.3. **'Bora praticar!**

-   Prática 10: Crie um programa que calcule a tabuada de um número.
-   Prática 11: Crie um programa que percorra uma lista de números para retornar apenas os números pares desta lista.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
