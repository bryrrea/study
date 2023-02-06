/* Prática 4 - Crie um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa e retorno em qual espectro essa pessoa se encontra. Se o IMC é menor que 18,5, diz-se que a pessoa está baixo do peso ideal; se o IMC está entre 18,5 e 25, a pessoa está em seu peso normal; se o IMC está entre 25 e 30, a pessoa está acima do peso; se o IMC está entre 30 e 40, a pessoa é considerada obesa, e se o IMC é acima de 40, a pessoa apresenta obesidade grave. */

const weight = 140; // kg
const height = 1.75; // m

let imc = (weight/Math.pow(height, 2)).toFixed(1);

if (imc < 18.5) {
    console.log("A pessoa apresentou IMC = " + imc + ". Portanto, ela está baixo do peso ideal.");
} else if (imc >= 18.5 && imc < 25) {
    console.log("A pessoa apresentou IMC = " + imc + ". Portanto, ela está dentro do peso ideal.");
} else if (imc >= 25 && imc < 30) {
    console.log("A pessoa apresentou IMC = " + imc + ". Portanto, ela está acima do peso ideal.");
} else if (imc >= 30 && imc < 40) {
    console.log("A pessoa apresentou IMC = " + imc + ". Portanto, ela é considerada obesa.");
} else {
    console.log("A pessoa apresentou IMC = " + imc + ". Cuidado! A pessoa é considerada no quadro de obesidade grave!");
}