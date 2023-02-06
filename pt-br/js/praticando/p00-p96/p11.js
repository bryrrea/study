/* Prática 11: Crie um programa que percorra uma lista de números para retornar apenas os números pares desta lista. */

/* Decidi criar uma função para gerar um array com 10 números aleatórios entre dois números definidos pelo usuário. */

let listaDeNumeros = [];
function criandoNumerosAleatorios(n1, n2) {
    for (i=0; i<10; i++) {
        numero = Math.floor(Math.random() * (n2 - n1 + 1)) + n1; // "floor" arredondará o número aleatório para o menor número inteiro, pois a função "random" gera apenas números entre zero e um (um excluído). O n2+1 inclui o n2 no conjunto de números aleatórios; +n1 garante que a faixa de números aleatórios será entre n1 e n2, e não entre 0 e 10; n2-n1+1 é para verificar quantos inteiros haverão entre n1 e n2. Por exemplo, For example, if n1=10 and n2=20, 20-10+1=11, i.e., we have 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 and 20.
        listaDeNumeros[i] = numero
    } 
    return listaDeNumeros;
}

function verificarNumerosPar () {
    lista = criandoNumerosAleatorios(1, 1000);
    console.log(`Lista de números: ${lista}`);

    let soma = 0;
    for (i=0; i<lista.length; i++) {
        if (lista[i] % 2 === 0) {
            soma++
            console.log(`${lista[i]} é par.`);
        } else {
            console.log(`${lista[i]} é ímpar.`);
        }
    }
    console.log(`A lista contém ${soma} números pares.`)
}

verificarNumerosPar();
