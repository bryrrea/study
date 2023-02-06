# 9. Escopo e Tratamento de Exceções

## 9.1. Escopo

### 9.1.1. Definição

**Escopo\*** é o contexto no qual uma variável é definida. Como em muitas outras linguagens, o JavaScript funciona com dois grandes e distintos escopos: o global e o local.

### 9.1.2. Escopo global

Precisamos ter em mente que quando estamos falando de escopo, estamos na verdade falando de onde uma variável vive. Quando falamos de um **escopo global**, estamos falando de uma variável que existe fora de uma função e fora de um "nível de bloco", ou seja, essa variável pode ser chamada e acessada em qualquer parte do código.

### 9.1.3. Escopo local

Quando falamos de **escopo local**, estamos falando de uma variável que se encontra apenas no contexto onde foi criada, ou seja, só existe e pode ser acessada dentro de uma função ou "nível de bloco" onde foi criada.

```javascript
constant globalVariable = "Eu posso ser acessada onde você quiser";

function differencingGlobalAndLocalScope() {
    constant localVariable = "Existo apenas dentro desta função e também posso ser chamada apenas dentro desta função";

    console.log(globalVariable); // Eu posso ser acessada onde você quiser!
    console.log(localVariable); // Eu existo somente dentro desta função e também posso ser chamada somente dentro desta função!
};

differencingGlobalAndLocalScope();

console.log(globalVariable); // Eu posso ser acessada onde você quiser!
console.log(localVariable); // Retorna uma mensagem de erro dizendo que a variável ainda não foi declarada
```

Sei que o pedaço de código acima parece idiota, mas foi a maneira que encontrei para entender o escopo. A `globalVariable` foi criada fora da função `differencingGlobalAndLocalScope()` e também não foi criada em um "nível de bloco". Assim, quando a função `differencingGlobalAndLocalScope()` foi criada e a variável `globalVariable` foi chamada dentro da função, tudo funciona. Por outro lado, a variável `localVariable` foi criada **dentro** da função `differencingGlobalAndLocalScope()`, e quando foi chamada **fora** de seu escopo, uma mensagem de erro foi retornada dizendo que a variável ainda não foi declarada.

### 9.1.4. Escopo no "nível de bloco"

Você deve ter percebido que eu usei muito "escopo de nível de bloco" no texto acima. No JavaScript, um código em nível de bloco é delimitado por colchetes (`{código aqui}`), ou seja, tudo **no interior** dos colchetes existe **somente** dentro desse nível de bloco. Como exemplos de nível de bloco, podemos utilizar `if statements` e loops como `for`, `while`, `for...of`, e assim por diante.
Vamos fazer uma pequena mudança no programa anterior:

```javascript
constant globalVariable = "Eu posso ser acessada onde você quiser";

function differencingGlobalAndLocalScope() {
    constant localVariable = "Existo apenas dentro desta função e também posso ser chamada apenas dentro desta função";

    console.log(globalVariable); // Eu posso ser acessada onde você quiser!
    console.log(localVariable); // Eu existo somente dentro desta função e também posso ser chamada somente dentro desta função!

    if (true) {
        const newLocalVariable = "Estou existindo apenas aqui dentro!";
        console.log(newLocalVariable);
    }
    console.log(newLocalVariable); // Retorna uma mensagem de erro dizendo que a variável não declarada ainda e o programa para
};


differencingGlobalAndLocalScope(); // Retorna uma mensagem de erro dizendo que a variável não foi declarada ainda e o programa para

console.log(globalVariable); // Eu posso ser acessada onde você quiser!
console.log(localVariable); // Retorna uma mensagem de erro dizendo que a variável não declarada ainda e o programa para
console.log(newLocalVariable); // Retorna uma mensagem de erro dizendo que a variável não declarada ainda e o programa para
```

Como podemos observar, a `newLocalVariable` existe **apenas** dentro do nível de bloco do `if-statement`, e quando tentamos acessar essa variável fora do nível de bloco, um erro é retornado dizendo que a variável não foi declarada ainda.

## 9.2. Tratamento de exceção

**Tratamento de exceção** é uma forma de lidar com erros de execução do nosso código. É caracterizado pelo `try...catch` _statement_, em que cada um é um código de nível de bloco.
Dentro de um nível de block `try` pode estar o código que será testado para vermos se funciona. Dentro do nível de bloco `catch` pode estar o que deve acontecer quando o nível de bloco `try` falhar. O nível de bloco `catch` recebe um parâmetro - comumente nomeado como "error", "err", ou algo assim. É a mensagem de erro que deve aparecer para informar o programador o que está acontecendo de errado com o código.
A palavra reservada `throw` é muito importante quando estamos falando sobre tratamento de exceção. Como podemos imaginar, ela "jogará" uma exceção que pode ser "capturada" e tratada com um `try...catch` _statement_.

```javascript
function divisionOfTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error("Não existe divisão por zero.");
    }

    return a / b;
}

try {
    let division = divisionOfTwoNumbers(1000, 0);

    console.log(division); // Vai falhar
} catch (error) {
    console.error(error); // Error: Não existe divisão por zero.
}
```

No código acima, criei uma função para dividir dois números. Como você deve saber, não há como dividir um número por zero (podemos tratá-lo com cálculo avançado, mas um número não pode ser dividido por zero). Assim, inseri uma exceção na função: se o divisor for zero, o erro será "jogado". Fora da função, criei um `try...catch` _statement_ chamando a função e declarando o divisor como zero. A função resolverá "1000/0", então o erro será "capturado" e o texto que escrevi para o erro poderá ser exibido.

**IMPORTANTE: qualquer coisa pode ser "jogada" como uma exceção, não apenas uma _string_. Podemos usar objetos, números, o que quisermos!**

Como vi em _Promises_, podemos usar `finally` na declaração, que parecerá como `try...catch...finally`. O `finally` recebe um bloco de código que será executado, quer exista ou não uma exceção.

```javascript
function divisionOfTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error("Não existe divisão por zero.");
    }

    return a / b;
}

try {
    let division = divisionOfTwoNumbers(1000, 0);

    console.log(division); // Vai falhar
} catch (error) {
    console.error(error); // Error: Não existe divisão por zero..
} finally {
    console.log("Fim do teste. Esta parte sempre será executada!");
}
```

Eu fiz uma alteração no código anterior para adicionar a declaração `finally`. A mensagem que escrevi lá será sempre executada, independentemente da existência de erros.

## 9.3. **'Bora praticar!**

-   Prática 57:

    1. Imprimir "Programa iniciado".
    2. Lance um objeto de erro com a mensagem "Uh oh!".
    3. Ao final do programa, imprima "Programa concluído"!
    4. Executar o programa e assistir ao seu travamento.
    5. Criar um bloco de "tentativa...captura" que imprima a mensagem de erro
    6. Execute o programa novamente e veja a diferença

-   Prática 58:

    1. Crie um laço que faça um loop 10 vezes a partir de 1
    2. Em cada iteração de loop, imprima o número do loop
    3. No loop número 5, "lance" um objeto de erro com a mensagem "Boom!
    4. "Pegue" o erro e imprima o número do laço
    5. Certifique-se de que o laço vai até 10

-   Prática 59:

    1. Atribua um objeto a uma variável chamada "user". O Objeto pode ter { name: "Misha", age: 22, settings: { color: "blue" } }
    2. Imprimir "Criando usuário..."
    3. Tente imprimir o "user.profile.color"
    4. Imprimir "Usuário criado!"
    5. Execute o código e observe o comportamento
    6. Como você consertaria este código (sem alterar os passos 1-4 ou o Objeto do usuário)? Além disso, adicione qualquer registro apropriado que você ache que faz sentido.

-   Prática 60:
    1. Criar um bloco "try" que faça: criar uma variável chamada "number" e inicializá-la no número 1337, adicionar um número aleatório entre 0-1000 ao "number" e imprimir "number". Se o número for inferior a 2000, um erro deve ser lançado com a mensagem "You lose!", caso contrário imprima "You win" sem "lançar"/erro.
    2. Criar um bloco `catch` que "captura" o erro e o imprime
    3. Dentro do bloco `catch`, imprimir também o "number".
    4. Qual é o problema com esta configuração/código?
    5. Como podemos corrigi-lo para que possamos acessar o "number" no `catch`?

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**
