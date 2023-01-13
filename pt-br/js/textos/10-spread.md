# 10. O Operador de propagação (`...`)

## 10.1. Definição

Um **operador *spread*** (operador de propagação) é um operador JavaScript embutido usado para percorrer objetos iteráveis para expandi-los.

## 10.2. Caso

Vamos fingir que, por alguma razão, queremos copiar um array de números para um array vazio e não temos o método `.concat()` para fazer isso:

```javascript
const arrayWithNumbers = [1, 2, 3, 4, 5];

let copyArray = [];

for (const number of arrayWithNumbers) {
    copyArray.push(número);
}
```

Com o operador de propagação é muito mais fácil fazer isso:

```javascript

const arrayWithNumbers = [1, 2, 3, 4, 5];

const copyArray = [...arrayWithNumbers]; // [1, 2, 3, 4, 5]
```

Se quisermos acrescentar mais números no array de cópias, só precisamos passar os números:

```javascript
const copyArray = [...arrayWithNumbers, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]
```

Podemos utilizar o operador de propagação com qualquer objeto iterável JavaScript, como arrays, `.Set()`, `.Map()`, strings. Também podemos usar em Objetos:

```javascript
const object = {a: 1, b: 2, c: 3};

const newObject = {...objeto, d: 4, e:5};
```

É importante observar que as mudanças **podem afetar** os dados originais. Isso acontece porque os iteráveis "copiados" apenas criam uma referência que aponta para o iterável original na memória. Portanto, se fizermos uma mudança direta no iterável "copiado", ele mudará **somente** a "cópia". Entretanto, se fizermos uma mudança como utilizando os métodos de arrays `.pop()` ou `.push()`, mudamos **ambos** iteráveis, o original e a "cópia". A modificação apenas no array de cópias também só é possível se o array/iterável apresentar apenas tipos primitivos de dados.

## 10.3. **Vamos praticar!**

- Prática 65:
      1. Crie uma variável chamada "points" que aponte para esta matriz: [10, 15, 20, 30, 5]
      2. Criar outra variável chamada "pointsCopy" que cria uma cópia dos "points" utilizando o operador de propagação, mas também acrescenta
         2 valores extras no final: 50 e 75
      3. Imprimir ambos os arrays.
      [Solução](/pt-br/js/praticando/p65.js)

- Prática 66:
      1. Criar uma variável chamada "views" que aponte para esta matriz: [ [5, 10, 20], [10, 20, 30] ]
      2. Criar outra variável chamada "viewCopy" que cria uma cópia de "views" utilizando o operador de propagação
      3. Imprimir "views" e "viewsCopy".
      4. Adicione o número 40 ao final da segunda matriz dentro da "ViewCopy" e exclua o último número (20) dentro do primeiro array.
      5. Adicione o array [100, 200] ao final de "viewsCopy".
      6. Imprimir "views" e "viewsCopy".
      Explicar este comportamento
      [Solução](/pt-br/js/praticando/p66.js)

- Prática 67:
      1. Criar uma variável chamada "animal" que aponte para este Objeto:
         { name: "Koala", kingdom: "Australia", cute: true,
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }
      2. Criar uma variável chamada "koala" que aponte para uma cópia de "animal" usando o operador de propagação para Objetos, mas acrescente a seguindo entrada também: "tail": false,
      3. Imprimir "animal" e "koala".
      4. Mude "cute" para ser "false" dentro de "animal". Imprimir ambos novamente e observe a mudança. Isso faz sentido?
      5. Adicionar uma propriedade "cute" inicializada para ser "false" dentro do Objeto "kangaroo", dentro do array "friends" em "animal".  Imprima novamente tanto "animal" quanto "koala" e observe a mudança. Isto faz sentido?
      [Solução](/pt-br/js/praticando/p67.js)

- Prática 68:
      1. Crie uma variável chamada "superhero" que aponte para este objeto:
         {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95} }
      2. Como você criaria uma CÓPIA do Objeto "superhero" INCLUINDO CÓPIAS de "enemies" e "bestMovie"?
      3. Depois de criar uma cópia total, modifique o seguinte:
         - adicionar "Poison Ivy" ao array de "enemies" da cópia.
         - adicionar { ano: 2008 } ao objeto "bestMovie" da cópia
      4. Imprimir tanto o "superhero" quanto sua cópia para garantir que "enemies" e "bestMovie" do "superhero" NÃO foram modificados.
      Isto pode ser feito de muitas maneiras diferentes, mas também é bastante desafiador!
      [Solução](/pt-br/js/praticando/p68.js)
