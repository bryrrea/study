# 11. Desestruturação

## 11.1. Definição

Desestruturação é uma expressão JavaScript que torna possível desempacotar valores e propriedades de _arrays_ e objetos em variáveis distintas em uma única linha de código.

## 11.2. Problemática e sintaxe

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const pizza = food[0];
const hamburger = food[1];
const chicken = food[2];
const salad = food[3];
const soup = food[4];
```

Acima, essa era a forma como acessávamos informações dentro de uma _array_ no passado. Desde o ES6, podemos fazer como abaixo:

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const [pizza, hamburger, chicken, salad, soup] = food;
```

Como podemos ver, cada variável dentro do _array_ no lado esquerdo do sinal de igual se refere ao índice dos elementos da _array_. Podemos ignorar um elemento do _array_ usando apenas uma vírgula (por exemplo, `const[pizza, , , salad, soup] = food` armazena "🍕", "🥗" and "🍵" nas variáveis). Nós também podemos utilizar `...rest` para agrupar os outros elementos em um único elemento, como em `const[pizza, hamburger, ...rest] = food`, que retorna `pizza = "🍕"`, `hamburger = "🍔"`, e `"🍗", "🥗", "🍵"` como **"`rest`"**.  
Nós podemos alterar um valor dentro de uma lista da mesma forma:

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const [pizza, hamburger, chicken, salad, soup = "🥕"] = food;
```

## 11.3. A desestruturação funciona com Objetos?

Anteriormente, falamos sobre objetos locais:

```javascript
const fruits {
  strawberry: "🍓",
  banana: "🍌",
  watermelon: "🍉",
  apple: "🍎",
  peach: "🍑"
};
```

E podemos escrevê-los como a seguir:

```javascript
const { strawberry, banana, watermelon, apple, peach } = fruits;
```

E podemos alterar o nome de uma variável se quisermos:

```javascript
const { strawberry: berry } = fruits;
```

## 11.4. **'Bora praticar!**

-   Prática 69:

    1. Criar uma variável chamada "selva" que aponte para a array: ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]
    2. Usar a desestruturação de array para desestruturar o "Lion", e "Rabbit" enquanto ignora os outros animais
    3. Imprima suas variáveis contendo "Lion" e "Rabbit".

-   Prática 70:

    1. Criar uma variável chamada "snacks" que aponte para o Objeto:
       {
       chips: {name: "Pringles", salty: true},
       candy: {name: "Twizzlers", salty: false},
       chocolate: {name: "Marte", salty: false},
       }
    2. Desestruturar "candy" a partir de "snacks" usando desestruturação. Também desestruturar a chave "fruit", que será definido como um valor padrão de:
       {name: "Banana", salty: false} se não existir dentro de "snacks".
    3. Imprimir as variáveis que apontam para os Objetos "candy" e "fruits"

-   Prática 71:

    1. Criar uma variável chamada "store" que é um Mapa. Em seguida, acrescente as seguintes entradas para "store": - Cups" com um valor de 46 - "Candles" com um valor de 121 - "Vases" com um valor de 15
    2. Use um for...of loop para percorrer através de "store", mas dentro a sintaxe do laço (const -- de --), desestruturação do uso para desestruturar a chave e o valor usando o estilo Array desestruturação.
    3. Dentro do laço, imprima a chave e o valor no mesma linha separada por um " => ". Ex: Copos => 46
       (O corpo do laço deve ter apenas uma linha de código)

-   Prática 72:
    1. Criar uma função chamada "xyzCalc" que tenha um único parâmetro que é uma coordenada. Ele espera obter essas coordenadas como um argumento que se parece com o seguinte formato: { x: 20, y: 2, z: 7 }
    2. A função retornará o seguinte cálculo usando x, y e z dentro das coordenadas: `5 * x - 2 * y - z`
    3. Chame esta função usando os seguintes Objetos e certifique-se de que os resultados coincidam: - xyzCalc({ x: 20, y: 2, z: 7 }) => 89 - xyzCalc({ x: 2, y: 1, z: 20 }) => -12 - xyzCalc({ x: 100, y: 100, z: 100 }) => 200
    4. Use a desestruturação dentro da lista de parâmetros do "xyzCalc" para pegar os valores x, y e z diretamente
       dentro da lista de parâmetros de funções (em oposição a dentro do corpo funcional).
    5. Refaça o passo 3 e certifique-se de que ainda funciona
       a. Qual método você prefere?
       b. Qual método é mais claro?

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 11.2. Operador Ternário

### 11.2.1. Definição

Um **operador ternário** é uma forma resumida de escrever uma declaração `if/else`. Ela utiliza três operadores: um comparativo (seja ou não combinado com um operador lógico), um verdadeiro (`?`) e um falso (`:`).

### 11.2.2. Sintaxe

```javascript
a [operador de comparação] checagem ? resposta para verdadeiro : resposta para falso
```

Por exemplo:

```javascript
const moodSad = true;

moodSad === false ? console.log("Yup!") : console.log("Melhore logo! :(");
```

### 11.2.3. Utilização

O uso de operador ternário é melhor quando temos uma única verificação, como no exemplo anterior. Não é recomendado o uso do operador ternário se tivermos mais de uma verificação ou se precisarmos usar uma verificação aninhada, pois poderia ser mais difícil ler o código.

```javascript
const moodSad = true;
const angry = true;

moodSad === false
    ? console.log("Yup!")
    : angry === true
    ? console.log("Melhore logo! Tente relaxar de alguma forma!")
    : console.log("Pelo menos você não está zangado(a)! :)");
```

Como é possível observar acima, o código ficou bem confuso com o uso do operador ternário ao invés de usar um if/else convencional.

### 11.2.3. **'Bora praticar!**

-   Prática 73:

    1. Crie uma variável chamada "hangry" que comece como true;
    2. Crie uma declaração if/else que:
        - Se "hungry" for verdadeiro, imprima "Coma um biscoito!"
        - Caso contrário, imprima: "Sem biscoitos para você!";
    3. Execute o código para ter certeza de que ele funciona.
    4. Repita os passos 2-3, mas com uma expressão ternária.

-   Prática 74:

    1. Criar uma função chamada "over9000" que tem um único parâmetro que é um Número. Esta função:
        - Retorna "Acima de 9000!!!" se o argumento for > 9000
        - Retorna "Abaixo de 9000..." em todos os outros casos
    2. Faça o passo 1 com uma cláusula if/else regular primeiro
    3. Refazer o passo 1 com uma expressão ternária
       BÔNUS: Você pode encurtar isto com a pequena sintaxe da arrow function?

-   Prática 75:

    1. Crie uma variável chamada "wizards" que aponte para o array: ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"].
    2. Utilize "map" sobre "wizards" para criar um novo array que faz o seguinte:
        - Se o nome contém a letra "n" ou "N" devolve o nome, mas com todos os "n" e "N" substituídos por um caractere "\*".
        - Caso contrário, devolva o nome, mas em maiúsculas.
        - Use uma declaração regular de se/else para isso
    3. Repetir o passo 2, mas com uma expressão ternária
       BÔNUS: Você pode encurtar isto com a pequena sintaxe de uma arrow function?

-   Prática 76:

    1. Crie uma variável chamada "characters" que aponte para o array: ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
    2. Filtrar sobre "characters" para criar uma novo array que faça o seguinte:
        - Se o nome tiver um espaço (" "), mantenha-o no resultado (retorne "verdadeiro")
        - Caso contrário, filtrá-lo (devolver "falso")
        - Use uma declaração regular de se/else para isso
    3. Repetir o passo 2, mas com uma expressão ternária
       BÔNUS: Você pode encurtar isto com a pequena sintaxe de uma arrow function?

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
