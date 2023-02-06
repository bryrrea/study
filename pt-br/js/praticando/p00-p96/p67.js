/*
    Prática 67:
        1. Criar uma variável chamada "animal" que aponte para este Objeto:
            { name: "Koala", kingdom: "Australia", cute: true,
            friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }
        2. Criar uma variável chamada "koala" que aponte para uma cópia de "animal" usando o operador de propagação para Objetos, mas acrescente a seguindo entrada também: "tail": false,
        3. Imprimir "animal" e "koala".
        4. Mude "cute" para ser "false" dentro de "animal". Imprimir ambos novamente e observe a mudança. Isso faz sentido?
        5. Adicionar uma propriedade "cute" inicializada para ser "false" dentro do Objeto "kangaroo", dentro do array "friends" em "animal".  Imprima novamente tanto "animal" quanto "koala" e observe a mudança. Isto faz sentido?
*/

const animal = {
    name: "Koala",
    kingdom: "Australia",
    cute: true,
    friends: [{
        name: "Kangaroo",
        kingdom: "Australia",
    }],
}

const koala = {...animal, tail: false}

// console.log(animal);
// console.log(koala);

animal.cute = false;

// console.log("\n", animal);
// console.log(koala);

animal.friends[0].cute = false;

console.log("\n", animal);
console.log(koala);