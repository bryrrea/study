/*
    Prática 99:

        1. Crie uma nova pasta chamada "exercise2"
        2. Dentro de "exercise2", crie 4 arquivos:
            - main.js
            - modules.js
            - moduleA.js
            - moduleB.js
        3. Dentro de moduleB.js, crie um Array chamado "topMovies": ["Spirited Away", "The Matrix", "Star Wars", "Zoolander"]. Exporte "topMovies" como uma exportação NAMED
        4. Dentro de moduleA.js, importe "topMovies" de moduleB.js. Em seguida, crie uma Função chamada "checkMovie" que tem um parâmetro de String chamado "movieName". Essa função retornará verdadeiro se o filme estiver em "topMovies", caso contrário, retornará falso. Exporte "checkMovie" como uma exportação NAMED
        5. Dentro de modules.js, importe "checkMovie" de moduleA.js e "topMovies" de moduleB.js. Em seguida, exporte-os ambos como exportações NAMED (Este arquivo importará e exportará as mesmas variáveis)
        6. Importe tanto "checkMovie" quanto "topMovies" em uma única linha dentro de main.js de modules.js. Chame "checkMovie" com nomes de filmes diferentes para garantir que funcione. Além disso, imprima "topMovies" para garantir que é o array correto. Execute main.js usando Node.
        DICA: Certifique-se de criar um arquivo package.json dentro de "exercise2" com isso dentro: { "type": "module" }
*/

const topMovies = ["Spirited Away", "The Matrix", "Star Wars", "Zoolander"];

export { topMovies };