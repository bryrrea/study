/*
    Prática 101:

        1. Criar uma pasta para este exercício chamada 'aquecimento'.
        2. Dentro do 'warmup' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
        3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
        4. Use NPM para instalar o pacote "lodash-es 
        5. Criar um arquivo chamado "main.js" e importar "camelCase" de lodash-es
        6. Use a função na corda "I love Javascript!" para testar se ela funciona e imprimi-la
        7. Use o nó para executar "main.js".
        BÔNUS: Encontre a função/arquivo camelCase dentro dos módulos_de_nó e leia-o
*/

import { camelCase } from "lodash-es";

console.log(camelCase("I love JavaScript!"));