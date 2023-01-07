# 6. Estruturas de dados `Map()` e `Set()`  

## 6.1. Estrutura de dados `Map()`  

### 6.1.1. Definição  
`Map()` é uma estrutura de dados em JavaScript que permite armazenar pares de chave-valor. Ela é semelhante a um objeto, mas existem algumas diferenças como:  

 - As chaves de uma Map podem ser qualquer valor (inclusive funções, objetos e valores primitivos), enquanto as chaves de um objeto só podem ser valores primitivos (strings ou números).

 - A ordem dos elementos em uma Map é preservada, enquanto a ordem dos elementos em um objeto é determinada pelo motor JavaScript e pode ser diferente entre diferentes navegadores.

 - As Maps possuem métodos próprios para adicionar, remover e iterar sobre os elementos, enquanto os objetos não possuem esses métodos.  

### 6.1.2. Sintaxe  

```javascript
const map = new Map();
```  

Como é possível observar, para criar um novo `Map()` é utilizado o operador `new`. Também é possível criar um novo `Map` com conjuntos de elementos.  

```javascript
const map = new Map([
  ['key1', 'value1'],
  ['key2', 'value2']
]);
```  

Como no `Map()` as chaves podem ser qualquer coisa, as chaves que são strings devem ser escritas entre aspas. Em objetos "comuns", todas as chaves de propriedade são strings e, por isso, não necessitam ser escritas entre aspas.  

### 6.1.3. Adicionando elementos em um `Map()`  
Utiliza-se o método `set()` para adicionar novos elementos em um `Map()`, conforme sintaxe abaixo:  

```javascript
map.set('key3', 'value3');
```  

### 6.1.4. Acessando elementos em um `Map()`  
Para acessar o valor de um elemento, pode-se usar o método `get()`:  

```javascript
const value = map.get('key1');
```  

### 6.1.5. Removendo elementos de um `Map()`  
Para remover um elemento da Map, é possível usar o método delete():  

```javascript
map.delete('key1');
```  

### 6.1.6. Iterações sobre um `Map()`  
Para iterar sobre os elementos de uma Map, é possível usar os métodos `keys()`, `values()` e `entries()`, que retornam iteradores para as chaves, valores e entradas (pares chave-valor), respectivamente:  

```javascript
const map = new Map();
map.set('chave1', 'valor1');
map.set('chave2', 'valor2');
map.set('chave3', 'valor3');

for (const chave of map.keys()) {
  console.log(chave);
} // chave1, chave2, chave3

for (const valor of map.values()) {
  console.log(valor);
} // valor1, valor2 e valor3

for (const entrada of map.entries()) {
  console.log(entrada);
} // ['chave1', 'valor1'], ['chave2', 'valor2'] e ['chave3', 'valor3']
```  

Também é possível utilizar o método `forEach()`. Este método será abordado mais à frente, mas aqui vai um exemplo:  

```javascript
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

### 6.1.7. Outros métodos mais utilizados em `Map()`  

 - `size`: retorna o número de elementos (pares chave-valor) em um `Map()`.
 - `clear()`: remove todos os elementos de um `Map()`.
 - `has()`: verifica se um `Map()` possui um elemento com a chave especificada. Ele retorna `true` se o elemento existir e, caso contrário, retorna `false`.

```javascript
const newMap = new Map();

newMap.set("sport", "football");
newMap.set("lastGame", "argVsFra");

console.log(newMap.size); // 2

console.log(newMap.has("football")); // false
console.log(newMap.has("sport")); // true

newMap.clear();
console.log(newMap.size); // 0
```

#### **'Bora praticar!**  

 - Prática 38 - Crie um "Map" chamado "mexico" com as seguintes propriedades: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Em seguida, imprima o objeto no terminal. Em seguida, altere o "id" para 25 e adicione "Honduras" à lista de vizinhos de "mexico". Finalmente, imprima "mexico" no terminal novamente. [Solução](/pt-br/js/praticando/p38.js)

 - Prática 39 - Crie um "Map" chamado "myPet" com as seguintes propriedades: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Imprima "myPet" no terminal e, em seguida, adicione uma nova propriedade (color -> "Black"), altere "breed" para "Beagle". Em seguida, remova "Data" da lista de amigos e imprima "myPet" no terminal novamente. Finalmente, adicione "Chip" à lista de amigos e imprima "myPet" no terminal. [Solução](/pt-br/js/praticando/p39.js)

 - Prática 40 - Crie os seguintes "Map"s:
    - banana (name -> "banana", quantity -> 1, price -> 1.95)
    - apple (name -> "apple", quantity -> 1, price -> 1.45)
    - candy (name -> "candy", quantity -> 1, price -> 3.50)
    - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])
    
    Em seguida, imprima o objeto "store" no terminal e, em seguida, imprima todos os produtos de "store" (apenas). Em seguida, imprima o 3º produto de "store" (apenas). Altere o preço da "banana" para 1.75 e imprima "banana" e "store". Finalmente, altere o preço de "candy" para 4.99 e imprima "store" e "candy". [Solução](/pt-br/js/praticando/p40.js)

 - Prática 41 - Crie um objeto chamado "houseForSale" com as seguintes propriedades: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Em seguida:
    1. Imprima o objeto;
    2. Exclua a propriedade cuja chave é "built";
    3. Altere a idade do proprietário para 30;
    4. Imprima o valor máximo de "offerPrice" usando reduce;
    5. Adicione a propriedade: salePrice -> 312000;
    6. Imprima "houseForSale" novamente. [Solução](/pt-br/js/praticando/p41.js)

 - Prática 42 Crie um "Map" chamado "myConsole" e:
    1. Atribua à "myConsole" a chave "log" com um valor que é uma arrow function que terá um parâmetro chamado "mensagem" e a função apenas imprimirá a "mensagem";
    2. Chame a função com uma mensagem. Como essa atividade se diferencia entre "Map" e um objeto?
    3. Adicione os seguintes pares chave-valor: 1: "number one", "1": "string one".
    5. Imprima cada um dos dois valores das chaves que você acabou de inserir. Qual a diferença dessa atividade aplicada a um "Map" e a um objeto? [Solução](/pt-br/js/praticando/p42.js)

 - Prática 43 - Crie um array chamado "numbers" com os valores [10, 20, 15, 30, 15, 20, 35, 60, 10]. Encontre o primeiro valor repetido em "numbers" e imprima o índice do valor repetido e o índice onde foi encontrado primeiro. [Solução](/pt-br/js/praticando/p43.js)  

---  

## 6.2. `Set()` Data Structure

### 6.2.1. Definição  

`Set()` é uma estrutura de dados do JavaScript que aceita somente valores únicos, ou seja, valores não podem ser repetidos dentro de um `Set()`. Ele funciona com qualquer tipo de dado primitivo (ou complexo).  
Diferentemente da estrutura `Map()`, o `Set()` não trabalha com pares chave-valor. No entanto, muitos métodos utilizados com as outras duas estruturas também podem ser utilizados com `Set()`.  

### 6.2.2. Sintaxe  

```javascript
const newSet = new Set();
```  

### 6.2.3. Adicionando valores em um `Set()`  

Podemos adicionar valores em um `Set()` de duas formas diferentes:  

```javascript
newSet.add(valor);
// OR
const newSet = new Set([valores aqui]);  
```

Se utilizarmos o método `add()`, podemos adicionar valores (um a um) ao `Set()`. Se iniciarmos o construtor `Set()` com valores, devemos colocar esses valores dentro de colchetes, como um array (mas não será um array). Por exemplo:  

```javascript
const newSet = new Set([1, 2, 3, 4]);

console.log(newSet); //Set(4) { 1, 2, 3, 4 }
```  

Como podemos observar, a saída é similar à de um `Map()`, mas apenas com valores.  

### 6.2.4. Deletando valores de um `Set()`  

Podemos deletar um ou todos os valores de um `Set()`.  

```javascript
newSet.delete(valor);
newSet.clear(); // deleta todos os valores
```  

### 6.2.5. Verificando valores e o tamanho de um `Set()`  

Podemos utilizar o método `has()`, como em um `Map()`.  

```javascript
newSet.has(1); // true
newSet.has(5); // false
```  

Para verificar o tamanho de um `Set()`, podemos utilizar o método `size`, como fazemos em um `Map()`.  

```javascript
console.log(newSet.size); // 4
```  

### 6.2.6. Métodos `keys()`, `values()` and `entries()`  

São três métodos que também estão presentes no `Map()`. Entretanto, eles não funcionaram da mesma maneira em um `Set()`.  
Como foi dito antes, `Set()` não têm um par chave-valor, uma vez que esta estrutura de dados é composta apenas por valores. Com isso em mente, o método `keys()` simplesmente retornará o **valor**, assim como o método `values()`. Mas como ele funciona com o método `entries()`?  
Para `entries()`, o valor retornado é um array com chave e valor, mas neste caso a chave é a mesma que o valor, retornando `[valor, valor]`.  

```javascript
const newSet = new Set([1, 2, 3, 4, 5]);

console.log(newSet.keys()); // { 1, 2, 3, 4, 5 }
console.log(newSet.values()); // { 1, 2, 3, 4, 5 }
console.log(newSet.entries()); // { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }
```  

Como é possível observar no código acima, `keys()` e `values()` retornam um objeto **iterável**, enquanto `entries()` retorna um objeto com arrays (que também são iteráveis.  

### 6.2.7. Iterando em um `Set()`  

Há algumas maneiras de iterar em um `Set()`. Vejamos as mais comuns.  

#### 6.2.7.1. Loop `for...of`  

É um loop especial criado para iterar em objetos iteráveis, como arrays, strings, e `Set()`. O loop `for...of` permite que cada elemento do `Set()` seja percorrido de forma fácil e concisa.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

for (const value of newSet) {
    console.log(valor);
}
```  

O código acima passa por um `Set()` utilizando o 'for...of' para imprimir cada elemento do `Set()`.  
As vantagens básicas sobre a utilização desta forma para iterar sobre um `Set()` são:  

 - Fácil de ler e entender. 
 - Permite a utilização das declarações `break` e `continue` para controlar o fluxo do laço de repetição.  

Por outro lado, a desvantagem básica de utilizar este modo para iterar sobre um `Set()` é:  

 - Ele não fornece acesso ao índice ou chave do elemento atual.  

#### 6.2.7.2. Método `forEach()`  

Este método está disponível em muitos objetos iteráveis, incluindo o `Sets()`. Isto permite que seja passado uma callback function que será chamada para cada elemento do `Set()`.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

newSet.forEach((number) => console.log(number));
```

O código acima faz a mesma coisa que o mostrado anteriormente, mas utilizando o método `forEach()`.  
As principais vantagens de utilizar este método para iterar em um `Set()` são:  

 - Fácil de ler e entender.
 - Permite o uso de uma callback function para processar cada elemento.
 - Fornece acesso ao valor do elemento atual (através do argumento passado para a função.  

Por outro lado, as desvantagens básicas de se utilizar este método para iterar em um `Set()` são:  

 - Não fornece acesso ao índice ou chave do elemento atual.
 - Não permite o uso das declarações `break` ou `continue` para controlar o fluxo do loop.  

#### 6.2.7.3. Um `for` loop normal  

Também é possível utilizar um `for` loop normal para iterar um `Set()`, apesar desta forma ser levemente menos concisa que o loop`for-of` ou o método `forEach()`.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

const iterableObject = newSet.values();

for (let index = 0; index < newSet.size; index++) {
    console.log(iterableObject.next().value);
}
```

Como podemos ver no código acima, é um pouco mais complicado iterar um `Set()` com um loop `for`. Foi preciso criar uma variável para chamar o método `values()` para transformar o `Set()` em um objeto iterável, em que o método `next()` pode ser chamado para acessar o próximo valor.  
A principal vantagem do uso desta forma para iterar sobre um `Set()` é:  

 - Fornece acesso ao índice do elemento atual (através da variável do `for`).  

Por outro lado, as desvantagens básicas sobre a utilização desta forma para iterar sobre um `Set()` são:  

 - Mais verboso e mais difícil de ler do que o laço `for-of`.
 - Não dá acesso ao valor ou chave do elemento atual.
 - Não nos permite utilizar as declarações `break` ou `continue` para controlar o fluxo do laço.

#### 6.2.7.4. Método `next()`  
O método `next()` é um método disponível em objetos iteradores, como aqueles retornados pelos métodos `keys()`, `values()`, e `entries()` de um `Set()`. Ele retorna um objeto com duas entradas: **value*** e **done***. O campo de value contém o próximo valor do iterador, e o campo done indica se o iterador atingiu ou não o fim.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

const iterableObject = newSet.values();

console.log(iterableObject.next().value); // 1
console.log(iterableObject.next().value); // 2
console.log(iterableObject.next().value); // 3
console.log(iterableObject.next().value); // 4
console.log(iterableObject.next().value); // undefined
```  

Cada vez que chamamos o método `next()`, o iterador avança para o próximo valor e retorna um objeto com o atual `value` e o estado de `done`. Quando o iterador chega ao fim, o campo done é definido como `true` e o campo de value é definido como `undefined`.  

##### **'Bora praticar!**  

 - Pratica 44 - Crie uma variável chamada "números" que aponte para um novo conjunto e adicione os seguintes números a ele: 1, 2, 3, 4, 5, 2, 3, 4. Imprima "números" e veja o que está dentro dele. Repita o mesmo criando um array e veja as diferenças. [Solução](/pt-br/js/praticando/p44.js)

 - Prática 45 - Crie um array chamado "points" com os seguintes valores: [10, 20, 10, 30, 15, 15, 35, 60, 10]. Como podemos imprimir todos os valores **ÚNICOS** existentes em "points"? [Solução](/pt-br/js/praticando/p45.js)

 - Prática 46 - Crie um array chamado "numbers" com os valores [10, 20, 15, 30, 15, 20, 35, 60, 10]. Encontre o primeiro valor duplicado em "numbers" e imprima-o no terminal. [Solução](/pt-br/js/praticando/p46.js)

 - Prática 47 - Crie um array chamado "valores" com os seguintes valores:
    - {name -> "banana", quantity -> 1, price -> 1,95}
    - {name -> "maçã", quantity -> 1, price -> 1,45}
    - {name -> "banana", quantity -> 10, price -> 0,05}
    - {name -> "doces", quantity -> 1, price -> 3,50}

    Em seguida:
      1. Crie um novo array chamado "resultados" que começa vazio.
      2. Crie um Set chamado "duplicatas".
      3. Adicione todos os objetos em "itens" a "resultados" em ordem, ignorando quaisquer objetos com nomes duplicados que você encontrar dentro de "itens".
      4. Imprima "resultados".
[Solução](/pt-br/js/praticando/p47.js)