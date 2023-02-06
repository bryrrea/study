# 12. Declaração `switch`

## 12.1. Definição

A declaração `switch` é uma abreviação para uma série de declarações `if/else`. Ela é frequentemente utilizada quando há múltiplas condições a serem verificadas, especialmente com **tipos primitivos** de dados. É uma maneira muito boa de substituir as declarações `if/if else/else`, uma vez que aumenta a legibilidade e a capacidade de manutenção do código.

## 12.2. Sintaxe

```javascript
switch (expressao) {
    case primeirValor: {
        //código aqui
        break;
    }
    case segundoValor: {
        //código aqui
        break;
    }
    //mais cases se preciso
    default: {
        //código aqui
        break;
    }
}
```

A palavra-chave `switch` é utilizada para testar uma expressão (com o operator comparativo `===`) para cada `case` (palavra reservada). Uma declaração `break` é exigida, uma vez que nós **sempre** desejamos encerrar o `switch` após a expressão corresponder com algum `case`. Se nenhum `case` for preenchido, utilizamos um `default` (palavra reservada) para lidar com isso. O `default` deve ou não ser seguido por uma declaração `break`.

## 12.3. **'Bora praticar!**

-   Prática 77:

    1. Crie uma variável chamada "food" que aponta para aString "Donut"
    2. Crie uma série de if/else statements que:
        - Cheque se "food" é igual a "Fish" e imprima "Sounds fishy..." se verdadeiro
        - Cheque se "food" é igual a "Hummus" e imprima "Want chips with that?" se verdadeiro
        - Cheque se "food" é igual a "Sushi" e imprima "With or without seaweed?" se verdadeiro
        - Imprima "Food not in our database, sorry!" em qualquer outro caso
    3. Rode o programa e certifique de que está tudo correto, e então mude "food" para "Sushi" e veja se ainda funciona como esperado.
    4. Crie uma declaração switch que simule os passos 2 e 3

-   Prática 78:

    1. Crie uma variável chamada "activities" que aponte para o Array: ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"]
    2. Crie um loop que percorra "activities" e crie uma declaração switch dentro do loop para os casos:
        - "Swimming": imprima "Like a fish!"
        - "Rock Climbing": imprima "Like a mountain goat!"
        - "Running": imprima "Like a cheetah!"
        - Otherwise imprima "I'm sure some animal does that..."
    3. Rode o código e certifique-se de que as mensagens corretas são impressas

-   Prática 79:

    1. Crie uma variável chamada "enemies" que aponte para o Objeto:
       {
       rat: { atk: 3, def: 2, hp: 20, class: 1 },
       goblin: { atk: 10, def: 6, hp: 50, class: 1 },
       troll: { atk: 30, def: 20, hp: 200, class: 2 },
       giant: { atk: 50, def: 40, hp: 500, class: 2 },
       }
    2. Crie um loop que percorra "enemies" e utilize uma declaração switch dentro do loop com os seguintes casos:
        - 1: Imprima "This is an easy fight"
        - 2: Imprima "This will require some training"
        - Caso contrário, imprima "Not implemented yet..."
    3. Rode o código e certifique-se que as mensagens corretas aparecem

-   Prática 80:
    1. Crie uma variável chamada "points" que aponte para o Array: [3, 4, 1, 0, 1, 5, 6]
    2. Crie um loop que percorra "points" e utilize uma declaração switch dentro do loop com os casos:
        - 0-2: imprima "Good try!"
        - 3-5: imprima "Very well done!"
        - Caso contrário, imprima "Wow, shooting for the moon!"
    3. Rode o código e certifique-se que as mensagens corretas aparecem

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
