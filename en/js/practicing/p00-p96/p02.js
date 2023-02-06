/*Practice 2 - Create a program that calculates the value of fuel spent on a trip. In this program there should be 5 variables (ethanol price, gasoline price, which fuel your car needs, average value of fuel spent by the car (km/L), and the distance of the trip (in km)). Print on the console the value of fuel that will be spent to make the trip. */

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