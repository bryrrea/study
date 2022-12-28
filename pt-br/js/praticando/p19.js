/*
Prática 19 - Crie um *array* chamado booleans e que receba `[true, true, false, true, false, false]`. Utilize o método `map()` para percorrer o *array* e uma função que retorne um número qualquer quando a posição for `true` e zero quando for `false`. No final, mostre os dois *arrays*.
*/

const booleans = [true, true, false, true, false, false];

const randomNumber = (n1, n2) => Math.floor(Math.random() * (n2 - n1 + 1)) + n1;

const checkingBooleans = (bool) => {
    number = randomNumber(1, 1000);

    if (bool === true) {
        return number;
    }

    return 0;
};

const mappingBooleans = booleans.map(checkingBooleans);

console.log(booleans);
console.log(mappingBooleans);
