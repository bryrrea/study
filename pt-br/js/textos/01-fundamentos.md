# 1. Fundamentos

## 1.1. O básico sobre programação

### 1.1.1. Comentando códigos

Uma das primeiras coisas que devemos aprender sobre boas práticas de programação é que nosso código **SEMPRE** deve estar comentado. Todavia, devemos comentar apenas o que é relevante, visto que as linhas de comentário podem deixar o código "poluído", dificultando a leitura do mesmo.  
Dito isso, em JavaScript utilizamos "//" para comentar uma linha de código. Se quisermos um comentário de múltiplas linhas, devemos escrever o comentário entre os dois asteriscos em "/\*\*/". Os comentários não serão interpretados quando o código rodar, e por isso são muito utilizados para ocultar linhas de código do interpretador.

```Javascript
console.log("Hello, World"); // Esse é um comentário de uma linha
/*
    Esse é um
    comentário de
    múltiplas linhas.
*/
console.log("Hello, World, again!");
```

### 1.1.2. Hello, world!

O "Hello, world" é um mantra da programação. Quase sempre será a primeira linha de código de qualquer programador.  
Para escrever essa primeira linha de código, o programador deve saber como a linguagem de programação que ele usa faz para mostrar algo na tela do usuário. No caso do JavaScript, o comando "console.log()" é utilizado para isso. Como pode ser visto no exemplo acima, o texto é colocado entre parênteses e aspas. Este texto, em programação, é chamado **string**.

#### 1.2.1. Aspas

Qual devemos utilizar? Aspas simples ou duplas? Algumas "linguagens humanas" (como o inglês, e.g.) parecem utilizar mais aspas simples do que outras linguagens (como PT-BR, e.g.). Por exemplo, em inglês é comum escrevermos "...user's screen." (tela do usuário) ao invés de "...screen of the user." (tela do usuário). Como o inglês é a "linguagem humana universal", eu utilizarei aspas duplas para expressar strings, mesmo que alguns programadores aconselhem o uso de aspas simples, exceto quando a string fizer uso de aspas simples (como em "user's screen", e.g., que esses programadores aconselham o uso de aspas duplas daí).

### 1.3. O básico sobre interpretador

O JavaScript é uma linguagem interpretada. O interpretador irá "ler" seu código da esquerda para a direita e de cima para baixo. O resultado do código executado imediatamente é retornado. Isso significa que se o seu código tiver algum erro entre suas linhas, tudo antes do erro será interpretado, e tudo depois do erro não será interpretado.

```Javascript
console.log("Espero que estejam entendendo.");
console.log("Se não estiver entendo, me avise.");
huashsuahhsuahushaushuhusashsuiahdskaddsdkashnncjshd
console.log("O que você pensa sobre programação?");
```

O código acima será executado e irá mostrar as duas primeiras linhas ao usuário, mas retornará um erro na terceira linha e não irá mostrar a quarta linha porque a execução será interrompida na linha 3.

## 1.2. Blocos e sentenças de código

Uma sentença de código é um único comando. Sozinho, poderá fazer algo; em um bloco de código, dará significado em uma implementação. No último exemplo, cada "console.log()" é uma sentença. Cada um irá mostrar uma mensagem na tela.  
Um bloco de código, por sua vez, é um punhado de sentenças que serão executadas juntas, e quando todas estas sentenças forem executadas, irão ativar algumas funções ou funcionalidades. Em JavaScript, um bloco de código sempre será disposto entre chaves ({}).

```Javascript
let sorvete = 'chocolate';
if (sorvete === 'chocolate') {
  console.log('Sorvete de chocolate é o meu favorito!');
} else {
  console.log('Desculpe, mas prefiro sorvete de chocolate.');
}
```

Acima, temos dois blocos de código (mesmo que cada um tenha apenas uma sentença): o primeiro irá mostrar algo se o sorvete for de chocolate, e o segundo irá mostrar outra coisa se o sorvete não for de chocolate. Portanto, "if statements" (ou estruturas de controle), "loops for e while" (ou estruturas de repetição) e funções são alguns exemplos de implementação de blocos de código.  
Portanto, basicamente, um bloco de código executará diversas sentenças de código que, quando executadas juntas, nos dão uma função específica.

## 1.3. Declaração de variáveis

Atualmente, temos duas formas de declarar variáveis. Para isso, utilizamos duas palavras reservadas distintas: **let** ou **const**. O uso de **let** refere-se a um valor que pode ser alterado no futuro, enquanto o uso de **const** refere-se a um valor que _nunca_ será alterado. Vamos ver um exemplo:

```javascript
let name = "Bryan Corrêa";
const pi = 3.14;
```

No código acima, a variável _"name"_ poderia ser alterada para outro nome a qualquer momento, enquanto a variável _"pi"_ se refere a uma constante matemática chamada "pi", que tem um valor que é sempre o mesmo.  
Outra diferença importante na declaração de uma variável com **_let_** ou **_const_** é que a utilização do **_const_** assume que o utilizador irá **sempre** declarar um valor à variável, ou seja, com **_let_** não é necessário atribuir um valor à variável.

## 1.4. Tipos de dados primitivos

Temos 5 tipos básicos de dados primitivos em JavaScript: **_string_**, **_number_**, **_boolean_**, **_null_** e **_undefined_**. Este último é quase exclusivo para JavaScript.  
Uma **_string_** é uma cadeia de caracteres. Pode ser o nome de uma pessoa, o nome de uma cidade, um texto, um conjunto de números, caracteres especiais, e assim por diante. No entanto, uma _string_ **sempre** será escrita dentro de **aspas** (duplas ou simples).  
Um **_number_** é qualquer número. Pode ser um número positivo, um número negativo, um número inteiro, um real, e assim por diante. No entanto, é importante notar que o JavaScript tratará qualquer tipo de número como um número. Em Python, por exemplo, os números reais e inteiros são tratados de forma diferente e têm também tipos de dados diferentes. Em JavaScript, os números são limitados a ±((2^53)-1).  
Um **_boolean_** assume apenas dois valores: "verdadeiro" (_true_) ou "falso" (_false_). É normalmente utilizado para testes lógicos, para criar um algoritmo que decidirá que pedaço de código será executado se uma condição for obedecida.  
Um **_null_** refere-se a "nada", "vazio" ou "valor desconhecido", enquanto **_undefined_** se refere a "valor não atribuído". Estes dois tipos de dados são geralmente referidos como "tipo próprio", mas podemos também assumi-los como tipos de dados primitivos.

> Lembre de usar o operador `typeof` para ver o tipo de dado da variável!

## 1.5. Operadores

### 1.5.1. Operadores Aritméticos

Table 1 - Operadores Aritméticos em JavaScript

| Operador |    O que faz     |                              Retorno                               |
| :------: | :--------------: | :----------------------------------------------------------------: |
|    +     |       Soma       |                    Retorna a soma entre valores                    |
|    +     |   Soma unária    | Converte um operando em um número (+"3" é "3" e +"true" retorna 1) |
|    -     |    Subtração     |                 Retorna a diferença entre valores                  |
|    -     |  Negação unária  |                       Se x=3, então -x é -3                        |
|    \*    |  Multiplicação   |               Retorna a multiplicação entre valores                |
|    /     |     Divisão      |                  Retorna a divisão entre valores                   |
|   \*\*   |  Exponenciação   |            Retorna o exponencial de um valor ou função             |
|    %     | Resto de divisão |                   Retorna a sobra de uma divisão                   |
|    ++    |    Incremento    |           Incrementa uma unidade (se x=3, então x++ é 4)           |
|    --    |    Decréscimo    |            Decresce uma unidade (se x=3, então x-- é 2)            |

A precedência é como em Matemática: "`*`" e "/" antes de "+" e "-". Se tivermos uma expressão com operadores com a mesma precedência, é como em Matemática novamente: a expressão será calculada da **esquerda** para a **direita**.

### 1.5.2. Operadores de Comparação

Tabela 2 - Operadores de Comparação em JavaScript

| Operador |        O que faz         |                                       Retorno                                        |
| :------: | :----------------------: | :----------------------------------------------------------------------------------: |
|    ==    |         Igual a          |                     `true` se os elementos tiverem o mesmo valor                     |
|   ===    |   Estritamente igual a   |                 `true` se os elementos tiverem o mesmo valor e tipo                  |
|    !=    | Não igual (diferente) de |                  `true` se os elementos tiverem valores diferentes                   |
|   !==    | Estritamente não igual a | `true` se os elementos possuem diferentes tipos ou mesmo tipo com valores diferentes |
|    >     |        Maior que         |              `true` se o elemento da esquerda é maior que o da direita               |
|    <     |        Menor que         |              `true` se o operando da esquerda é menor que o da direita               |
|    >=    |      Maior ou igual      |          `true` se o elemento da esquerda é maior ou igual que o da direita          |
|    <=    |      Menor ou igual      |          `true` se o elemento da esquerda é menor ou igual que o da direita          |

Como podemos ver, os operadores de comparação retornam um valor booliano (`true` ou `false`). Isso é comum em estruturas "if"".

### 1.5.3. Operadores Lógicos

Tabela 3 - Operadores Lógicos com JavaScript

|   Operador   | O que faz |        Retorno        |
| :----------: | :-------: | :-------------------: |
|      &&      |  AND(E)   | Uma E outra condição  |
| &#124;&#124; |  OR(OU)   | Uma OU outra condição |
|      !       | NOT(NÃO)  |       NÃO igual       |

### 1.5.4. Operadores de Atribuição

Tabela 4 - Operadores de Atribuição

| Operador |           O que faz            |
| :------: | :----------------------------: |
|    =     |           Atribuição           |
|    +=    |       Atribuição de soma       |
|    -=    |    Atribuição de subtração     |
|   \*=    |  Atribuição de multiplicação   |
|    /=    |     Atribuição de divisão      |
|    %=    | Atribuição de resto de divisão |

##### **'Bora praticar!**

-   Prática 1 - Faça um programa que calcule o valor gasto de combustível em uma viagem. Neste programa deve haver 3 variáveis (preço do combustível, valor médio de combustível gasto pelo carro (km/L) e a distância da viagem (em km)). Imprima no console o valor que será gasto em combustível para realizar a viagem.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
