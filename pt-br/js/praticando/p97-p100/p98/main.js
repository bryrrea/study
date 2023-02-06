/*
    Prática 98:

        1. Crie uma nova pasta chamada "exercise1"
        2. Dentro de "exercise1" crie 2 arquivos:
            - main.js
            - utils.js
        3. Dentro de utils.js crie uma função chamada "square" que receba um único parâmetro chamado "number" e RETORNE "number" ao quadrado (multiplicado por si mesmo).
        4. Também dentro de utils.js, crie uma função chamada "greeting" que receba um único parâmetro chamado "name" e imprima simplesmente: `Hello ${name}!`
        5. Exporte "square" como uma exportação NOMEADA de utils.js
        6. Exporte "greeting" como uma exportação DEFAULT de utils.js
        7. Importe tanto "square" quanto "greeting" em UMA linha dentro de main.js. Chame ambas as funções para garantir que funcionem como esperado. Execute main.js usando Node.
        DICA: Certifique-se de criar um arquivo package.json dentro de "exercise1" com isto dentro: { "type": "module" }
*/

import greeting, { square } from "./utils.js";

greeting("Bryan");
console.log(square(1000000000));