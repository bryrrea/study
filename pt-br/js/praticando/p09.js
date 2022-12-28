/* Prática 9 - Crie uma classe para representar pessoas com os seguintes atributos: nome, peso e altura. Crie uma função para calcular o IMC dessas pessoas e que diga quais precisam ter maiores cuidados em seu estilo de vida. */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        let imc = (this.peso / (this.altura * this.altura)).toFixed(2);

        return imc;
    }

    classificarIMC(imc) {
        imc = this.calcularIMC();
        if (imc < 18.5) {
            return (console.log(`${this.nome} está abaixo do peso ideal, pois apresenta IMC ${imc}.`));
        } else if (imc >= 18.5 && imc < 25) {
            return (console.log(`${this.nome} está dentro do peso ideal, pois apresenta IMC ${imc}.`));
        } else if (imc >= 25 && imc < 35) {
            return (console.log(`${this.nome} está no quadro de "obesidade I", pois apresenta IMC ${imc}.`));
        } else if (imc >= 35 && imc < 40) {
            return (console.log(`${this.nome} está no quadro de "obesidade II", pois apresenta IMC ${imc}.`));
        } else {
            return (console.log(`Cuidado! ${this.nome} está no quadro de "obesidade III" (obesidade mórbida), pois apresenta IMC ${imc}.`));
        }
    }
}

p01 = new Pessoa("Tiago", 140, 1.75);
p02 = new Pessoa("Ana", 60, 1.85);

p01.calcularIMC();
p02.calcularIMC()
p01.classificarIMC();
p02.classificarIMC();

