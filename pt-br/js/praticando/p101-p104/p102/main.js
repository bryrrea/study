/*
    Prática 102:

        1. Criar uma pasta para este exercício chamada 'exercício1'.
        2. Dentro do 'exercício1' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
        3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
        4. Use o NPM para instalar o pacote "giz
        5. Criar um arquivo chamado "main.js" e importar giz (consulte a página npm ou os documentos para saber como)
        6. Use giz para imprimir algumas cordas em diferentes cores, como azul e vermelho.
        7. Use o nó para executar "main.js".
        BÔNUS: Em que dependências o giz depende? Onde você encontraria esta informação?
*/

import chalk from "chalk";

const message = "Hi, there!"

console.log(chalk.bgHex("#F88DAD").hex("#FAC748").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#8390fa").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#1D2F6F").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#1C0221").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#B9F18C").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#596157").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#F9E9E6").bold(message));

/*
    As dependências de giz podem ser encontradas dentro dos arquivo package.json ou package-lock.json, e também com o comando npm list (ou npm list --omit=dev para ver apenas a dependência de produção). Tem apenas uma dependência (chalk@5.2.0).
*/



