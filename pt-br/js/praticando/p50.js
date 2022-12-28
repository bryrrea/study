/*
    Prática 50 - Crie um Set vazio chamado "names" com as seguintes strings: "Bilbo", "Hermione", "Spock", "Leia". Em seguida, crie um novo Set chamado "capsNames". Utilize um laço for-of para percorrer "names" e adicionar todos os nomes com todas as letras em maiúsculo em "capsNames". Imprima "capsNames" no terminal.
*/

const names = new Set(["Bilbo", "Hermione", "Spock", "Leia"]);

let capsNames = new Set();

for (const name of names) {
    capsNames.add(name.toUpperCase());
}
console.log(capsNames); // { 'BILBO', 'HERMIONE', 'SPOCK', 'LEIA' }
