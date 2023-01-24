# 14. Símbolos (`Symbols()`)

## 14.1. Definição

**Símbolos** são um tipo de dado **primitivo** introduzido em JavaScript no ES6. Um símbolo é único e imutável, o que implica em que cada símbolo criado aponta para um espaço diferente na memória.

## 14.2. Sintaxe

Apesar de os símbolos serem um tipo primitivo de dados no JavaScript, eles só podem ser criados a partir de uma função.

```javascript
const newSymbol = Symbol();
```

A função `Symbol()` aceita um parâmetro, geralmente chamado de **identificador**. Como é de se imaginar, ele serve para identificar o símbolo, e não é incomum receber o mesmo nome da variável que o armazena.

```javascript
const newSymbol = Symbol("newSymbol");
```

## 14.3. Utilização

Como sabemos, os Objetos em JavaScript são propriedades que contêm um par chave/valor. Também sabemos que as propriedades de um Objeto podem ser acessadas se soubermos a chave do mesmo. Por exemplo, se um Objeto tem uma propriedade `name: "Rick` e utilizarmos `nomeDoObjeto.name`, teremos acesso ao valor da propriedade (`Rick`). Contudo, se utilizarmos `Object.keys(nomeDoObjeto)` em um Objeto que contém símbolos como chave da propriedade, a chave do símbolo **não aparece**. Isto é excelente quando criamos um objeto no qual queremos que algumas propriedades sigam "escondidas". Contudo, pode-se obter acesso aos símbolos presentes em um Objeto a partir do método `Object.getOwnPropertySymbols(nomeDoObjeto)`, e este retorna um _Array_ com todos os símbolos do Objeto.

```javascript
const obj = {
    [Symbol("first")]: 1,
    [Symbol("second")]: 2,
    [Symbol("third")]: 3,
};

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(first), Symbol(second), Symbol(third) ]
```

Também sabemos que Objetos só aceitam _Strings_ como chaves. Mesmo que coloquemos um número, por exemplo, este será convertido para _String_. Uma forma de adicionar um número como chave em um Objeto é colocá-lo entre colchetes. Isto também é aplicável para símbolos.

```javascript
const obj = {
    [1]: "one",
    [2]: "two",
    [3]: "three",
    [Symbol("newSymbol")]: "anything here",
};

for (const key of Object.keys(obj)) {
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(obj));
```

O código acima imprimirá `1`, `2` e `3` - que são as chaves do Objeto criado -, e a última linha imprimirá `Symbol(newSymbol)`.
Agora, dê uma nova olhada no código acima. Se você prestou minimamente atenção no código, viu que foi utilizado um loop `for...of` em um Objeto. Como sabemos, Objetos não são originalmente **iteráveis**. No exemplo acima, foi possível utilizar o `for...of` loop por quê utilizamos o módulo `Object.keys()`, e este retorna um iterável. Contudo, um Objeto pode se tornar iterável através do uso de um `Symbol.iterator`.

```javascript
const obj = new Object();

obj.one = 1;
obj.two = 2;
obj.three = 3;

obj[Symbol.iterator] = function* () {
    yield* Object.entries(this);
};

for (const [key, value] of obj) {
    console.log(`${key}: ${value}`);
}

console.log(obj);
```

No código acima, foi criado um novo Objeto a partir do construtor `Object()` e foram adicionadas quatro propriedades: `one`, `two` e `three` - que recebem os valores `1`, `2` e `3`, respectivamente -, e um símbolo - que recebe como valor uma função construtora que cede o controle do fluxo para o Objeto afim de obter acesso às entradas do mesmo. A seguir, fui capaz de utilizar o loop `for...of` **diretamente** no Objeto, uma vez que temos um `Symbol.iterator` no mesmo.

## 14.4. Símbolos conhecidos (_well-known Symbols_)

Acima, vimos um exemplo de "símbolo conhecido": o `Symbol.iterator`. Este é capaz de transformar um Objeto em um iterável. Contudo, temos outros "símbolos conhecidos" que, assim como o _iterator_, são acessados como métodos da função `Symbol`.
São diversos módulos que podem ser utilizados com a função `Symbol`. Por isso, deixarei [aqui](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Symbol#s%C3%ADmbolos_conhecidos) um link que possa ser consultado quando for necessário.

## 14.5. **'Bora praticar!**

-   Prática 89:

    1. Criar uma variável chamada "baboon" que aponta para um Símbolo com uma descrição de "Monkey".
    2. Criar uma variável chamada "gorilla" que também aponta para um Símbolo com uma descrição de "Monkey"
    3. Imprimir os tipos de cada um dos símbolos, assim como sua propriedade de descrição
    4. Os dois símbolos são equivalentes? (Verificação de igualdade) Por que ou por que não?
       [Solution](/en/js/practicing/p89.js)

-   Prática 90:

    1. Crie uma variável chamada "movie" que aponte para o seguinte Objeto:
       { name: "Blade Runner", director: "Ridley Scott",
       year: 1982, rating: 89, genre: "Science Fiction" }
    2. Adicione duas propriedades à este Objeto:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6
    3. Escreva um for-of loop para percorrer as entradas de "movie" e imprima os pares chave/valor:
       Ex: name => Blade Runner, director => Ridley Scott
    4. Como podemos acessar e imprimir os Símbolos em "movie"?
       [Solution](/en/js/practicing/p90.js)

-   Prática 91:

    1. Crie uma variável chamada "book" que aponte para o seguinte Objeto:
       { name: "1984", author: "George Orwell", year: 1949,
       rating: 4.6, genre: "Science Fiction", movie: true }
    2. Crie uma propriedade em "book" que contenha um Symbol.iterator para utilizar um for-of-loop para percorrer o Objeto e devolver os pares chave/valor como um Array de pares (similar à um Map): ["name", "1984"] ["rating", 4.6]
    3. Teste o loop com um for-of-loop para ver se está funcionando
       [Solution](/en/js/practicing/p91.js)

-   Prática 92:

    1. Crie uma variável chamada "book" que aponte para o seguinte Objeto:
       { name: "1984", author: "George Orwell", year: 1949,
       rating: 4.6, genre: "Science Fiction", movie: true }
    2. Crie uma propriedade em "book" que contenha um Symbol.asyncIterator que permita percorrer o Objeto utilizando um for-await-of-loop que retorne os pares chave/valor com um atraso de 1 segundo para cada par. Os pares devem ser dispostos como Arrays de pares (como em um Map): ["name", "1984"] ["rating", 4.6]
    3. Teste o loop com um for-await-of-loop para ver se está funcionando
       [Solution](/en/js/practicing/p92.js)
