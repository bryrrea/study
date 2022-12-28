/*Practice 1 - Create a program that calculates the value of fuel spent on a trip. In this program there should be 3 variables (fuel price, average value of fuel spent by the car (km/L), and the distance of the trip (in km)). Print on the console the value of fuel that will be spent to make the trip.*/

const fuelPrice = 2.50;
const fuelSpent = 8;
let distance = 100;

let fuelSpentOnTrip = (distance * fuelPrice)/fuelSpent;

console.log(fuelSpentOnTrip.toFixed(2));