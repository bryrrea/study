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
})

myPromise
    .then(message => message.toUpperCase())
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Finally!"))
```

O código acima utiliza o construtor `Promise()` para criar uma _Promise_ que, após 2 segundos, retorna a resolução positiva da _Promise_. Após, uma função é chamada no método `then` para transformar todos os caracteres da mensagem em maiúsculo. Uma nova função é chamada dentro de outro método `then` para imprimir na tela a mensagem. Ainda, o módulo `catch` foi utilizado para mostrar a mensagem de erro - caso houvesse. Finalmente, um módulo `finally` foi criado para mostrar uma mensagem, independentemente da resolução da _Promise_ ser positiva ou negativa. Portanto, ao rodar o código do exemplo acima, a saída será `HELLO, MY FRIEND` e, na linha seguinte, `Finally!`.

---

## 8.4. **'Bora praticar!**

- Prática 52: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, finalmente, imprima "Program completed" quando a Promise for concluída após 3 segundos. [Solução](/pt-br/js/praticando/p52.js)

- Prática 53: Imprima "Program Started" no início do seu código. Em seguida, crie uma Promise que seja resolvida após 3 segundos e rejeitada após 2 segundos. Mostre a Promise enquanto ela estiver pendente. Em seguida, imprima "Program in progress..." e, por fim, imprima "Program completed" se a Promise for cumprida ou "Program failure" se a Promise for rejeitada. [Solução](/pt-br/js/praticando/p53.js)

- Prática 54: Imprima "Programa Iniciado" no início do seu código. Em seguida, crie uma Promise que se resolve após 3 segundos. Mostre a Promise enquanto ela está pendente. Depois, imprima "Programa em progresso...". Depois, imprima "Etapa 1 concluída!" quando a primeira Promise for cumprida. Faça a primeira Promise retornar uma nova Promise que será cumprida após 3 segundos com a mensagem "Etapa 2 concluída!". Finalmente, imprima a mensagem da segunda Promise depois que ela for cumprida. [Solução](/pt-br/js/praticando/p54.js)

- Prática 55:
    1. Imprima "Programa iniciado" no início do seu código
    2. Crie uma Promise que se resolve após 5 segundos com o valor {data: "Olá, amigo", error: null}
    3. Imprima a Promise enquanto ela estiver pendente
    4. Imprima "Programa em progresso..."
    5. Crie uma primeira cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a primeira Promise for cumprida
    6. Faça a primeira Promise retornar outra Promise que será cumprida após 2 segundos com a mensagem "Primeira cadeia de Promises concluída!"
    7. Imprima a mensagem da Promise acima depois que ela for cumprida
    8. Crie uma segunda cadeia de Promises usando a Promise acima e imprima o valor resolvido quando a segunda Promise for cumprida
    9. Faça essa segunda Promise retornar outra Promise que será cumprida após 10 segundos com a mensagem "Segunda cadeia de Promises concluída!"
    10. Imprima a mensagem da Promise acima depois que ela for cumprida [Solução](/pt-br/js/praticando/p55.js)

- Prática 56: Crie uma Promise que se resolva com o número 10 após 3 segundos. Em seguida, crie outra Promise que se resolva com o número 20 após 5 segundos. Como podemos calcular a soma desses dois valores resolvidos após ambas as Promises serem cumpridas com sucesso? [Solução](/pt-br/js/praticando/p56.js)
