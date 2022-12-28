/* Prática 10: Crie um programa que calcule a tabuada de um número. */

const numero = 5;
let multiplos = [];

for (i = 1; i<11; i++) {
    multiplos[i] = numero*i
    console.log(`\n ${numero} x ${i} = ${multiplos[i]} \n`);
}
