# 18. Fetch API

> **Neste momento, irie focar apenas em requisições (get).**

## 18.1. Definição

A **fetch API** é uma API que realiza requisições HTTP para obter dados de sites e aplicações. A fetch API também possibilita o envio de dados e informações para o site ou aplicação.

## 18.2. Utilização

A fetch API é o método de requisição mais recomendado se necessitamos de tratamento mais simples com os dados requeridos e recebidos. Outro método muito utilizado é o `axios`, visto que oferece um maior controle nas requisições - incluindo o cancelamento das mesmas. Contudo, a fetch API é muito mais utilizada do que o `axios` em projetos mais simples, visto que esta API é **nativamente integrada** na grande maioria dos navegadores mais utilizados.

## 18.3. Funcionamento e sintaxe

A fetch API é uma API **_Promise-based_**, isto é, a requisição recebe uma **_Promise_** como resposta, denotando que o envio e recebimento de dados podem ocorrer de forma **assíncrona**.

```javascript
fetch(url);
```

Acima, temos a sintaxe para o uso do método fetch API. Este método pode receber diversos parâmetros, mas dois são os mais utilizados: uma URL - parâmetro obrigatório, pois precisamos de uma URL para obtermos os dados - e `init` - um objeto com informações como `headers` e `method`, sendo este último `get`, `post`, `delete`, etc.
Para melhor entendimento sobre o uso deste método, vamos a um exemplo real. Primeiro, criei uma página HTML apenas para abri-la no navegador pra rodar o script no console do mesmo.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="teste.js"></script>
    </body>
</html>
```

Em seguida, vamos fazer uma requisição para a API [`reqres`](https://reqres.in/), uma API gratuita para teste.

```javascript
const endpoint = "https://reqres.in/api/users";
const request = fetch(endpoint);

console.log(request);
```

Dê uma olhada abaixo no que é mostrado no console após fazer a requisição.

| 1 ![Resultado da Requisição](/src/01.png) |          2 ![Objeto _Prototype_](/src/02.png)           |
| :---------------------------------------: | :-----------------------------------------------------: |
| 3 ![Objeto _PromiseResult_](/src/03.png)  | 4 ![Objeto _Prototype_ do _PromiseResult_](/src/04.png) |

A imagem 1 mostra que a requisição retorna uma _Promise_ - como já foi dito anteriormente. Essa _Promise_ é, na verdade, um **objeto** contendo três `entries`: dois arrays com um objeto cada (_Prototype_ e _PromiseResult_) e um array _PromiseState_ que retorna o **estado** da _Promise_. Mas a _Promise_ não voltou como `pending`? Como que a `entry` _PromiseState_ está com o _status_ `fulfilled`? Apesar de o objeto _Promise_ ser `pending`, ele retorna em si um objeto do tipo _Response_ (_PromiseResult_). Isto significa que o estado da _Promise_ pode e deve alterar para `fulfilled`, mas os dados retornados são inacessíveis, visto que a _Promise_ está pendente.
A imagem 2 detalha as entradas da _Promise_, enquanto a imagem 3 detalha o objeto-resposta da requisição.
Agora, preste atenção à imagem 4: o objeto-resposta traz consigo um objeto chamado `Prototype` que é do tipo `Response`. Este objeto contém **todas** as propriedades e métodos que podem ser utilizados para trabalhar com os dados retornados pela requisição. Portanto, para utilização dos dados retornados, devemos trabalhar com o método `then()` - como já vimos em _Promises_ - ou devemos criar uma função assíncrona.

```javascript
const endpoint = "https://reqres.in/api/users";
const request = fetch(endpoint);

const result = request
    .then((resultToJson) => resultToJson.json())
    .then((data) => console.log(data))
    .catch((error) => "Error: " + error);
```

Acima, os dados retornados são convertidos para um objeto JSON e, em seguida, são impressos no console do navegador - como é possível observar na imagem 5.

| 5 ![Resposta tratada](/src/05.png) | 6 ![Resolução dos dados obtidos](/src/06.png) |
| :--------------------------------: | :-------------------------------------------: |

A imagem 6 apresenta os dados obtidos convertidos a objeto JSON. A partir disto, podemos fazer o que quisermos com nossos dados. Finalmente, o método `.catch()` é utilizado para expor ao usuário eventuais erros que possam retornar da requisição, como dados não obtidos por erro de digitação da URL, por exemplo, pois retorna um erro `404` - página não encontra ou inexistente.
Em suma, é assim que trabalhamos com a fetch API: fornecemos uma URL quando utilizamos o método `fetch()`, tratamos a _Promise_ com `.then()` para tratarmos os dados como quisermos, e `.catch()` para descobrirmos eventuais erros de requisição. Contudo, será que o `.catch()` retorna o erro e a requisição é resolvida como falha? **Não**! Por incrível que pareça, a requisição só falha se houver algum problema de conexão. Por exemplo, se você digitar errado o endereço que você quer extrair os dados, o `catch()` "pegará" o erro, mas mesmo assim será retornado um objeto `Response`.

## 18.3. Requisições paralelas e sequenciais

As **requisições paralelas** são as que ocorrem "lado-a-lado", isto é, são requisições que não dependem uma da outra para poderem acontecer. Já as **requisições sequenciais** são aquelas que ocorrem uma **após** a outra, seja por uma depender da outra ou por opção do desenvolvedor.

```javascript
const endpoint01 = "https://reqres.in/api/users";
const endpoint02 = "https://reqres.in/api/unknown";

const fetch01 = fetch(endpoint01);
const fetch02 = fetch(endpoint02);

Promise.all([fetch01, fetch02])
    .then((resultsToJson) =>
        Promise.all(resultsToJson.map((resultToJson) => resultToJson.json()))
    )
    .then((data) => console.log(data))
    .catch((error = "Error: " + error));
```

O código acima realiza duas requisições **paralelas** e, a partir do método `Promise.all()`, espera-se a conclusão das duas _Promises_ para então alterar o _Array_ das _Promises_ por um `map()`, transformando os dados em dois objetos JSON (um para cada requisição) pertencentes a um Array. O resultado pode ser visto na imagem abaixo:

![Resultado das duas requisições paralelas](/src/07.png)

```javascript
const endpoint01 = "https://reqres.in/api/users";
const endpoint02 = "https://reqres.in/api/unknown";

fetch(endpoint01)
    .then((responseToJson01) => responseToJson01.json())
    .then((data) => {
        console.log(data);
        return fetch(endpoint02);
    })
    .then((responseToJson02) => responseToJson02.json())
    .then((data) => console.log(data))
    .catch((error) => "Error: " + error);
```

O código acima realiza duas requisições **sequenciais**, isto é, a primeira requisição é feita e o resultado é impresso no console. Depois, a segunda requisição é realizada e impressa no console. O resultado são dois objetos JSON isolados, conforme a imagem abaixo.

![Requisição sequencial](/src/08.png)

## 18.4. Funções assíncronas

Como já sabemos, fetch API retorna uma _Promise_. Assim, podemos utilizar funções assíncronas para obter e tratar os dados.

```javascript
async function getData() {
    const endpoint01 = "https://reqres.in/api/users";
    const endpoint02 = "https://reqres.in/api/unknown";

    try {
        const fetching01 = await fetch(endpoint01);
        const responseToJson01 = await fetching01.json();

        const fetching02 = await fetch(endpoint02);
        const responseToJson02 = await fetching02.json();

        console.log(responseToJson01, responseToJson02);
    } catch (error) {
        return console.error(error);
    }
}

getData();
```

A função acima trabalha de forma assíncrona e sequencial: ela "para" o código para fazer a requisição e, após resolvida, ela converte a resposta para JSON, fazendo o mesmo na segunda requisição. Finalmente, ela imprime no console os dois objetos e utiliza a declaração `catch()` para tratar imprimir no console caso haja algum erro na requisição. A imagem abaixo mostra o resultado.

![Resultado da requisição assíncrona sequencial](/src/09.png)

As funções assíncronas também conseguem trabalhar com requisições paralelas.

```javascript
async function getData() {
    const endpoint01 = "https://reqres.in/api/users";
    const endpoint02 = "https://reqres.in/api/unknown";

    try {
        const [fetching01, fetching02] = await Promise.all(
            fetch(endpoint01),
            fetch(endpoint02)
        );

        const responseToJson01 = await fetching01.json();
        const responseToJson02 = await fetching02.json();

        console.log(responseToJson01, responseToJson02);
    } catch (error) {
        return console.error(error);
    }
}

getData();
```

A função acima utiliza `Promise.all()` para fazer as duas requisições paralelas assincronamente e, após, converte os dados para JSON assincronamente para imprimir no console. O resultado obtido é idêntico ao anterior, e pode ser observado na imagem abaixo:

![Resultado da requisição assíncrona paralela](/src/10.png)
