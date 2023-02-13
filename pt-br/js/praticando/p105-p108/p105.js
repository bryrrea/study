/*
    Prática 105:

        1. Instale o node-fetch se sua versão do Node for inferior a 18 usando NPM e importe-o em seu arquivo (estilo ES Module)
        2. Faça uma solicitação para: https://www.craigslist.org/about/ e imprima a string HTML resultante (texto) usando Fetch
        3. Compare o que você vê no Node com a visita à página real no seu navegador - o que corresponde?
*/

import fetch from "node-fetch";

const endpoint= "https://www.craigslist.org/about/";
const fetchingSite = fetch(endpoint)
    .then((responseToText) => responseToText.text())
    .then((html) => console.log(html));