# 17. Gerenciador de Pacotes do Node (NPM)

## 17.1. Definição

O NPM é um gerenciador de pacotes utilizado para instalar, atualizar, remover e gerenciar módulos, bibliotecas, frameworks, etc. de Node, JS e TS.

## 17.2. Instalando Pacotes

A primeira coisa a se ter em mente é que o NPM instala pacotes **localmente**. Dito isso, três coisas são criadas localmente dentro do nosso projeto quando instalamos um pacote: um diretório chamado `npm_modules` - que contém todos os módulos instalados para esse projeto -, e dois arquivos `json`: `packages.json` - que vimos quando estudamos módulos - e `package-lock.json` - um arquivo `json` com informações internas para o uso do Node, que nunca devemos alterar.
O arquivo `package.json` deve conter todas as dependências necessárias para a execução do projeto, assim como todos os outros metadados do mesmo. Como vimos ao estudarmos módulos JS, uma linha com `"type": "module",` pode ser adicionada para trabalhar com módulos no estilo ES. Outra coisa interessante é que ele pode conter _scripts_ para rodar coisas específicas através do `npm` usando `npm run`.
Como você pode ter notado, temos uma questão complicada sobre pacotes: alguns deles - principalmente os antigos - foram escritos para **CommonJS**, o que pode não suportar todos os `module.exports` como exports nomeados. Isso significa que a `importação` de um módulo CommonJS é diferente da importação de um módulo ES. Portanto, precisamos saber se o pacote instalado é um pacote CommonJS ou um pacote ES. Temos três maneiras de saber:

1. Olhando os módulos dentro da pasta `node_modules` para ver como as funções são exportadas.

    ```javascript
    //CommonJS export
    module.exports = {
        function: function name() {
            /* code here */
        },
        /* anything else */
    };

    // ES export
    export function name() {
        /* code here */
    }
    /* OR */
    function name() {
        /* code here */
    }

    export { name };
    ```

2. Olhando a extensão do módulo: `.js` é um arquivo CommonJS, e `.mjs` é um arquivo ES. No entanto, isso não é uma "bala de prata", já que cada um pode ser escrito como o outro. Então, pode ser uma boa prática escrever nossos pacotes como arquivos `.mjs`?

3. Tentativa e erro: você deve executar o programa após importar o módulo para ver se ele funcionará ou não.

## 17.3. Outros comandos do `npm` e sua importância

| Comando         | O que faz                                                                                                                      | Importância                                                                                     |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| ` npm init`     | Cria um novo `package.json`                                                                                                    | Importante para criar o `package.json` no projeto ou para criar o arquivo dentro de outra pasta |
| `npm uninstall` | Desinstala um pacote local                                                                                                     | Importante para remover pacotes que não serão mais utilizados                                   |
| `npm update`    | Atualiza todos os pacotes da pasta `node_modules` local. Se quisermos atualizar um pacote específico, seu nome deve ser citado | Importante para manter nossos pacotes sempre atualizados (segurança)                            |
| `npm root`      | Expõe a localização da pasta `node_modules` que está sendo utilizada                                                           | Importante para sabermos onde o Node está procurando os pacotes                                 |
| `npm ls`        | Mostra uma lista com todos os módulos existentes na pasta `node_modules` local e suas respectivas versões                      | Importante para vermos quais módulos instalamos e quais suas versões                            |

Temos muitos outros comandos, mas os que estão acima são os mais utilizados. Se precisarmos dar uma olhada em outros comandos, devemos ler a documentação do NPM [aqui](https://docs.npmjs.com/cli/v8/commands).

## 17.4. **'Bora praticar!**

-   Prática 101:

    1. Criar uma pasta para este exercício chamada 'aquecimento'.
    2. Dentro do 'warmup' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
    3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
    4. Use NPM para instalar o pacote "lodash-es
    5. Criar um arquivo chamado "main.js" e importar "camelCase" de lodash-es
    6. Use a função na corda "I love Javascript!" para testar se ela funciona e imprimi-la
    7. Use o nó para executar "main.js".
       BÔNUS: Encontre a função/arquivo camelCase dentro dos módulos_de_nó e leia-o

-   Prática 102:

    1. Criar uma pasta para este exercício chamada 'exercício1'.
    2. Dentro do 'exercício1' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
    3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
    4. Use o NPM para instalar o pacote "giz
    5. Criar um arquivo chamado "main.js" e importar giz (consulte a página npm ou os documentos para saber como)
    6. Use giz para imprimir algumas cordas em diferentes cores, como azul e vermelho.
    7. Use o nó para executar "main.js".
       BÔNUS: Em que dependências o giz depende? Onde você encontraria esta informação?

-   Prática 103:

    1. Criar uma pasta para este exercício chamada 'exercício2'.
    2. Dentro do 'exercício2' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
    3. Use NPM para instalar o pacote "fs-extra".
    4. Crie um arquivo chamado "main.js" e importe fs-extra (consulte a página npm ou os documentos para saber como) NOTA: Este pacote usa a sintaxe CommonJS, NÃO ES Módulos
    5. Use fs-extra para criar um arquivo de texto no diretório atual com o texto "Olá, do NodeJS! "olá.txt"
    6. Use o nó para executar "main.js".
       BÔNUS: Quais são as outras funções do fs-extra que podem ser úteis?

-   Prática 104:

    1. Criar uma pasta para este exercício chamada 'exercício3'.
    2. Dentro do 'exercício3' execute 'npm init' para criar um arquivo package.json padrão (pressione enter para pular respostas)
    3. Acrescentar "tipo": "módulo" ao pacote.json para que possamos usar os módulos es (importação/exportação)
    4. Use o NPM para instalar o pacote "comandante
    5. Criar um arquivo chamado "olá.js" e importar { programa } do comandante (consulte a página npm ou os docs para saber como)
    6. Escrever código para nos permitir executar: nódulo olá.js -n macaco Que vai sair: Olá, macaco! (-n será uma bandeira para o argumento "nome" que pode ser qualquer palavra fornecida por um único usuário)
       Isto é um desafio e requer muita tentativa e erro e ir e vir no site da NPM e nos exemplos/docs deste pacote.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
