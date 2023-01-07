# 5. Objetos em JavaScript  

## 5.1. Definição  
Em JavaScript, um objeto é uma coleção de propriedades, e cada uma das propriedades consiste de um par nome e valor. Os objetos são usados ​​para representar no código de maneira mais realista entidades do mundo real, como pessoas, lugares, coisas e eventos.  

## 5.2. A palavra-chave `this`  
A palavra-chave `this` é usada para se referir ao objeto atual que está sendo manipulado ou se refere ao contexto de execução atual. O valor de `this` pode mudar dependendo de como a função é chamada.  
Há cinco características importantes acerca do uso do `this`.  

 1. O valor de `this` é determinado pelo contexto de chamada em que a função é executada. Por exemplo, se uma função é chamada como um método de um objeto, `this` será o objeto. Se a função é chamada como uma função global, `this` será o objeto global.
 
 2. É possível usar a palavra-chave `this` para se referir a propriedades e métodos de um objeto.  

      ```javascript
      const obj = {
        name: 'John',
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
      };

      obj.greet(); // Output: "Hello, my name is John"
      ```
 
 3. Em uma função que é usada como um construtor (isto é, quando é chamada com o operador `new`), o valor de `this` é o objeto criado pelo construtor.  

      ```javascript
      function Person(name) {
        this.name = name;
      }

      const john = new Person('John');
      console.log(john.name); // Output: "John"
      ```  
 
 4. É possível usar a função `bind()`, `call()` ou `apply()` para alterar o valor de `this` de forma explícita.  

      ```javascript
      const obj = { name: 'John' };

      greet() {
        console.log(`Hello, my name is ${this.name}`);
      }

      greet.call(obj); // Output: "Hello, my name is John"
      ```  

 5. Em uma `arrow function`, o valor de `this` é determinado pelo escopo onde a função foi definida, ao invés de como a função é chamada (contexto léxico). Abaixo, `this.name` não está definido no contexto global e, por isso, `this,name` retorna `undefined`.  

      ```javascript
      const obj = {
        name: 'John',
        greet: () => {
          console.log(`Hello, my name is ${this.name}`);
        }
      };

      obj.greet(); // Output: "Hello, my name is undefined"
      ```  

## 5.3. Anatomia de um objeto  
Um objeto em JavaScript é composto por propriedades e métodos. As propriedades são pares nome-valor que representam as características de um objeto. Os métodos são funções que representam ações que um objeto pode realizar.  

```javascript
const pessoa = {
  nome: 'João',
  idade: 30,
  altura: 1.75,
  andar() {
    console.log('Andando...');
  },
  falar() {
    console.log('Falando...');
  }
}
```

Acima, um objeto "pessoa" foi criado com as propriedades "nome", "idade" e "altura", e com métodos "andar" e "falar".  

## 5.4. Criando objetos em JavaScript  

### 5.4.1. Objetos literais  
Um objeto literal é uma notação de objeto que permite criar um objeto e definir suas propriedades e métodos diretamente na notação. É a maneira mais simples de criar objetos em JavaScript. O exemplo anterior (o que cria um objeto chamado "pessoa") é um exemplo de criação de objeto literal.  

### 5.4.2. Palavra reservada `new`  
A palavra reservada `new` pode ser usada para criar um objeto a partir de uma função construtora. Uma função construtora é uma função especial que é usada para inicializar um objeto quando ele é criado.  

```javascript
function Pessoa(nome, idade, altura) {
  this.nome = nome;
  this.idade = idade;
  this.altura = altura;
  this.andar = function() {
    console.log('Andando...');
  };
  this.falar = function() {
    console.log('Falando...');
  };
}

const pessoa = new Pessoa('João', 30, 1.75);
```  

Acima, foi criada uma função construtora para criar um objeto chamado `Pessoa`. São criadas três propriedades e dois métodos para o objeto. O operador `this` se refere ao objeto que está sendo criado pelo construtor. Finalmente, a função `Pessoa` é chamada para criar um novo objeto `Pessoa` com o auxílio do operador `new` em que as chaves "nome", "idade" e "altura" recebem os valores "João", 30 e 1.75, respectivamente.  

### 5.4.3. Protótipos  
Em JavaScript, os objetos são criados a partir de protótipos. Um protótipo é um objeto modelo que serve como base para a criação de outros objetos. Quando criamos um objeto a partir de um protótipo, o novo objeto herda todas as propriedades e métodos do protótipo.

Para criar um objeto a partir de um protótipo, podemos usar o método `Object.create()`.  

```javascript
const prototipoPessoa = {
  andar() {
    console.log('Andando...');
  },
  falar() {
    console.log('Falando...');
  }
}

const pessoa = Object.create(prototipoPessoa);
pessoa.nome = 'João';
pessoa.idade = 30;
pessoa.altura = 1.75;
```  

No código acima, criei um objeto chamado `prototipoPessoa` e, a partir desse modelo, utilizei o método `Object.create()` para criar uma "nova pessoa".  

### 5.4.4. Método *create*  
Este método também pode ser usado para criar um objeto a partir de um protótipo e definir as propriedades do objeto na criação.  

```javascript
const prototipoPessoa = {
  andar() {
    console.log('Andando...');
  },
  falar() {
    console.log('Falando...');
  }
}

const pessoa = Object.create(prototipoPessoa, {
  nome: { value: 'João' },
  idade: { value: 30 },
  altura: { value: 1.75 }
});
```  

## 5.5. Consultando e configurando propriedades  
Para consultar o valor de uma propriedade de um objeto, basta acessá-la usando o operador de ponto (`.`) ou o operador de colchetes (`[]`).  

```javascript
console.log(pessoa.nome); // 'João'
console.log(pessoa['idade']); // 30
```  

> **É importante salientar que a nomeação da chave da propriedade **não pode conter espaços** se queremos utilizar o operador ponto para acessar uma chave.**  

Para configurar o valor de uma propriedade, basta atribuir um novo valor a ela, como abaixo:  

```javascript
pessoa.nome = 'Maria';
pessoa['idade'] = 25;
```  

### 5.5.1. Arrays associativos  
Em JavaScript, é possível usar strings como índices de propriedades de um objeto, o que permite criar arrays associativos, que são objetos que se comportam como arrays, mas podem ter propriedades com nomes personalizados.  

```javascript
const pessoas = {
  '0': { nome: 'João', idade: 30, altura: 1.75 },
  '1': { nome: 'Maria', idade: 25, altura: 1.65 },
  '2': { nome: 'Pedro', idade: 28, altura: 1.80 },
  length: 3
};

for (let i = 0; i < pessoas.length; i++) {
  console.log(pessoas[i].nome);
}
```  

### 5.5.2. Herança  
Em JavaScript, os objetos podem herdar propriedades e métodos de outros objetos através do protótipo. Isso permite a criação de hierarquias de objetos e a reutilização de código.  
Para criar uma hierarquia de objetos, basta definir o protótipo de um objeto como sendo outro objeto.  

```javascript
// Primeiro, criamos um objeto chamado "Animal" com algumas propriedades e métodos
const Animal = {
  name: '',
  type: '',
  fazerBarulho() {
    console.log(`${this.name} fez um barulho (snif snif)!`);
  }
}

// Em seguida, criamos um objeto "Cachorro" que herda tudo de "Animal"
const Cachorro = Object.create(Animal);

// Adicionamos algumas propriedades e métodos adicionais ao objeto "Cachorro"
Cachorro.latir = function() {
  console.log(`${this.name} latiu (au au)!`);
}

// Criamos um novo objeto "cachorro" a partir do objeto "Cachorro"
const cachorro = Object.create(Cachorro);
cachorro.name = 'Buddy';

// Podemos acessar as propriedades e métodos do objeto "Animal" através do objeto "cachorro"
console.log(cachorro.name); // "Buddy"
cachorro.fazerBarulho(); // "Buddy fez barulho (snif snif)!"

// Também podemos acessar as propriedades e métodos adicionais do objeto "Dog"
cachorro.latir(); // "Buddy latiu (au au)!"
```  

### 5.5.3. Erros de acesso à propriedade  
Se tentarmos acessar uma propriedade de um objeto que não existe, o JavaScript lançará um erro de acesso à propriedade. Para evitar, podemos verificar se a propriedade existe no objeto antes de acessá-la.  

```javascript
// Tentativa de acesso sem verificar a existência da propriedade
console.log(pessoa.telefone); // Uncaught TypeError: Cannot read property 'telefone' of undefined

// Verificação de existência
if (pessoa.hasOwnProperty('telefone')) {
  console.log(pessoa.telefone);
} else {
  console.log('A propriedade "telefone" não existe no objeto "pessoa".');
}
```  

## 5.6. Excluindo propriedades de um objeto  
Para excluir uma propriedade de um objeto, podemos usar a palavra reservada `delete`. Isto exclui apenas as propriedades **próprias**, e não as **herdadas**.  

```javascript
delete pessoa.idade;
```  

O pedaço de código acima irá excluir a propriedade "idade" do objeto "pessoa".  

## 5.7. Testando propriedades  
Para testar se um objeto possui uma determinada propriedade, podemos usar o operador `in` ou o método `hasOwnProperty()`.  

```javascript
// Criando objeto
const pessoa = {
  pessoa.nome = "",
}

// Verificando propriedade "nome"
console.log('nome' in pessoa); // true
console.log(pessoa.hasOwnProperty('nome')); // true

// Verificando propriedade "toString"
console.log("toString" in pessoa); // true
console.log(pessoa.hasOwnProperty('toString')); // false
```  

A diferença entre o operador `in` e o método `hasOwnProperty()` é que o primeiro verifica se a propriedade existe no objeto ou em algum de seus protótipos, enquanto o último verifica apenas se a propriedade existe no objeto em si.  
No exemplo acima, no primeiro caso, a propriedade "nome" existe no objeto "pessoa", então tanto o `in` quanto o `hasOwnProperty()` retornam `true`. No segundo caso, a propriedade `toString` não existe no objeto "pessoa", mas existe em seu protótipo (todos os objetos em JavaScript herdam de `Object.prototype()`), então o `in` retorna `true`, mas o `hasOwnProperty()` retorna false.  

## 5.8. Enumeração de propriedades  
Para enumerar as propriedades de um objeto, podemos usar o método `Object.keys()`.  

```javascript
console.log(Object.keys(pessoa)); // ['nome', 'altura']
```  

Também é possível usar o método `Object.getOwnPropertyNames()` para enumerar todas as propriedades de um objeto, incluindo as que foram definidas como não enumeráveis.  

```javascript
console.log(Object.getOwnPropertyNames(pessoa)); // ['nome', 'altura']
```  

## 5.9. Métodos *getter* e *setter*  
Os métodos getter e setter são funções especiais que permitem interceptar o acesso e a atribuição de valores a propriedades de um objeto. Eles são definidos como propriedades do objeto usando a notação de get e set.  

```javascript
const pessoa = {
  _nome: 'João',
  _idade: 30,
  _altura: 1.75,
  get nome() {
    return this._nome;
  },
  set nome(valor) {
    this._nome = valor;
  },
  get idade() {
    return this._idade;
  },
  set idade(valor) {
    this._idade = valor;
  },
  get altura() {
    return this._altura;
  },
  set altura(valor) {
    this._altura = valor;
  }
}

console.log(pessoa.nome); // 'João'
pessoa.nome = 'Maria';
console.log(pessoa.nome); // 'Maria'
```  

No código acima, foi criado um objeto chamado "pessoa". Este objeto possui três propriedades e, para cada propriedade, temos um par `get`-`set`.  O método `get` é usado para recuperar o valor da propriedade, enquanto o método `set` define o valor da propriedade. As propriedades começam com *underscore* (`_`), o que significa que cada uma das propriedades é um **valor privado** do objeto. Portanto, `get nome()` recupera o valor da propriedade "_nome", enquanto `set nome()` define o valor da propriedade "_nome". Isso permite que o valor da propriedade seja lido e modificado de forma segura, sem que o valor seja acessado diretamente.  

## 5.10. Atributos de propriedade  
Os atributos de propriedade são configurações adicionais que podem ser definidas para as propriedades de um objeto. Eles incluem atributos como *enumerable*, *writable*, *configurable* e *value*.  
Para definir os atributos de uma propriedade, podemos usar o método `Object.defineProperty()`.  

```javascript
Object.defineProperty(pessoa, 'nome', {
  enumerable: false,
  writable: false,
  configurable: false,
  value: 'João'
});
```  

O método `Object.defineProperty()` pode ser utilizado para criar ou modificar uma propriedade de um objeto. No caso do exemplo acima, está sendo criada uma propriedade "nome" no objeto "pessoa" com os seguintes atributos:  

 - **enumerable**: especifica se a propriedade deve ser listada em loops como `for...in` ou se deve ser possível acessá-la através de `Object.keys()`. Se esse valor for `false`, a propriedade não será listada.
 - **writable**: especifica se a propriedade pode ser alterada. Se esse valor for `false`, a propriedade não poderá ser alterada.
 - **configurable**: especifica se a propriedade pode ser excluída ou se os atributos `enumerable`, `writable` e `configurable` podem ser modificados. Se esse valor for `false`, a propriedade não poderá ser excluída e os atributos não poderão ser alterados.
 - **value**: especifica o valor da propriedade. No caso, a propriedade "nome" terá o valor `"João"`.  

Esses atributos são chamados de **descritores de propriedades** e são usados para controlar o comportamento de uma propriedade em um objeto. Eles podem ser úteis em situações em que é necessário garantir que uma propriedade não seja alterada ou excluída por acidente ou por código malicioso. Por exemplo, se quisermos criar uma propriedade de somente leitura em um objeto, podemos usar o método `Object.defineProperty()` e definir o atributo **writable** como `false`. Isso garantirá que a propriedade não possa ser alterada.  

## 5.11. Atributos de objeto  
Os atributos de objeto são configurações adicionais que podem ser definidas para um objeto inteiro. Eles incluem atributos como *extensible*, *sealed* e *frozen*.  
Para definir os atributos de um objeto, nós podemos usar os métodos `Object.preventExtensions()`, `Object.seal()` e `Object.freeze()`.  

```javascript
Object.preventExtensions(pessoa);
Object.seal(pessoa);
Object.freeze(pessoa);
```  

### 5.11.1. Protótipos  
O protótipo de um objeto é um outro objeto a partir do qual o objeto é criado. Quando um objeto é criado a partir de um protótipo, ele herda as propriedades do protótipo. Por exemplo:  

```javascript
// Criando um objeto 'animal' como protótipo
const animal = {
  temPatas: true
};

// Criando um objeto 'cachorro' a partir do protótipo 'animal'
const cachorro = Object.create(animal);

// O objeto 'cachorro' herda a propriedade 'temPatas' do protótipo 'animal'
console.log(cachorro.temPatas); // Output: true
```  

### 5.11.2. Atributo Classe  
A partir do ECMAScript 2015 (também conhecido como ES6), foi adicionada a sintaxe de classes em JavaScript. As classes permitem que seja definido um conjunto de propriedades e métodos que compartilham um determinado comportamento. Por exemplo:  

```javascript
class Animal {
  constructor(temPatas) {
    this.temPatas = temPatas;
  }
}

// Criando um objeto 'cachorro' a partir da classe 'Animal'
const cachorro = new Animal(true);

// O objeto 'cachorro' tem a propriedade 'temPatas' definida na classe 'Animal'
console.log(cachorro.temPatas); // Output: true
```  

Uma classe chamada `Animal` define um construtor que recebe como parâmetro `temPatas`. O operador `constructor` é usado para inicializar o objeto criado a partir da classe. Depois, cria-se um objeto chamado `cachorro` a partir da classe `Animal`, passando o valor `true` para o parâmetro `temPatas`. Isso cria um objeto `cachorro` com uma propriedade `temPatas`, e com o valor `true`. Por fim, o valor da propriedade `temPatas` do objeto cachorro é impresso, o que resulta em `true`.  

### 5.11.3. Atributo extensível  
O atributo extensível determina se um objeto pode ter novas propriedades adicionadas a ele. Por padrão, todos os objetos são extensíveis, mas podemos alterar isso usando o método `Object.preventExtensions()`. Por exemplo:  

```javascript
const obj = {};

// O objeto é extensível
Object.isExtensible(obj); // Output: true

// Prevenimos que o objeto seja estendido
Object.preventExtensions(obj);

// O objeto não é mais extensível
Object.isExtensible(obj); // Output: false
```  

## 5.12. Serialização de objetos  
A serialização de objetos é o processo de converter um objeto em uma representação de string, que pode ser armazenada ou transmitida. Isso é útil quando precisamos armazenar ou transmitir dados em um formato que possa ser lido por outras linguagens ou sistemas.  
O método `JSON.stringify()` é usado para serializar um objeto em JavaScript. Por exemplo:  

```javascript
const obj = {
  prop1: 'valor 1',
  prop2: 'valor 2'
};

// Serializamos o objeto em uma string
const serializedObj = JSON.stringify(obj);

console.log(serializedObj);
// Output: '{"prop1":"valor 1","prop2":"valor 2"}'
```  

Para desserializar a string de volta para um objeto, usamos o método `JSON.parse()`:  

```javascript
const deserializedObj = JSON.parse(serializedObj);

console.log(deserializedObj);
// Output: { prop1: 'valor 1', prop2: 'valor 2' }
```  

## 5.13. Métodos mais comuns usados com objetos em JavaScript  

|Objeto|Funcionalidade|
|:-----|:-------------|
|`Object.keys(obj)`|retorna um array com as chaves de um objeto|
|`Object.values(obj)`|retorna um array com os valores de um objeto|
|`Object.entries(obj)`|retorna um array de arrays, onde cada array interno tem a chave e o valor de um par chave:valor do objeto|
|`Object.assign(target, source1, source2, ...)`|copia as propriedades enumeráveis de um ou mais objetos de origem para um objeto alvo|
|`Object.freeze(obj)`|congela um objeto, tornando-o imutável|
|`Object.seal(obj)`|sela um objeto, impedindo que novas propriedades sejam adicionadas a ele e tornando as propriedades existentes somente para leitura|
|`toString()`|retorna uma string representando o objeto|
|`toLocaleString()`|retorna uma string representando o objeto, usando a configuração de localidade atual|
|`toJSON()`|retorna uma string JSON representando o objeto|
|`valueOf()`|retorna o valor primitivo do objeto|  

### 5.13.1. Método `Object.keys()`  
É uma função do JavaScript que retorna um array com as chaves enumeráveis de um objeto. Isso significa que ela retorna as propriedades do objeto que têm a propriedade `enumerable` configurada como `true`.  
Por exemplo, considere o seguinte objeto:  

```javascript
const obj = {
  name: 'John',
  age: 30,
  job: 'developer'
};
```  

Podemos usar o método `Object.keys()` para obter as chaves do objeto da seguinte maneira:  

```javascript
const keys = Object.keys(obj);
console.log(keys);  // ['name', 'age', 'job']
```  

Observe que as chaves do objeto `"obj"` são retornadas como um array de strings. Também podemos usar o método `Object.keys()` para iterar sobre as chaves do objeto:  

```javascript
Object.keys(obj).forEach(key => {
  console.log(key, obj[key]);
});
```  

Isso irá imprimir cada chave e seu respectivo valor para o objeto `"obj"`. É importante notar que o método `Object.keys()` não inclui propriedades herdadas no array de chaves retornado. Se  desejamos incluir propriedades herdadas, podemos usar o método `Object.getOwnPropertyNames()`.  

### 5.13.2. Método `Object.values()`  
É uma função do JavaScript que retorna um array com os valores das propriedades enumeráveis de um objeto. Isso significa que ele retorna os valores das propriedades do objeto que têm a propriedade `enumerable` configurada como `true`.  

```javascript
const obj = {
  name: 'John',
  age: 30,
  job: 'developer'
};
```  

Você pode usar o método `Object.values()` para obter os valores das propriedades do objeto da seguinte maneira:  

```javascript
const values = Object.values(obj);
console.log(values);  // ['John', 30, 'developer']
```  

Os valores das propriedades do objeto `"obj"` são retornados como um array, como podemos observar no exemplo acima. Também podemos usar o método `Object.values()` para iterar sobre os valores das propriedades do objeto. Por exemplo:  

```javascript
Object.values(obj).forEach(value => {
  console.log(value);
});
```  

Isso irá imprimir cada valor das propriedades do objeto `"obj"`. É importante notar que o método `Object.values()` não inclui valores de propriedades herdadas no array de valores retornado. Se desejamos incluir valores de propriedades herdadas, pode usar o método `Object.getOwnPropertyNames()` em conjunto com o método `Object.getPrototypeOf()`.  
O método `Object.values()` é suportado em todos os navegadores modernos, mas não é compatível com versões mais antigas do Internet Explorer.  

### 5.13.3. Método `Object.entries()`  
O método `Object.entries(obj)` é uma função do JavaScript que retorna um array de arrays, onde cada array interno representa uma propriedade enumerável do objeto como um par chave:valor. Isso significa que ele retorna os pares chave:valor das propriedades do objeto que têm a propriedade `enumerable` configurada como `true`.  

```javascript
const obj = {
  name: 'John',
  age: 30,
  job: 'developer'
};
```  

Você pode usar o método `Object.entries()` para obter os pares chave:valor das propriedades do objeto da seguinte maneira:  

```javascript
const entries = Object.entries(obj);
console.log(entries);  // [['name', 'John'], ['age', 30], ['job', 'developer']]
```  

Acima, os pares chave:valor das propriedades do objeto `obj` são retornados como um array de arrays.  
Também podemos usar o método `Object.entries()` para iterar sobre os pares chave:valor das propriedades do objeto. Por exemplo:  

```javascript
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});
```  

Acima, cada chave e seu respectivo valor para o objeto `"obj"` serão impressos.  
É importante notar que o método `Object.entries()` não inclui pares chave:valor de propriedades herdadas no array de pares retornado. Se queremos incluir pares chave:valor de propriedades herdadas, podemos usar o método `Object.getOwnPropertyNames()` em conjunto com o método `Object.getPrototypeOf()`.  
O método `Object.entries` é suportado em todos os navegadores modernos, mas não é compatível com versões mais antigas do Internet Explorer.  

### 5.13.4. Método `Object.assign()`  
Este é um método de objeto global em JavaScript que é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino. A sintaxe é a seguinte:  

```javascript
Object.assign(target, source1, source2, ...)
```  

O primeiro parâmetro é o objeto de destino, que é o objeto no qual os valores das propriedades serão copiados. Os parâmetros subsequentes são os objetos de origem, que são os objetos cujas propriedades serão copiadas para o objeto de destino. Por exemplo:  

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = Object.assign({}, obj1, obj2);
// obj3 é { a: 1, b: 2, c: 3, d: 4 }
```  

O método `Object.assign()` também pode ser usado para mesclar objetos. Por exemplo:  

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = Object.assign({}, obj1, obj2);
// obj3 é { a: 1, b: 3, c: 4 }
```  

O método `Object.assign()` não copia propriedades que são definidas como `null` ou `undefined`. Além disso, ele não copia propriedades prototipadas. Se quisermos copiar todas as propriedades de um objeto, incluindo propriedades prototipadas, pode usar a função `Object.getOwnPropertyNames()` ou `Object.getOwnPropertySymbols()`.  
O método `Object.assign()` é suportado em todos os navegadores modernos, exceto Internet Explorer.  

### 5.13.5. Método `Object.freeze()`  
O método `Object.freeze()` é um método de objeto global em JavaScript que é usado para "congelar" um objeto. Quando um objeto é "congelado", ele se torna **imutável**, isto é, não pode ser modificado de nenhuma maneira. Isso inclui adicionar, remover ou alterar propriedades existentes. A sintaxe é a seguinte:  

```javascript
Object.freeze(obj)
```  

O parâmetro é o objeto que será "congelado". O método retorna o objeto "congelado". Por exemplo:  

```javascript
const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 3;  // Não fará efeito, pois o objeto está congelado
console.log(obj.a);  // Output: 1
```  

O método `Object.freeze()` também congela todos os objetos aninhados dentro do objeto principal. Isso significa que não é possível adicionar, remover ou alterar propriedades de qualquer objeto aninhado.  
Este método é suportado em todos os navegadores modernos, exceto Internet Explorer.  

### 5.13.6. Método `Object.seal()`  
Este é um método de objeto global em JavaScript que é usado para "vedar" um objeto. Quando um objeto é "vedado", ele se torna **imutável**, ou seja, não pode ser adicionado, removido ou alterado qualquer uma de suas propriedades. No entanto, é possível alterar os valores das propriedades existentes. A sintaxe é a seguinte:  

```javascript
Object.seal(obj)
```  

O parâmetro é o objeto que será "vedado", e o método retorna o objeto "vedado". Por exemplo:  

```javascript
const obj = { a: 1, b: 2 };
Object.seal(obj);

obj.a = 3;  // Fará efeito, pois o valor da propriedade a foi alterado
console.log(obj.a);  // Output: 3

obj.c = 4;  // Não fará efeito, pois a propriedade c não existe e não pode ser adicionada
console.log(obj.c);  // Output: undefined

delete obj.b;  // Não fará efeito, pois a propriedade b não pode ser removida
console.log(obj.b);  // Output: 2
```  

O método `Object.seal()` também "veda" todos os objetos aninhados dentro do objeto principal. Isso significa que não é possível adicionar, remover ou alterar propriedades de qualquer objeto aninhado, mas é possível alterar os valores das propriedades existentes.  
Este método é suportado em todos os navegadores modernos, exceto Internet Explorer.  

### 5.13.7. Método `Object.create()`
Este é um método de objeto global em JavaScript que é usado para criar um novo objeto com o protótipo e propriedades especificados. A sintaxe é a seguinte:  

```javascript
Object.create(proto, [propertiesObject])
```  

O primeiro parâmetro, "proto", é o objeto protótipo para o novo objeto. O segundo parâmetro, "[propertiesObject]", é opcional e é um objeto cujas próprias propriedades enumeráveis serão adicionadas ao objeto recém-criado. O método retorna o objeto recém-criado. Por exemplo:

```javascript
const obj1 = { a: 1 };
const obj2 = Object.create(obj1, { b: { value: 2 } });
// obj2 é { b: 2 } com obj1 como seu protótipo

console.log(obj2.a);  // Saída: 1
```  

No exemplo acima, `"obj2"` é criado tendo o `"obj1"` como seu protótipo, e a propriedade "b" é adicionada a `"obj2"` com o valor `"2"`. Como `"obj1"` é o protótipo do `"obj2"`, o `"obj2"` herda a propriedade "a" do `"obj1"`.  
O método `Object.create()` é compatível com todos os navegadores modernos, exceto o Internet Explorer.  

### 5.13.8. Método `toString()`  
O método `toString()` é chamado quando um objeto é usado em uma operação de concatenação de string ou quando o método `String()` é chamado com um objeto como argumento. Por padrão, esse método retorna uma string representando o objeto.  

```javascript
const obj = {
  prop1: 'valor 1',
  prop2: 'valor 2'
};

console.log(obj.toString()); // Output: '[object Object]'
console.log(String(obj)); // Output: '[object Object]'
```  
Acima, define-se um objeto `"obj"` com duas propriedades: `"prop1"` e `"prop2"`. Em seguida, imprime-se o resultado da chamada do método `toString()` no objeto `"obj"`, e o resultado da conversão do objeto `"obj"` para uma string usando o construtor `String()`.  
O método `toString()` é um método herdado por todos os objetos em JavaScript e retorna uma string representando o objeto. No caso desse objeto, ele retorna a string `[object Object]`, que é a representação padrão de um objeto em JavaScript.  
Quando usamos o construtor `String()` para converter um objeto em uma string, ele chama o método `toString` do objeto "por baixo dos panos" e, portanto, o resultado será o mesmo que chamar o método `toString()` diretamente.  
Podemos sobrescrever o método `toString()` em suas próprias classes ou objetos para retornar uma string personalizada. Por exemplo:  

```javascript
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Sobrescreve o método toString()
  toString() {
    return `Nome: ${this.nome}, Idade: ${this.idade}`;
  }
}

const pessoa1 = new Pessoa("João", 30);

console.log(pessoa1.toString()); // Nome: João, Idade: 30
console.log(String(pessoa1)); // Nome: João, Idade: 30
```  
Neste exemplo, foi criada uma classe `Pessoa` que tem um construtor que recebe um `nome` e uma `idade` como argumentos. Depois, sobrescrevemos o método `toString()` para retornar uma string no formato `Nome: {nome}, Idade: {idade}`. Quando chamamos o método `toString()` ou usamos a função `String()` em uma instância da classe `Pessoa`, a string personalizada é retornada.  

### 5.13.9. Método `toLocaleString()`  
É semelhante ao `toString()`, mas este método tenta retornar uma string que esteja formatada de acordo com as convenções locais do usuário. Por exemplo, se o usuário estiver em um país onde se usa o ponto decimal como separador de decimais, a string retornada pelo `toLocaleString()` deverá conter ponto como separador de decimais.  

```javascript
const product = {
  name: 'Produto 1',
  price: 29.99,
  currency: 'USD',
  toLocaleString: function() {
    return `${this.name} - ${this.price.toLocaleString('en-US', { style: 'currency', currency: this.currency })}`;
  }
};

console.log(product.toLocaleString()); // Output: 'Produto 1 - $29.99'
```  

Foi criado um objeto chamado `product` que representa um produto com um `nome`, um `preço` e uma `moeda` (atributos). O objeto `product` também possui um método chamado `toLocaleString()` para retornar uma string que representa o produto. Esta string será apresentada no formato apropriado para a localidade do usuário.  
O método `toLocaleString()` usa o método homônimo presente na propriedade `price` para formatar o preço do produto de acordo com as configurações de localidade especificadas (`en-US` neste caso, o que significa Estados Unidos). O resultado final é uma string que inclui o nome do produto e o preço formatado com a moeda apropriada, como `$29.99`.  

### 5.13.10. Método `toJSON()`  
Este método é chamado quando um objeto é passado como argumento para o método `JSON.stringify()`. Por padrão, esse método retorna a representação JSON do objeto.  

```javascript
const obj = {
  prop1: 'valor 1',
  prop2: 'valor 2',
  toJSON() {
    return {
      prop1: this.prop1
    };
  }
};

console.log(JSON.stringify(obj)); // Output: '{"prop1":"valor 1"}'
```  

O código acima cria um objeto chamado `"obj"` com duas propriedades e converte uma delas para JSON com o método `toJSON()` chamado dentro do objeto. Ao utilizar o método `JSON.stringify()` e passar o objeto criado (`"obj"`) como argumento, ele acessa o método `toJSON()` do objeto, retornando a propriedade `"prop1"` escrita no formato JSON.  

### 5.13.11. Método `valueOf()`  
O método `valueOf()` é herdado por todos os objetos em JavaScript e pode ser sobrescrito por objetos personalizados, se desejado. Este método é chamado automaticamente pelo JavaScript em vários contextos, incluindo quando um objeto é usado em operações matemáticas, em comparações, e em chamadas a funções como `String()` ou `Number()`.  
O código a seguir mostra como o método `valueOf()` é chamado automaticamente quando um objeto é usado em uma expressão matemática:  

```javascript
let obj = { value: 10 };
let num = obj + 5;

console.log(num); // 15
```  

Na expressão `obj + 5`, o objeto `"obj"` é automaticamente convertido em um valor primitivo usando o método `valueOf()`. Se o objeto tiver um método `valueOf()` personalizado, ele será chamado; caso contrário, o método `valueOf()` **herdado** será chamado, retornando o valor do atributo `value` do objeto.  
O método `valueOf()` também pode ser chamado explicitamente:  

```javascript
let obj = { value: 10 };
let num = obj.valueOf() + 5;

console.log(num); // 15
```  

É importante notar que o método `valueOf()` é diferente do método `toValue()`, que é usado para converter um objeto em um valor específico. Por exemplo, o método `toString()` converte um objeto em uma string e o método `toFixed()` converte um objeto do tipo `Number` em uma string com uma quantidade específica de casas decimais.  

### 5.13.12. Método `Object.getOwnPropertyNames()`  
Este é um método de objetos JavaScript que retorna uma matriz de strings que contém os nomes de todas as propriedades próprias enumeráveis e não-enumeráveis do objeto passado como argumento. Isso significa que ele retornará todas as propriedades do objeto que foram definidas diretamente no objeto, mas não as propriedades herdadas a partir de protótipos.  

```javascript
const obj = {
  game: 'cs',
  hoursPlayed: 560
};

console.log(Object.getOwnPropertyNames(obj));
// Output: ['game', 'hoursPlayed']
```  

Acima, a matriz retornada pelo `Object.getOwnPropertyNames()` é ordenada alfabeticamente e inclui todas as propriedades, tanto enumeráveis quanto não-enumeráveis. Se quisermos obter somente as propriedades enumeráveis, podemos usar o método `Object.keys()` em vez disso.  

```javascript
console.log(Object.keys(obj));
// Output: ['game', 'hoursPlayed']
```  

O método `Object.getOwnPropertyNames()` é útil quando desejamos iterar sobre todas as propriedades de um objeto e realizar alguma ação específica com elas. Ele também pode ser útil para verificar se um objeto possui uma determinada propriedade, já que ele retorna todas as propriedades do objeto, independentemente de serem ou não enumeráveis.  

### 5.13.13. Método `Object.getPrototypeOf()`  
Este é um método de objeto em JavaScript que retorna o protótipo (também conhecido como *"prototype"*) de um objeto dado. O protótipo de um objeto é outro objeto que é usado como um modelo para criar o objeto atual. Quando um objeto é criado a partir de um protótipo, ele herda as propriedades e métodos do protótipo. Sei que já abordei isso antes, mas nunca é demais lembrar.  

```javascript
const animalPrototype = {
  makeNoise: function() {
    console.log('Some noise');
  }
}

const dog = Object.create(animalPrototype);

console.log(Object.getPrototypeOf(dog) === animalPrototype); // Output: true
```  

Acima, criei um objeto chamado `"animalPrototype"` que tem um método chamado `makeNoise()`. Em seguida, foi criado um objeto chamado `"dog"` usando o método `Object.create()`, passando `"animalPrototype"` como argumento. Isso faz com que `"dog"` **herde** as propriedades e métodos de `"animalPrototype"`. Podemos verificar isso chamando o método `Object.getPrototypeOf()` e passando `"dog"` como argumento. O método retornará o protótipo de `"dog"`, que é o objeto `"animalPrototype"`.  
O método `Object.getPrototypeOf()` é útil quando queremos verificar qual é o protótipo de um objeto ou quando queremos acessar as propriedades e métodos herdados por um objeto. Ele também é útil para verificar se um objeto é uma instância de uma determinada classe ou tipo de objeto.  

### 5.13.14. Método `Object.getOwnPropertySymbols()`  
Este é um método que retorna um array de símbolos que são propriedades de objeto `"own"` (próprias). Isso significa que o método retorna um array de símbolos que são propriedades enumeráveis do objeto em questão, mas que não inclui propriedades herdadas ou não-enumeráveis.  

```javascript
const obj = {};
const symbol1 = Symbol('symbol1');
const symbol2 = Symbol('symbol2');

obj[symbol1] = 'value1';
obj[symbol2] = 'value2';

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(symbol1), Symbol(symbol2)]
```  

O código acima cria um objeto vazio (`"obj"`) e dois *symbols*, (`"symbol1"` e `"symbol2"`). Em seguida, atribui os valores "`value1`" e "`value2`" aos *symbols* respectivamente no objeto obj. Finalmente, o método `Object.getOwnPropertySymbols()` é usado para retornar todos os *symbols* que são propriedades próprias do objeto `"obj"`. Portanto, a saída será `[Symbol(symbol1), Symbol(symbol2)]`.  
**Símbolos** são um tipo de valor primitivo em JavaScript que servem como identificadores únicos. Eles podem ser usados como propriedades de objeto para criar propriedades privadas que não podem ser acessadas diretamente por código externo. O método `Object.getOwnPropertySymbols()` é útil para acessar essas propriedades privadas em um objeto. É importante reforçar que o método só retornará símbolos que são propriedades de objeto `"own"` (próprias) do objeto em questão. Se quisermos obter todas as propriedades de um objeto, incluindo as herdadas, podemos usar o método `Object.getOwnPropertyNames()` ou o operador `for...in`.  

#### 'Bora praticar!  

 - Prática 33 - Crie um objeto chamado "mexico" com as seguintes propriedades: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Em seguida, imprima o objeto no terminal. Em seguida, altere o "id" para 25 e adicione "Honduras" à lista de vizinhos de "mexico". Finalmente, imprima "mexico" no terminal novamente. [Solução](/pt-br/js/praticando/p33.js)

 - Prática 34 - Crie um objeto chamado "myPet" com as seguintes propriedades: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Imprima "myPet" no terminal e, em seguida, adicione uma nova propriedade (color -> "Black"), altere "breed" para "Beagle". Em seguida, remova "Data" da lista de amigos e imprima "myPet" no terminal novamente. Finalmente, adicione "Chip" à lista de amigos e imprima "myPet" no terminal. [Solução](/pt-br/js/praticando/p34.js)

 - Prática 35 - Crie os seguintes objetos:
    - banana (name -> "banana", quantity -> 1, price -> 1.95)
    - apple (name -> "apple", quantity -> 1, price -> 1.45)
    - candy (name -> "candy", quantity -> 1, price -> 3.50)
    - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])
    
    Em seguida, imprima o objeto "store" no terminal e, em seguida, imprima todos os produtos de "store" (apenas). Em seguida, imprima o 3º produto de "store" (apenas). Altere o preço da "banana" para 1.75 e imprima "banana" e "store". Finalmente, altere o preço de "candy" para 4.99 e imprima "store" e "candy". [Solução](/pt-br/js/praticando/p35.js)

 - Prática 36 - Crie um objeto chamado "houseForSale" com as seguintes propriedades: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Em seguida:
    1. Imprima o objeto;
    2. Exclua a propriedade cuja chave é "built";
    3. Altere a idade do proprietário para 30;
    4. Imprima o valor máximo de "offerPrice" usando reduce;
    5. Adicione a propriedade: sale Price -> 312000;
    6. Imprima "houseForSale" novamente. [Solução](/pt-br/js/praticando/p36.js)

 - Prática 37 - Crie um objeto chamado "myConsole" e:
    1. Atribua à "myConsole" a chave "log" com um valor que é uma arrow function que terá um parâmetro chamado "mensagem" e a função apenas imprimirá a "mensagem";
    2. Como você chamaria essa função "log" dentro do objeto? [Solução](/pt-br/js/praticando/p37.js)
