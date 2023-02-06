/*
    Prática 104:

        1. Criar uma pasta para este exercício chamada 'exercício3'.
        2. Dentro do 'exercício3' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
        3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
        4. Use o NPM para instalar o pacote "comandante 
        5. Criar um arquivo chamado "olá.js" e importar { programa } do comandante (consulte a página npm ou os docs para saber como)
        6. Escrever código para nos permitir executar: nódulo olá.js -n macaco Que vai sair: Olá, macaco! (-n será uma bandeira para o argumento "nome" que pode ser qualquer palavra fornecida por um único usuário)
        Isto é um desafio e requer muita tentativa e erro e ir e vir no site da NPM e nos exemplos/docs deste pacote.
*/

import { Command } from "commander";

const program = new Command();

program
    .option("-n, --name <name>", "Output a 'hello' with your name")
    .parse();

const options = program.opts();

console.log(`Hello, ${options.name}`);