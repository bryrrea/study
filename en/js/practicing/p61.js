/*
    Practice 61:
        1. Create a function called "fetchPokemon" that returns a Promise that resolves with the value `{data: {name: "Pikachu", power: 20} } after 2 seconds
        2. Print out "Program starting..."
        3. Create an async function that uses await to wait for the data to comes back from "fetchPokemon" then log out the data
        4. Call the async function created
        5. Log out "Program complete!"
        6. Change "fetchPokemon" to reject after 2 seconds instead with a new Error Object with the message "Danger, danger!"
        7. How can you modify your async function to catch this error?
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
    We should use the `try...catch` statement to "catch" this error with an async function.
*/