# 15. Expressões Regulares (RegEx)

## 15.1. Definição

A ferramenta de **Expressões Regulares** - mais conhecidas como **_RegEx_** - é responsável pela busca, substituição e validação de padrões de caracteres. Este tipo de ferramenta está presente em praticamente todas as linguagens de programação, e em JavaScript não é diferente.

## 15.2. Sintaxe

Há duas formas de escrever expressões regulares em JavaScript: Notação literal (`/expressão/`) ou com o construtor `RegExp()`.

```javascript
const regex = new RegExp("expression");
```

## 15.3. Padrões

| Padrão  | Descrição                                                                    |
| :-----: | :--------------------------------------------------------------------------- |
|  `\d`   | Caractere numérico (0-9)                                                     |
|  `\D`   | Caractere **não** numérico                                                   |
|  `\w`   | Caractere alfanumérico (letras, números e sublinhado)                        |
|  `\W`   | Qualquer **não** caractere                                                   |
|  `\s`   | Caractere de espaço (espaço, nova linha, tabulação)                          |
|  `\S`   | Qualquer caractere que **não seja** espaço                                   |
|   `.`   | **Qualquer** caractere                                                       |
|   `?`   | **Zero ou uma** ocorrência do caractere ou grupo                             |
|   `*`   | **Zero ou mais** ocorrências do caractere ou grupo                           |
|   `+`   | **Uma ou mais** ocorrências do caractere ou grupo                            |
|  `{n}`  | **Exatamente** "n" ocorrências do caractere ou grupo                         |
| `{n,}`  | **Pelo menos** "n" ocorrências do caractere ou grupo                         |
| `{n,m}` | **Pelo menos** **"n"** e **no máximo** "m" ocorrências do caractere ou grupo |
|  `[]`   | **Qualquer** caractere dentro do colchete, como `[a-z]` (de "a" até "z")     |
|  `[^]`  | **Qualquer** caractere que **não está** dentro do colchete                   |
|  `\b`   | Palavra **limítrofe** (início ou fim de uma palavra)                         |
|   `^`   | Início de linha                                                              |
|   `$`   | Fim de linha                                                                 |

## 15.4. Âncoras (_Anchors_)

| Âncora | Descrição                                            |
| :----: | :--------------------------------------------------- |
|  `\b`  | Palavra **limítrofe** (início ou fim de uma palavra) |
|  `\B`  | Caractere que **não é** uma palavra limítrofe        |
|  `^`   | Início de linha                                      |
|  `$`   | Fim de linha                                         |

## 15.5. _Flags_

| _Flags_ | Descrição                                                                        |
| :-----: | :------------------------------------------------------------------------------- |
|   `g`   | Pesquisa global: não para na primeira ocorrência                                 |
|   `i`   | Ignora diferença entre maiúsculas e minúsculas                                   |
|   `m`   | Múltiplas linhas (`^` e `$` servem como início e fim da linha)                   |
|   `u`   | Texto com caracteres Unicode                                                     |
|   `s`   | Permite que o ponto (`.`) corresponda a qualquer caractere, incluindo nova linha |

# 15.6. **'Bora praticar!**

-   Prática 93:

    1. Criar uma variável chamada "quote" que aponte para: "What is this? A center for ants?"
    2. Criar uma variável chamada "pattern" que aponte para uma expressão regular para procurar por "formiga" em uma corda.
    3. Use o método .test no "pattern" na etapa 2 para verificar se "quote" tem o padrão
    4. Use o método .match na string "quote" para retornar uma correspondência para a regexp "pattern".
    5. Imprimir os resultados das etapas 3 e 4

-   Prática 94:

    1. Criar uma variável chamada "e-mail" que aponte para: "monkey@trees.com".
    2. Criar uma variável chamada "emailPattern" que é uma expressão regular que procurará uma string que TERMINE com ".com".
    3. Teste "email" em "emailPattern" para ver se ele retorna verdadeiro/falso usando .test no "emailPattern".
    4. Encontre uma correspondência usando .match em "email" com o "emailPattern regex".
    5. Imprimir os resultados de 3 e 4.
       BONUS: O que há de errado com este padrão?

-   Prática 95: Baseado no exercício 2

    1. Criar uma variável chamada "e-mail" que aponte para: "monkey@trees.com".
    2. Criar uma variável chamada "emailPattern" que é uma expressão regular que procurará uma string que TERMINE com ".com". E tem QUALQUER número de letras seguido do char '@' seguido de QUALQUER número de letras e terminando com o "".com".
    3. Teste "email" em "emailPattern" para ver se ele retorna verdadeiro/falso usando .test no "emailPattern".
    4. Encontre uma correspondência usando .match em "email" com o "emailPattern".
    5. Imprimir os resultados de 3 e 4.
       BONUS: O que há de errado com este padrão?

-   Prática 96:
    1. Criar uma variável chamada "phoneNumber" que aponte para a string: "020-382-6940"
    2. Criar uma expressão regular chamada "phonePattern" que seja uma expressão regular que combine um número de telefone com o formato acima em "phoneNumber" (incluindo traços)
    3. Teste "phoneNumber" em"phonePattern" para ver se ele retorna verdadeiro/falso usando .test no "phonePattern".
    4. Encontre uma correspondência usando .match no "phoneNumber" com o "phonePattern".
    5. Imprimir os resultados de 3 e 4.
       BONUS: O que há de errado com este padrão?

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
