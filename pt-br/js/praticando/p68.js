/*
    Prática 68:
        1. Crie uma variável chamada "superhero" que aponte para este objeto:
            {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95} }
        2. Como você criaria uma CÓPIA do Objeto "superhero" INCLUINDO CÓPIAS de "enemies" e "bestMovie"?
        3. Depois de criar uma cópia total, modifique o seguinte:
            - adicionar "Poison Ivy" ao array de "enemies" da cópia.
            - adicionar { ano: 2008 } ao objeto "bestMovie" da cópia
        4. Imprimir tanto o "superhero" quanto sua cópia para garantir que "enemies" e "bestMovie" do "superhero" NÃO foram modificados.
        Isto pode ser feito de muitas maneiras diferentes, mas também é bastante desafiador!
*/

const superhero = {
    name: "Bruce Wayne",
    alias: "Batman",
    universe: "DC",
    happy: false,
    enemies: ["Joker", "Catwoman", "Bane"],
    bestMovie: {
        title: "The Dark Knight",
        rating: 95,
    },
}

const superheroCopy = {
    ...superhero,
    enemies: [...superhero.enemies, "Poison Ivy"],
    bestMovie: {...superhero.bestMovie, year: 2008},
}

console.log("superhero Object:\n", superhero);
console.log("\n\n")
console.log("superhero copy Object:\n", superheroCopy);

/*
    Um objeto não é um elemento iterável. Portanto, se quisermos criar uma cópia perfeita e não apenas outra referência apontando para o mesmo espaço de memória, podemos espalhar os dados originais dentro do Objeto da cópia, e precisamos SUBSTITUIR os pares chave/valor que são arrays, Objetos, etc. Neste exercício, as chaves "enemies" e "bestMovie" são um array e um Objeto, respectivamente. Para criar uma cópia perfeita destes elementos que podem ser alterados SEM alterar o Objeto original, podemos acessar os elementos/entradas corretos para REESCREVER estas entradas, pois sabemos que um Objeto não pode ter duas chaves com o mesmo nome. 
*/