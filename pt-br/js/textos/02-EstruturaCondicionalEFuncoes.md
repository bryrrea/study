# 2. Estruturas condicionais e Funções

## 2.1. Estruturas condicionais

As estruturas condicionais verificam se uma condição é verdadeira ou falsa antes de executar um bloco de código. Abaixo, podemos ver uma declaração básica do tipo "se".

```javascript
if (condicao_verdadeira) {
    bloco_de_codigo;
}
```

Dependendo da verificação do resultado, podemos ter mais de um bloco de código para serem executados. Para lidar com isso, utilizamos uma estrutura condicional mais robusta: o "if-else".

```javascript
if (condicao_verdadeira) {
    bloco_de_codigo;
} else {
    bloco_de_codigo;
}
```

Como podemos ver acima, o bloco de código _"else"_ será executado se a condição for falsa.  
Temos também uma estrutura condicional mais robusta para quando temos diversas condições a serem verificadas: o "if-else-if".

```javascript
if (condicao1_verdadeira) {
    bloco_de_codigo;
} else if (condicao2_verdadeira) {
    bloco_de_codigo;
} else if (condicao3_verdadeira) {
    bloco_de_codigo;
} else {
    bloco_de_codigo;
}
```

Se a primeira condição for "verdadeira", o primeiro bloco de código será executado. Se a segunda condição for "verdadeira", o segundo bloco de código será executado. Se a terceira condição for "verdadeira", o terceiro bloco de código será executado. Se nenhuma das três condições for "verdadeira", o quarto bloco de código será executado.  
Temos duas convenções principais sobre estruturas condicionais:

1.  Quando temos uma verificação complexa a ser feita, é altamente recomendável a criação de uma variável para estocar essa verificação.
2.  A variável criada deve começar com _"is"_, já que estamos verificando uma condição booliana. É como se estivéssemos perguntando algo ao nosso código, por exemplo _"isEven"_ (este número é um número par?).

### **'Bora praticar!**

-   Prática 2 - Faça um programa que calcule o valor gasto de combustível em uma viagem. Neste programa deve haver 5 variáveis (preço do etanol, preço da gasolina, tipo de combustível do carro, valor médio de combustível gasto pelo carro (km/L) e a distância da viagem (em km)). Imprima no console o valor que será gasto em combustível para realizar a viagem.

-   Prática 3 - Faça um algoritmo que, dadas as 3 notas de um aluno em um semestre da faculdade, calcula e imprima a média e mostre a classificação deste aluno. Se a média for menor que 5, o aluno foi reprovado; se a média for entre 5 e 7, o aluno foi para recuperação; finalmente, o aluno foi aprovado se teve média acima de 7.

-   Prática 4 - Crie um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa e retorno em qual espectro essa pessoa se encontra. Se o IMC é menor que 18,5, diz-se que a pessoa está baixo do peso ideal; se o IMC está entre 18,5 e 25, a pessoa está em seu peso normal; se o IMC está entre 25 e 30, a pessoa está acima do peso; se o IMC está entre 30 e 40, a pessoa é considerada obesa, e se o IMC é acima de 40, a pessoa apresenta obesidade grave.

-   Prática 5 - Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a opção de pagamento escolhida. Utilize as seguintes condições: 10% de desconto quando pago à vista no Débito; 15% de desconto quando pago à vista em dinheiro ou PIX; se pago em duas vezes no cartão de crédito, o consumidor pagará o preço de etiqueta; se fizer em mais de duas vezes no cartão de crédito, será cobrado o preço da etiqueta acrescido de 10%.

**Você pode verificar as soluções [aqui](/pt-br/js/praticando/p00-p96/)**

## 2.2. Funções

Uma função é um pedaço de código que pode ser "chamada" a qualquer momento que quisermos. É útil quando temos um pedaço de código que será escrito muitas vezes em nosso programa, por exemplo  
A seguinte sintaxe é usada para escrever uma função em JavaScript:

```javascript
function nomeDaFuncao(pam01, pam02, pam03) {
  pedaco de codigo aqui;
} // pam é uma abreviação para parâmetro
```

É comum usar **_"return"_**, uma palavra reservada que retorna algo quando a função é chamada em algum lugar.
Vamos ver um exemplo prático resolvendo a "Prática 4" por funções.

```javascript
function bmiCalculation(peso, altura) {
    return (peso / Math.pow(altura, 2)).toFixed(1);
}

function verifyBMI(imc) {
    if (imc < 18.5) {
        return (
            "A pessoa apresentou IMC = " +
            imc +
            ". Portanto, ela está baixo do peso ideal."
        );
    } else if (imc >= 18.5 && imc < 25) {
        return (
            "A pessoa apresentou IMC = " +
            imc +
            ". Portanto, ela está em seu peso ideal."
        );
    } else if (imc >= 25 && imc < 30) {
        return (
            "A pessoa apresentou IMC = " +
            imc +
            ". Portanto, ela está acima do peso ideal.."
        );
    } else if (imc >= 30 && imc < 40) {
        return (
            "A pessoa apresentou IMC = " +
            imc +
            ". Portanto, ela é considerada obesa."
        );
    } else {
        return (
            "A pessoa apresentou IMC = " +
            imc +
            ". Cuidado! A pessoa é considerada severamente obesa!"
        );
    }
}

(function main() {
    const peso = 140; // kg
    const altura = 1.75; // m

    let imc = bmiCalculation(peso, altura);
    console.log(verifyBMI(imc));
})();
```

Como podemos ver acima, criei duas funções: uma para calcular o IMC e outra para verificar o resultado do IMC. A função **_"main"_** foi criada para passar os parâmetros **"peso"** e **"altura"**, que são usados para calcular o IMC. Quando colocamos uma função entre os parênteses, isso significa que terá **prioridade** na execução. Quando colocamos os parênteses depois de fecharmos a função, ela chamará a função imediatamente. Dentro da função **_"main"_**, criei uma variável para armazenar o valor retornado pelo cálculo e chamei a função **"verifyBMI"** para mostrar o resultado da função na tela do usuário.  
As funções têm duas propriedades interessantes no JavaScript: elas podem ser tratadas como **objetos** e podem ser criadas sem um nome quando criamos uma função dentro de parênteses. A última propriedade é muito comum para isolar uma parte do código quando estamos usando o JavaScript para desenvolvimento web. Portanto, a função **_"main"_** pode ser substituída por:

```javascript
(function () {
    const peso = 140; // kg
    const altura = 1.75; // m

    let imc = bmiCalculation(peso, altura);
    console.log(verifyBMI(imc));
})();
```

Uma palavra reservada que é comumente utilizada dentro de funções (mas não só dentro delas) é o **_`this`_**. No caso das funções, essa palavra reservada serve como um contexto para a execução da função, isto é, ela pode substituir uma variável ou característica. No item seguinte (objetos) irei dar um exemplo mais concreto.

### **'Bora praticar!**

> Prática 6 - Crie uma função para checar se você é maior de idade. [Minha solução](/pt-br/js/praticando/07-p06.js)

> Prática 7 - Refaça a prática 5 utilizando funções. [Minha solução](/pt-br/js/praticando/08-p07.js)
