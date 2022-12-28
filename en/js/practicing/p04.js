/* Practice 4 - Create an algorithm that calculates a person's BMI (Body Mass Index) and returns what spectrum that person is on. If the BMI is less than 18.5, the person is said to be underweight; if the BMI is between 18.5 and 25, the person is at their normal weight; if the BMI is between 25 and 30, the person is overweight; if the BMI is between 30 and 40, the person is considered obese, and if the BMI is over 40, the person is severely obese. */

const weight = 140; // kg
const height = 1.75; // m

let bmi = (weight/Math.pow(height, 2)).toFixed(1);

if (bmi < 18.5) {
    console.log("The person has BMI = " + bmi + ". Therefore, he/she is under the ideal weight.");
} else if (bmi >= 18.5 && bmi < 25) {
    console.log("The person has BMI = " + bmi + ". Therefore, he/she is at the ideal weight.");
} else if (bmi >= 25 && bmi < 30) {
    console.log("The person has BMI = " + bmi + ". Therefore, he/she is overweight.");
} else if (bmi >= 30 && bmi < 40) {
    console.log("The person has BMI = " + bmi + ". Therefore, he/she is considered obese.");
} else {
    console.log("The person has BMI = " + bmi + ". Beware! The person is considered to be severely obese!");
}