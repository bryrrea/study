/* Practice 10: create a program to calculate the multiplication table of a number. */

const number = 5;
let multiple = [];

for (i = 1; i<11; i++) {
    multiple[i] = number*i
    console.log(`\n ${number} x ${i} = ${multiple[i]} \n`);
}
