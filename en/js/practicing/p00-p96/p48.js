/*
    Practice 48 - Create a variable called "numbers" that points to the following array: [10, 20, 40, 50, 20, 100]. Use a for-of loop to print out each number squared.
*/

const numbers = [10, 20, 40, 50, 20, 100];

for (const number of numbers) {
    console.log(Math.pow(number, 2));
}
// Output
// 100
// 400
// 1600
// 2500
// 400
// 10000
