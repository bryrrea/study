/*Prática 1 - Faça um programa que calcule o valor gasto de combustível em uma viagem. Neste programa deve haver 3 variáveis (preço do combustível, valor médio de combustível gasto pelo carro (km/L) e a distância da viagem (em km)). Imprima no console o valor que será gasto em combustível para realizar a viagem.*/

const fuelPrice = 2.50;
const fuelSpent = 8;
let distance = 100;

let fuelSpentOnTrip = (distance * fuelPrice)/fuelSpent;

console.log(fuelSpentOnTrip.toFixed(2));