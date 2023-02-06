/*
    Prática 103: 

        1. Criar uma pasta para este exercício chamada 'exercício2'.
        2. Dentro do 'exercício2' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
        3. Use NPM para instalar o pacote "fs-extra".
        4. Crie um arquivo chamado "main.js" e importe fs-extra (consulte a página npm ou os documentos para saber como) NOTA: Este pacote usa a sintaxe CommonJS, NÃO ES Módulos
        6. Use fs-extra para criar um arquivo de texto no diretório atual com o texto "Olá, do NodeJS! "olá.txt"
        7. Use o nó para executar "main.js".
        BÔNUS: Quais são as outras funções do fs-extra que podem ser úteis?
*/

const fsExtra = require("fs-extra");

const file = "./hello.txt";

const data = "Hello, from NodeJS!";

fsExtra.outputFile(file, data);

/*
    fs-extra tem funções que podem lidar com Promises (função Async/await). Também tem funções para determinar se um diretório existe, para criar esse diretório se ele não existir, funções para copiar e mover arquivos e diretórios, e assim por diante.
*/