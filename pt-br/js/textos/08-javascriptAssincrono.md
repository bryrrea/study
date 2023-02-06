# 8. JavaScript assíncrono

## 8.1. Definição

JavaScript é uma linguagem de programação utilizada principalmente para desenvolvimento web, isto é, ela roda em web browsers e sua proposta é ser **orientada à eventos**. Isto significa que o usuário necessita realizar uma ação (clique ou toque) para os programas JavaScript fazerem alguma coisa. Por outro lado, boa parte dos programas do mundo real são **assíncronos**, isto é, eles param suas funcionalidades enquanto esperam dados ou a ocorrência de algum evento. Esta parada nas funcionalidades pode ser, por muitas vezes, indesejada.  
Tendo isto em mente, o JavaScript conta com técnicas de execução assíncrona, isto é, as funcionalidades dos programas não precisam necessariamente parar de funcionar até que os dados ou eventos sejam recebidos ou propagados.

## 8.2. _Callback_

Eis aqui um conceito que foi usado extensamente até aqui, mas só agora teremos uma definição formal. _Callback_ é uma função que é "chamada" dentro de outra função mediante condição ou ocorrência de **evento assíncrono**.  
Um exemplo de utilização de funções de _callback_ são as funções temporais, como `setTimeout()` e `setInterval()`.

```javascript
setTimeout(checkForUpdates, 30000);
```

A `setTimeout()` recebe dois parâmetros: **uma função de callback** e uma quantidade de tempo (em ms). Imaginemos que estamos escrevendo um programa que verifica por atualizações a cada 30 segundos. É isso que o código acima está fazendo, utilizando uma função de _callback_ hipotética (`checkForUpdates()`) que é chamada assincronamente a cada 30 segundos para verificar se há atualizações. Contudo, a `setTimeout()` executa a função de _callback_ apenas uma vez e, depois, esquece-a.  
Também é possível utilizar a função `setInterval()`:

```javascript
let updateIntervalId = setInterval(checkForUpdates, 30000);

function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}
```

Assim como `setTimeout()`, `setInterval()` recebe dois parâmetros: uma **função de _callback_** e um valor de tempo (em ms). No código acima, a função assíncrona hipotética (`checkForUpdates()`) é chamada em 30 s e, depois, é chamada novamente a cada 30 s. Para parar essas chamadas sucessivas, uma função (`stopCheckingForUpdates()`) invoca o método `clearInterval()` (complementar do `setInterval()`). Este método só funciona com **funções programadas**, e não com funções em execução.

---

Como foi dito na definição, programas escritos em JavaScript são geralmente criados para rodarem nos web browsers, e seu funcionamento sempre depende de uma ação do lado do cliente - com um clique ou toque na tela, por exemplo. Portanto, funções de _callback_ são muito importantes em programas baseados em eventos. No caso da web, as funções de _callback_ trabalham com eventos específicos pré-orientados pelo programador. Essas funções são chamadas de **ouvintes ou manipuladoras de evento**, e geralmente são chamadas pelo método `addEventListener()`.

```javascript
let okay = document.querySelector("#confirmUpdateDialog button.okay");

okay.addEventListener("click", applyUpdate);
```

No código acima, é pedido ao navegador que retorne um objeto que represente o elemento HTML `<button>` que contém uma id específica ("#confirmUpdateDialog button.okay"). Após, o módulo `addEventListener()` é chamado para executar uma função de _callback_ (hipotética) após o evento "click". Como é possível observar, o módulo `addEventListener()` aceita dois parâmetros: o tipo de evento e a função de _callback_.

Estes são apenas alguns exemplos dos usos de funções de _callback_, mas estas funções não se atêm apenas ao tempo ou para receber informação depois de uma ação do usuário. Há outras tantas aplicações, como no consumo de API's, por exemplo.

## 8.3. _Promise_

### 8.3.1. Definição

_Promises_ são objetos nativos do JavaScript que representam a conclusão ou não de uma operação assíncrona. Uma _Promise_ pode assumir três estados: _pending_ (quando ainda não foi resolvida), _fulfilled_ (quando foi positivamente concluída) ou _reject_ (quando foi concluída negativamente).

### 8.3.2. Sintaxe

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, my friend!");

        reject("Not this time!");
    }, 1000);
});
```

Uma _Promise_ **sempre** recebe uma função com dois parâmetros: duas funções de **callback**, sendo uma para caso a _Promise_ assuma o estado _fulfilled_ e outra para caso a _Promise_ assuma o estado _reject_. No código acima, uma nova _Promise_ foi criada a partir do construtor `Promise()`. A _Promise_ foi criada para mostrar na tela uma mensagem que difere de acordo com o status da _Promise_, sendo resolvida após 1 segundo.

### 8.3.3. O que fazer com uma _Promise_?

Se tentarmos mostrar na tela o que está contido no objeto `myPromise` do código anterior, teremos como retorno um "_pending_", pois nada está usando a resolução da _Promise_ contida na função.
O retorno da _Promise_ pode ser utilizado. Para isso, utiliza-se os métodos `.then` e `.catch`. O método `.then` recebe duas funções como parâmetro: uma chamada de **_handler_ de sucesso** (que lida com o sucesso de uma _Promise_ resolvida), e outra chamada de **_handler_ de falha** (que lida com a falha de uma _Promise_ resolvida). Este método também retornará uma _Promise_ e, por isso, vários métodos `then` podem ser encadeados.
O método `catch` é utilizado para representar a conclusão negativa de uma _Promise_. Ele recebe como método apenas uma função, chamada de **_handler_ de falha**. Ela apresenta a razão da falha.
Outro método que também pode ser utilizado é o `finally`. Este método é chamado independentemente do resultado da _Promise_. Ele recebe apenas uma função como parâmetro, chamada de **_handler finally_**.
Estes três métodos podem ser utilizados de forma encadeada em uma única _Promise_. Isso é muito útil, pois, assim, o programador consegue lidar com todas as possibilidades de resposta de uma _Promise_.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, my friend!");
    }, 2000);
});

myPromise
    .then((message) => message.toUpperCase())
    .then((message) => console.log(message))
    .catch((error) => console.log(error))
    .finally(() => console.log("Finally!"));
```

O código acima utiliza o construtor `Promise()` para criar uma _Promise_ que, após 2 segundos, retorna a resolução positiva da _Promise_. Após, uma função é chamada no método `then` para transformar todos os caracteres da mensagem em maiúsculo. Uma nova função é chamada dentro de outro método `then` para imprimir na tela a mensagem. Ainda, o módulo `catch` foi utilizado para mostrar a mensagem de erro - caso houvesse. Finalmente, um módulo `finally` foi criado para mostrar uma mensagem, independentemente da resolução da _Promise_ ser positiva ou negativa. Portanto, ao rodar o código do exemplo acima, a saída será `HELLO, MY FRIEND` e, na linha seguinte, `Finally!`.

---

### 8.3.4. **'Bora praticar!**

-   Prática 52: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, finalmente, imprima "Program completed" quando a Promise for concluída após 3 segundos.

-   Prática 53: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que seja resolvida após 3 segundos e rejeitada após 2 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, por fim, imprima "Program completed" se a Promise for cumprida ou "Program failure" se a Promise for rejeitada.

-   Prática 54: Imprima "Programa Iniciado" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela está pendente. Depois, imprima "Programa em progresso...". Depois, imprima "Etapa 1 concluída!" quando a primeira Promise for cumprida. Faça a primeira Promise retornar uma nova Promise que será cumprida após 3 segundos com a mensagem "Etapa 2 concluída!". Finalmente, imprima a mensagem da segunda Promise depois que ela for cumprida.

-   Prática 55:

    1. Imprima "Programa iniciado" no início do seu código
    2. Crie uma Promise que se resolve após 5 segundos com o valor {data: "Olá, amigo", error: null}
    3. Imprima a Promise enquanto ela estiver pendente
    4. Imprima "Programa em progresso..."
    5. Crie uma primeira cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a primeira Promise for cumprida
    6. Faça a primeira Promise retornar outra Promise que será cumprida após 2 segundos com a mensagem "Primeira cadeia de Promises concluída!"
    7. Imprima a mensagem da Promise acima depois que ela for cumprida
    8. Crie uma segunda cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a segunda Promise for cumprida
    9. Faça essa segunda Promise retornar outra Promise que será cumprida após 10 segundos com a mensagem "Segunda cadeia de Promises concluída!"
    10. Imprima a mensagem da Promise acima depois que ela for cumprida

-   Prática 56: Crie uma Promise que se resolva com o número 10 após 3 segundos. Em seguida, crie outra Promise que se resolva com o número 20 após 5 segundos. Como podemos calcular a soma desses dois valores resolvidos após ambas as Promises serem cumpridas com sucesso?

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 8.4. `async`/`await`

### 8.4.1. Definição e antecedente

Estas duas palavras-chave foram adicionadas com o ES2017 para simplificar o trabalho com as _Promises_. Um dos maiores problemas de se utilizar o construtor original `Promise()` e _callbacks_ é a quantidade de `.then()` e/ou funções _callback_ aninhados, pois isto torna muito mais difícil a leitura e manutenção do código.
O uso de `async`/`await` simplifica consideravelmente a leitura e manutenção do código, pois o código assíncrono acaba escrito de maneira mais clara e síncrona - parecendo escrita de código síncrono, e não parecendo um programa com código síncrono. Contudo, há uma regra básica para a implementação de `async`/`await`:

> **A utilização de um `await` deve sempre estar ligado à uma função assíncrona, isto é, funções que usam explicitamente a palavra reservada `async`.**

Isso implica em erro se o `await` for utilizado em conjunto com funções ou outras partes do programa que não são executados a partir de uma função assíncrona. A função pode ser escrita de qualquer forma - _arrow function_, palavra reservada `function`, etc. -, mas **sempre** deve conter a palavra `async` em sua declaração.
O retorno de uma função assíncrona será uma **_Promise_**, independentemente do construtor `Promise()` estar ou não sendo explicitamente utilizado no corpo da função. Portanto, pode-se afirmar que isso facilita que o código seja **baseado em _Promise_** (ou _Promise-based_).

### 8.4.2. Sintaxe

```javascript
const anyFunction = async () => {
    const anyVariable = await code here;

    return anyVariable;
}

async function anyFunction() {
    const anyVariable = await code here;

    return anyVariable;
}
```

### 8.4.3. Tratamento de exceção

Operações assíncronas podem causar diversos tipos de erros na execução do código. Para evitar ou tentar compreender estes erros, é importante haver algo que ajude a controlar a execução em pontos importantes do programa. Em _Promises_ temos o parâmetro `reject` no construtor `Promise`, e temos o método `catch()` aninhado ao método `then()` para localizar e mostrar o erro - caso exista um erro.
Com `async`/`await` é ainda mais simples, pois basta colocarmos o bloco de código dentro de uma declaração `try...catch`, como normalmente se faz em todo programa JS para determinar pontos de controle críticos dentro do programa para localizar possíveis erros de execução.

```javascript
const anyFunction = async () => {
    try {
        const anyVariable = await code here;

        return anyVariable;
        } catch(error) {
            console.error(error);
        }
}
```

No exemplo acima, criei uma função assíncrona que **tentará** executar uma tarefa qualquer armazenada na variável `anyVariable`. Essa tarefa qualquer será assíncrona, pois ela é antecedida pela palavra reservada `await`. Se houver algum erro na execução da tarefa, o mesmo será mostrado para o programador ou para o usuário.

### 8.4.4. Exemplo prático

Vamos a um exemplo prático de utilização de `async`/`await`. Vou criar uma função que faça a requisição dos dados de 3 Pokémons consumindo a PokeAPI.

```javascript
import fetch from "node-fetch";

function getPokemonURL(pokemonNumber) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
}

const getPokemonData = async () => {
    const pokemonData1 = fetch(getPokemonURL(1));
    const pokemonData2 = fetch(getPokemonURL(2));
    const pokemonData24 = fetch(getPokemonURL(24));

    const pokemonsDataArray = await Promise.all([
        pokemonData1,
        pokemonData2,
        pokemonData24,
    ]);

    for (let pokemonsData of pokemonsDataArray) {
        console.log(pokemonsData);
    }
};

getPokemonData();
```

Foi criada uma função para automatizar a URL do Pokémon do qual queremos obter os dados. O usuário deve informar o número do Pokémon que ele quer puxar os dados. Em seguida, foi criada uma função assíncrona que puxa os dados de 3 Pokémons. Utilizei o módulo `node-fetch` para fazer as requisições. Não explicarei agora como funciona, mas em algum momento isso será explicado. Neste momento, basta ter em mente que uma _Promise_ é retornada das três chamadas de `fetch`. Assim, utilizei o `Promise.all()` com um `await` para garantir que todas as _Promises_ seriam resolvidas **antes** de imprimir na tela os dados de cada Pokémon separadamente através de um laço `for...of`.

> **Vale lembrar que o `await` se comporta como se ele "pausasse" a função até que sua linha seja resolvida!**

### 8.4.5. **'Bora praticar!**

-   Prática 61:

    1. Crie uma função chamada "fetchPokemon" que retorna uma _Promise_ que se resolve com o valor `{dados: {name: "Pikachu", power: 20} } após 2 segundos
    2. Imprimir "Program starting...".
    3. Crie uma função assíncrona que aguarda que os dados retornem do "fetchPokemon" e depois imprima os dados.
    4. Chame a função de assíncrona criada
    5. Imprima "Program complete!"
    6. Mude "fetchPokemon" para rejeitar após 2 segundos com um novo Objeto de Erro com a mensagem "Danger, danger!"
    7. Como você pode modificar sua função assíncrona para capturar este erro?

    [Solução](/pt-br/js/praticando/p61.js)

-   Prática 62:

    1. Crie uma função chamada "fetchUser" que retorna uma _Promise_ que se resolve com o valor `{dados: {usuário: "Monkey", admin: true} } após 3 segundos
    2. Crie uma função chamada "login" que toma um Objeto como argumento. Se o Objeto tem uma propriedade chamada "admin" com um valor de "true", então imprima "Login com sucesso!", caso contrário imprima "Falha no login, por favor tente novamente".
    3. Imprimir "Program starting..."
    4. Crie uma função assíncrona que espere que os dados retornem do "fetchUser".
    5. Passe o usuário que volta do "fetchUser" para a função "login" que você criou
    6. Chame a função assíncrona que você criou
    7. Imprima "Program complete!"

    [Solução](/pt-br/js/praticando/p62.js)

-   Prática 63:

    1. Crie uma função chamada "fetchFast" que retorna uma _Promise_ que se resolve com a String "Fast Done!" após 2 segundos
    2. Crie uma função chamada "fetchSlow" que retorna uma _Promise_ que se resolve com a String "slow done!" após 6 segundos
    3. Imprimir "Program starting....".
    4. Crie uma função assíncrona que aguarde que os dados retornem do "fetchFast" e, em seguida, imprima os dados. Em seguida, use "await" para esperar que os dados voltem do "fetchSlow" e, logo em seguida, imprima.
    5. Chame a função assíncrona que você criou
    6. Imprima "Program complete!"
    7. Quanto tempo isso leva e por quê?
    8. Como você poderia acelerar o processo?

    [Solução](/pt-br/js/praticando/p63.js)

-   Prática 64:

    1. Crie uma função chamada "goGetCandies" que retornará um Objeto _Promise_ que resolve { candy: "sour keys", quantity: 10 } após 2 segundos
    2. Crie uma função chamada "sellCandies" que pegará um Objeto "candy" e retornará um número que é .25 \* quantity. Isto será o quanto receberemos por nossos doces. No entanto, faça esta função levar 3 segundos para fazer esta matemática.
    3. Crie uma função assíncrona que usa "await" para:
       a. Obter o Objeto "candy da goGetCandies()
       b. Passa-o para "sellCandies" e use "await" para esperar a resposta
       c. Imprime quanto dinheiro ganhamos com nossa venda

    4. Faça os mesmos passos que o número 3, mas com _Promises_:
       P1: Qual destes 2 métodos você prefere?
       P2: Qual destes 2 métodos é mais fácil de ler?

    [Solução](/pt-br/js/praticando/p64.js)
