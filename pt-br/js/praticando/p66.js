/*
   Prática 66:
      1. Criar uma variável chamada "views" que aponte para esta matriz: [ [5, 10, 20], [10, 20, 30] ]
      2. Criar outra variável chamada "viewCopy" que cria uma cópia de "views" utilizando o operador de propagação
      3. Imprimir "views" e "viewsCopy".
      4. Adicione o número 40 ao final da segunda matriz dentro da "ViewCopy" e exclua o último número (20) dentro do primeiro array.
      5. Adicione o array [100, 200] ao final de "viewsCopy".
      6. Imprimir "views" e "viewsCopy".
      Explicar este comportamento
*/

const views = [ [5, 10, 20], [10, 20, 30] ];

const viewsCopy = [...views];

console.log(views);
console.log(viewsCopy, "\n");

viewsCopy[1].push(40);
viewsCopy[0].pop();
viewsCopy.push( [100, 200] );

console.log(views);
console.log(viewsCopy);

/*
   Isso acontece porque os iteráveis "copiados" apenas criam uma referência que aponta para o iterável original. Portanto, se fizermos uma mudança direta no iterável "copiado", ele mudará SOMENTE o "copiado". Entretanto, se fizermos uma mudança como utilizando os métodos de arrays `.pop()` ou `.push()`, mudamos AMBOS iteráveis.
*/