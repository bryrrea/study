/*
    Prática 107:

        1. Instale o node-fetch se sua versão do Node for inferior a 18 usando NPM e importe-o em seu arquivo (estilo ES Module)
        2. Dê uma lida em pokeapi.co
        3. Faça uma solicitação para: https://pokeapi.co/api/v2/pokemon/pikachu e imprima a URL da "obra-oficial" do Pikachu para a sua imagem (png). Visite essa URL para garantir que funcione usando seu navegador.
        DICA: Tenha cuidado com o nome das chaves aqui ao tentar acessar o JSON parceado
*/

import fetch from "node-fetch";

const endpoint = "https://pokeapi.co/api/v2/pokemon/pikachu";

const responseToJson = fetch(endpoint)
    .then((responseToJson) => responseToJson.json())
    .then((data) => console.log(data.sprites.other["official-artwork"].front_default));

