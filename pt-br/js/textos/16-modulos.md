# 16. Módulos

## 16.1. Definição

**Módulos** são arquivos que contêm funções, objetos, variáveis e qualquer estrutura de dados, podendo ser importados em outros arquivos. Assim como em outras linguagens de programação, os módulos devem **exportar** suas funcionalidades para serem **importadas** no código-alvo. Isso garante a reutilização de trechos de código sem a necessidade de ficar reescrevendo-o cada vez que é preciso usar.

## 16.2. Por que utilizar módulos?

-   Encapsula código, funcionalidades e variáveis;
-   Facilita a reutilização de código persistente em uma aplicação;
-   Diminui a poluição no escopo global;
-   Separa as responsabilidades de uma aplicação

## 16.3. Diferentes sintaxes

Em suma, há duas formas de exportação:

```javascript
// código aqui com funções, estruturas de dados, etc.

export { função1, função2, objeto1, objeto2, etc. }
```

```javascript
// código aqui com funções, estruturas de dados, etc.

export default função1;
```

Na segunda sintaxe, só é possível exportar **uma** funcionalidade, isto é, **a principal** funcionalidade do módulo. Há outras formas de exportação de módulos, mas são muito menos utilizadas.
Há três formas principais para importarmos módulos:

```javascript
import { nomeDoModulo } from "/arquivo";

// Código
```

```javascript
import { nomeDoModulo as nomeAlias } from "/arquivo";

// Código
```

```javascript
import * as nomeAtribuido from "/arquivo";

// Código
```

Quando utilizamos a palavra reservada `as`, significa que estamos determinando um _alias_ - um **apelido** - ao módulo. Também podemos utilizar isto na exportação, mas é muito menos comum.

## 16.4. Convenções

Há algumas convenções para trabalharmos com módulos:

-   Todas as declarações `import` devem ser escritas no começo do arquivo
-   A declaração `export default` é utilizada para a principal função do módulo
-   Os nomes dados aos módulos devem ser claros e descritivos
-   Evita-se exportar muitos itens ou o que é desnecessário
-   Deve-se importar somente as funcionalidades que serão utilizadas
-   O módulo deve ser reutilizável, isto é, ele deve poder ser utilizado em qualquer parte da aplicação sem se preocupar com dependências externas ou efeitos colaterais

## 16.5. **'Bora praticar!**

-   Prática 97:

    1. Crie uma nova pasta chamada "warmup"
    2. Dentro de "warmup" crie 2 arquivos:
        - main.js
        - utils.js
    3. Dentro de utils.js crie uma função chamada "capsLock" que receba um único parâmetro chamado "string" e RETORNE "string", mas em maiúsculas
    4. Exporte "capsLock" como uma exportação NOMEADA de utils.js
    5. Importe "capsLock" dentro de main.js e chame-a com qualquer string como argumento, em seguida, imprima o resultado. Execute main.js usando o Node.
       DICA: Certifique-se de criar um arquivo package.json dentro de "warmup" com isto dentro: { "type": "module" }
       [Solução](</pt-br/js/praticando/p97AoP100(modulos)/p97>)

-   Prática 98:

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
       [Solução](</pt-br/js/praticando/p97AoP100(modulos)/p98>)

-   Prática 99:

    1. Crie uma nova pasta chamada "exercise2"
    2. Dentro de "exercise2", crie 4 arquivos:
        - main.js
        - modules.js
        - moduleA.js
        - moduleB.js
    3. Dentro de moduleB.js, crie um Array chamado "topMovies": ["Spirited Away", "The Matrix", "Star Wars", "Zoolander"]. Exporte "topMovies" como uma exportação NAMED
    4. Dentro de moduleA.js, importe "topMovies" de moduleB.js. Em seguida, crie uma Função chamada "checkMovie" que tem um parâmetro de String chamado "movieName". Essa função retornará verdadeiro se o filme estiver em "topMovies", caso contrário, retornará falso. Exporte "checkMovie" como uma exportação NAMED
    5. Dentro de modules.js, importe "checkMovie" de moduleA.js e "topMovies" de moduleB.js. Em seguida, exporte-os ambos como exportações NAMED (Este arquivo importará e exportará as mesmas variáveis)
    6. Importe tanto "checkMovie" quanto "topMovies" em uma única linha dentro de main.js de modules.js. Chame "checkMovie" com nomes de filmes diferentes para garantir que funcione. Além disso, imprima "topMovies" para garantir que é o array correto. Execute main.js usando Node.
       DICA: Certifique-se de criar um arquivo package.json dentro de "exercise2" com isso dentro: { "type": "module" }
       [Solução](</pt-br/js/praticando/p97AoP100(modulos)/p99>)

-   Prática 100:

    1. Crie uma nova pasta chamada "exercise3".
    2. Dentro de "exercise3", crie 3 arquivos:
        - main.js
        - moduleA.js
        - moduleB.js
    3. Dentro de moduleA.js, imprima 'Module A'. Em seguida, crie e exporte (nomeada) uma variável chamada 'a' que aponte para a String 'A'.
    4. Dentro de moduleB.js, importe 'a' de moduleA.js. Além disso, imprima 'Module B' a seguir. Em seguida, crie e exporte (nomeada) uma variável chamada 'b' que aponte para a String 'B'. (Nota: não USAMOS 'a' aqui)
    5. Dentro de main.js, importe 'b' de moduleB.js. Imediatamente após isso, imprima 'MAIN'. (Nota, não USAMOS 'b' aqui)
    6. Tente prever a ordem das impressões quando você executar main.js. Por que isso pode acontecer?
       BÔNUS: Por que isso pode tornar o top-level await em módulos complicado de usar?
       DICA: Certifique-se de criar um arquivo package.json dentro de "exercise3" com isso dentro: { "type": "module" }
       [Solução](</pt-br/js/praticando/p97AoP100(modulos)/p100>)
