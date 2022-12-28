/* Practice 8 - Create a class to represent cars. The cars must have the following features: model, color, year, and average fuel cost. Create a function that, given the distance of a trip and the price of fuel, returns the amount spent (in $) to make the trip. */ 

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