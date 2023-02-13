/*
    Prática 106:

        1. Instale o node-fetch se sua versão do Node for inferior a 18 usando NPM e importe-o em seu arquivo (estilo ES Module)
        2. Faça uma solicitação para: https://jsonplaceholder.typicode.com/posts/1 e imprima o JSON resultante usando Fetch
        BÔNUS: Como isso difere do conteúdo de texto e o que o fetch pode estar fazendo com a resposta JSON para nós?
*/

import fetch from "node-fetch";

const endpoint = "https://jsonplaceholder.typicode.com/posts/1";

const responseToJson = fetch(endpoint)
    .then((responseToJson) => responseToJson.json())
    .then((jsonData) => console.log(jsonData));

/*
    A diferença entre text() e json() é que text() retorna o HTML em si, enquanto json() retorna um Objeto JSON com pares chave/valor (propriedades).
*/