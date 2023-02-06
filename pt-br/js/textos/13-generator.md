# 13. Função Geradora

## 13.1. Definição

Uma **função geradora** é uma função que pode retornar diversos valores ao longo do tempo, podendo ser pausada ou retomada quantas vezes quisermos. Um **Objeto iterador** é retornado cada vez que a função é chamada, e este iterador controla a execução do gerador através da chave/valor `done`, que pode ser `true` ou `false`.

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

O código acima parece ser mais assíncrono do que o anterior, mas não é. Eu criei um Objeto gerador (`evens`) que retorna um Objeto com duas entradas (`{value: value, done: true ou false}`). O método `next()` é chamado no iterador (`evens`) para retomar a função geradora. Então a função geradora para até que tenhamos um método `next()` para retomar a função novamente. Ela se repete até que tenhamos uma declaração `return` na função ou até que ela chegue ao final da função. No exemplo acima, não temos uma declaração de `return`, então a função geradora termina quando `n` é zero.
Em seguida, vamos praticar um pouco com funções geradoras "regulares". Após, vamos dar uma olhada no que pode ser feito para transformar um gerador "regular" em um gerador **assíncrono**.

## 13.4. **'Bora praticar!**

-   Prática 81:

    1. Crie uma função geradora chamada "countTo10" que produzirá os números 0-10 (inclusive) e depois pare.
    2. Crie o objeto gerador chamando a função geradora e itere através do gerador usando um for...of loop.

-   Prática 82:

    1. Criar uma função geradora chamada "randomNumber" que irá gerar um novo número aleatório infinitamente
    2. Use um loop para gerar 10 números aleatórios usando o Objeto gerador que você obtém ao chamar "randomNumber".

-   Prática 83:

    1. Criar uma função geradora chamada "randomAmountFromRange" que tem 3 parâmetros: amount, min e max
    2. Esta função gerará a quantidade de números aleatórios fornecidos como argumento, entre o min e o max (inclusive), por exemplo: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Crie um for...of loop que irá percorrer através dos seguintes objetos geradores para testá-lo: - randomAmountFromRange(3, 10, 20) - randomMountFromRange(5, 100, 200) - randomMountFromRange(10, 1000, 2000)

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

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 13.5. Geradores assíncronos

Vimos que os geradores "regulares" podem ser úteis em diversas situações. Mas aí vem a pergunta: e se quisermos utilizar uma `Promise` dentro de uma função geradora? Isso é possível? Se sim, há como transformarmos esta função geradora em uma função assíncrona? A resposta é **sim**.

### 13.5.1. Como utilizar

```javascript
const newFunction = function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
};

const generatorObject = newFunction();
generatorObject.next().value.then((value) => console.log(value));
```

O código acima cria uma função geradora "regular" que produz uma `Promise` que retorna o número "1" após 1 segundo para sua resolução. Como é uma função geradora, é preciso executá-la e guardá-la em uma variável para armazenar o(s) Objeto(s) gerador(es). Como sabemos, um Objeto gerador é composta de dois pares chave/valor: `value` e `done`. O primeiro retorna o resultado da função, e o último retorna um booliano para indicar se o Objeto foi exaurido ou não.
Como estamos lidando com uma `Promise` na função, isso quer dizer que veremos um status `Pending` na entrada `value` do Objeto, pois ele retorna uma **Promessa**. Portanto, precisamos utilizar o método `then()` para declarar o que queremos fazer com o resultado da `Promise` quando ela mudar para o status `Fulfilled` - o que, neste caso, ocorre após um segundo. No caso da função de exemplo, o resultado da `Promise` da função será impresso na tela.
Assim como nas funções geradoras "regulares", pode-se utilizar loops para percorrer o Objeto gerador.

```javascript
const newFunction = function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

for (const promises of generatorObject) {
    promises.then((value) => console.log(value));
}
```

Uma pequena mudança foi feita na função geradora: uma nova `Promise` foi adicionada nela para ser resolvida após 2 segundos, retornando o número 2. Para que os valores sejam impressos na tela, necessita-se de um `for...of` loop para percorrer o Objeto gerador/iterador e, a partir do método `then()`, cria-se uma função anônima para imprimir os valores na tela.

### 13.5.2. Funções geradoras assíncronas

Funções geradoras assíncronas podem ser declaradas do mesmo que as funções assíncronas tradicionais. Para isso, utilizamos as palavras reservadas `async` e `await`.

```javascript
const newFunction = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

for await (const promiseResult of generatorObject) {
    console.log(promiseResult);
}
```

Como já observamos no estudo de funções assíncronas, trabalhar com estas funções é muito mais simples do que trabalhar com a sintaxe de `Promises`. No exemplo acima, foi possível utilizar o `await` diretamente no `for...of` para imprimir as entradas `value` dos dois Objetos geradores. É como se o loop parasse, esperasse a resolução das `Promises` e, a partir daí, imprimisse os valores. Só quem nem todas as versões aceitam esta sintaxe, pois não reconhecem que o `await` está sendo utilizado no resultado de uma função assíncrona. Portanto, a sintaxe mais comum é a criação de uma função assíncrona "regular" para utilizar o `await`, conforme abaixo.

```javascript
const newFunction = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

const asyncFunction = async function () {
    for await (const promiseResult of generatorObject) {
        console.log(promiseResult);
    }
};

asyncFunction();
```

Aqui, o `await` espera a resolução das duas `Promises` da função geradora assíncrona para que os resultados gerados possam ser impressos.

### 13.5.3. Funções geradoras assíncronas infinitas

Como no caso das funções geradoras "regulares", podemos criar funções geradoras assíncronas infinitas.

```javascript
const newFunction = async function* () {
    let counter = 0;

    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(counter);
            }, 1000);
        });

        counter++;
    }
};

const generatorObject = newFunction();

const asyncFunction = async function () {
    for await (const promiseResult of generatorObject) {
        console.log(promiseResult);
    }
};

asyncFunction();
```

A função `newFunction` é uma função infinita, visto que o laço de repetição utilizado não tem uma declaração clara de parada.

> Vale lembrar que, assim como funções geradoras "regulares", as funções geradoras assíncronas também se encerram se a palavra reservada `return` for declarada dentro da função.

### 13.5.4. Controle de fluxo de execução

Sabe-se que a palavra reservada `yield` controla o fluxo de execução de uma função geradora. É como se ela pausasse e retomasse a execução da função.
Uma coisa interessante sobre o controle de fluxo de execução de uma função geradora - assíncrona ou regular - é o uso da expressão `yield*`. O asterisco após a palavra reservada indica que aquele trecho está delegando o fluxo de execução para outro gerador, isto é, para outro `yield`.

```javascript
function* firstGenerator() {
    yield 1;
    yield 2;
}

function* secondGenerator() {
    yield* firstGenerator();
    yield 3;
}

const secondGeneratorObject = secondGenerator();

for (const value of secondGeneratorObject) {
    console.log(value);
}
```

No exemplo acima, parte da função geradora `secondGenerator()` transfere o fluxo de execução para o gerador da função `firstGenerator()`. Isso faz com que apenas o segundo Objeto iterador/gerador seja necessário, pois ele irá "armazenar" todos as chaves/valores das duas funções.

### 13.5.5. **'Bora praticar!**

-   Prática 85:

    1. Criar uma função geradora assíncrona que produza uma promessa que se resolve após 1 segundo com um número entre 0-9 (inteiro e inclusivo)
    2. Crie o objeto gerador chamando a função
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa)

-   Prática 86:

    1. Criar uma função geradora assíncrona que tenha 50% de chance de produzir uma das seguintes promessas:
        - Resolver após 500 ms com o valor "Fast!"
        - Resolver depois de 3000ms com o valor "Slow!".
    2. Crie o objeto gerador chamando a função
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa)

-   Prática 87:

    1. Criar uma função geradora assíncrona que tenha um único parâmetro chamado "sentence". A função fará um loop através de "sentence" letra por letra, e para cada letra ela produzirá uma Promessa que resolve após 100ms que:
        - Se a letra for uma vogal (a, e, i, o, u) então resolva com um "\*".
        - Caso contrário, resolva com a letra, mas em maiúscula
    2. Crie o objeto gerador chamando a função com um valor de "Monkeys are the coolest animal!"
    3. Use um for-await-of- loop para percorrer o gerador. Há MUITAS maneiras de verificar se uma string tem alguma das letras

-   Prática 88:

    1. Criar uma função geradora assíncrona que tenha um único parâmetro chamado "time". Esta função produzirá uma Promessa que se resolve com o tempo passado como parâmetro (em ms). O tempo para cada promessa subsequente levará o dobro de tempo necessário.
    2. Crie o objeto gerador chamando a função com o valor 100 para iniciar.
    3. Use um for-await-of loop para percorrer o gerador infinitamente (ctrl-c para forçar a saída do programa).
    4. Exemplo de saída se começamos com:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
        - Se imprimirmos o "time" de cada laço, receberíamos:
        - 100, 200, 400, 800, 1600, 1600, 3200 ... etc.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
