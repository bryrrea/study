# Laços `for-of` e `for...in`  

## 14. Laço `for...of`  

### 14.1. Definição  
O laço `for...of` é um laço que itera sobre um objeto iterável ou estrutura de dados, como arrays, strings, `Set()`, `Map()`, etc. Ele é mais conciso e legível do que um laço `for` regular ou um laço `for...in`. É importante salientar que ambos os laços **não alteram** o iterável/Objeto original!  

### 14.2. Sintaxe  

```javascript
for (const elemento of objetoIteravel) {
    // código aqui
}
```  

### 14.3. Laço `for...in` e sua diferença para o laço `for...of`  
O laço `for...in` é um laço que percorre um **Objeto** (principalmente Objetos literais) no JavaScript. Isso é muito importante de se perceber, pois é a principal diferença entre os dois laços: **o primeiro pode percorrer um Objeto, o que significa que ele não percorrerá um array ou string, enquanto o último pode iterar sobre objetos iteráveis, o que significa que não iterará sobre Objetos literais!**  
Mesmo tendo o laço `for...in` para acessar as propriedades de um Objeto, é muito comum o uso do laço `for...of` com métodos de Objeto que retornam um iterável (comumente um array, como os métodos `keys()`, `values()` e `entries()` para Objetos literais). Vejamos um exemplo de cada um.  

```javascript
const fruits = ['apple', 'banana', 'strawberry'];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// strawberry
```  

No código acima, temos um iterável (um array) e um laço `for...of` é utilizado para iterar o array para imprimir cada fruta no terminal.  

```javascript
const me = {
    name: "Bryan",
    qualification: "Biochemical Engineer",
    studying: "Web development",
};

for (const information in me) {
    console.log(`${information}: ${me[information]}`);
}
// name: Bryan
// qualification: Biochemical Engineer
// studying: web development
```  

No código acima, um Objeto literal foi criado e um laço `for...in` é utilizado para percorrer as propriedades do Objeto para imprimir no terminal cada par chave-valor.  
A principal diferença entre os laços `for...of`, `for...in` e `for` regular é que este último permite o acesso aos índices do objeto, enquanto os outros dois não.  

##### **'Bora praticar!**  

 - Prática 48 - Crie uma variável chamada "numbers" que aponte para o seguinte array: [10, 20, 40, 50, 20, 100]. Utilize o laço for-of para imprimir cada número ao quadrado. [Solução](/pt-br/js/praticando/p48.js)

 - Prática 49 - Crie uma variável chamada "ages" que aponte para o seguinte array: [10, 42, 15, 22, 11, 74, 39, 2]. Em seguida:

    1. Crie um array chamado "results" que comece vazio.
    2. Utilize um laço for-of para iterar "ages" e adicione um Objeto ao "results" com uma chave chamada "age" cujos valores atrelados são os números presentes no array "ages". Adicione uma chave chamada "nome" que será sempre "dragon".
    3. Imprima "results". A saída deve ser um array de Objetos. [Solução](/pt-br/js/praticando/p49.js)

 - Prática 50 - Crie um Set vazio chamado "names" com as seguintes strings: "Bilbo", "Hermione", "Spock", "Leia". Em seguida, crie um novo Set chamado "capsNames". Utilize um laço for-of para percorrer "names" e adicionar todos os nomes com todas as letras em maiúsculo em "capsNames". Imprima "capsNames" no terminal. [Solução](/pt-br/js/praticando/p50.js)

 - Prática 51 - Crie um Map chamado "backpack" e adicione as seguintes entradas:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    Utilize um laço for-of em "backpack" e imprima o nome e o valor de cada item no seguinte formato: Name: $Value. Ainda, imprima o valor total dos itens de "backpack". [Solução](/pt-br/js/praticando/p51.js)
