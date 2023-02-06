/*
    Prática 97:

        1. Crie uma nova pasta chamada "warmup"
        2. Dentro de "warmup" crie 2 arquivos:
            - main.js
            - utils.js
        3. Dentro de utils.js crie uma função chamada "capsLock" que receba um único parâmetro chamado "string" e RETORNE "string", mas em maiúsculas
        4. Exporte "capsLock" como uma exportação NOMEADA de utils.js
        5. Importe "capsLock" dentro de main.js e chame-a com qualquer string como argumento, em seguida, imprima o resultado. Execute main.js usando o Node.
        DICA: Certifique-se de criar um arquivo package.json dentro de "warmup" com isto dentro: { "type": "module" }
*/

const capsLock = (string) => {
    return string.toUpperCase();
}

export { capsLock };