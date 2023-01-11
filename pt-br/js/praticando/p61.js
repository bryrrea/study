/*
    Prática 61:
        1. Crie uma função chamada "fetchPokemon" que retorna uma *Promise* que se resolve com o valor `{dados: {name: "Pikachu", power: 20} } após 2 segundos
        2. Imprimir "Program starting...".
        3. Crie uma função assíncrona que aguarda que os dados retornem do "fetchPokemon" e depois imprima os dados.
        4. Chame a função de assíncrona criada
        5. Imprima "Program complete!"
        6. Mude "fetchPokemon" para rejeitar após 2 segundos com um novo Objeto de Erro com a mensagem "Danger, danger!"
        7. Como você pode modificar sua função assíncrona para capturar este erro?
*/

function fetchPokemon() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({
            //     data: {
            //         name: "Pikachu",
            //         power: 20,
            //     }
            // });

            reject(new Error("Danger, danger!"));
        }, 2000);
    })
}    

console.log("Program starting...");

const waitingData = async () => {
    try{
        const data = await fetchPokemon();
    
        console.log(data);
    } catch(error) {
        console.error(error);
    }
};

waitingData();

console.log("Program complete!");

/*
    Devemos utilizar a declaração `try...catch` para "pegar" o erro com a função assíncrona.
*/