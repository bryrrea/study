/*Prática 2 - Faça um programa que calcule o valor gasto de combustível em uma viagem. Neste programa deve haver 5 variáveis (preço do etanol, preço da gasolina, tipo de combustível do carro, valor médio de combustível gasto pelo carro (km/L) e a distância da viagem (em km)). Imprima no console o valor que será gasto em combustível para realizar a viagem. */

const ethanol = 1.50;
const gas = 2.50;
const fuelSpent = 10;
const distance = 100;
const isGas = true;

if (isGas) {
    let valueSpent = (distance * gas) / fuelSpent;
    console.log(valueSpent);
} else {
    let valueSpent = (distance * ethanol) / fuelSpent;
    console.log(valueSpent);
}