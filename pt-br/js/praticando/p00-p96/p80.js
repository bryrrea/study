/*
    Prática 80:
        1. Crie uma variável chamada "points" que aponte para o Array: [3, 4, 1, 0, 1, 5, 6]
        2. Crie um loop que percorra "points" e utilize uma declaração switch dentro do loop com os casos:
            - 0-2: imprima "Good try!"
            - 3-5: imprima "Very well done!"
            - Caso contrário, imprima "Wow, shooting for the moon!"
        3. Rode o código e certifique-se que as mensagens corretas aparecem
*/

const points = [3, 4, 1, 0, 1, 5, 6];

for (const point of points) {
    switch (point) {
        case 0:
        case 1:
        case 2: {
            console.log("Good try!");
            break;
        }
        case 3:
        case 4:
        case 5: {
            console.log("Very well done!");
            break;
        }
        default: {
            console.log("Wow, shooting for moon!");
            break;
        }
    }
}