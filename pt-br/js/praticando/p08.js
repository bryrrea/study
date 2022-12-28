/* Prática 8 - Crie uma classe para representar carros. Os carros devem possuir as seguintes características: marca, cor, ano e gasto médio de combustível. Crie um método que, dada a distância de um deslocamento e o preço do combustível, retorne o valor gasto (em reais) para realizar o percurso. */ 

class Car {
    marca;
    cor;
    ano;
    distanciaPorL;

    constructor (marca, cor, ano, distanciaPorL) {
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
        this.distanciaPorL = distanciaPorL;
    }

    calcularGastoDeViagem(distancia, precoCombustivel) {
        return ((distancia / this.distanciaPorL) * precoCombustivel).toFixed(2);
    }
}

const gol = new Car("WG", "preto", 2015, 8);

console.log(gol.calcularGastoDeViagem(100, 5));