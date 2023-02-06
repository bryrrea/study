/*
    Practice 63:
        1. Create a function called "fetchFast" that returns a Promise that resolves with the String "Fast Done!" after 2 seconds
        2. Create a function called "fetchSlow" that returns a Promise that resolves with the String "Slow Done!" after 6 seconds
        3. Print out "Program starting..."
        4. Create an async function that uses await to wait for the data to comes back from "fetchFast" then log out the data. Then use await to wait for the data do come back from "fetchSlow" and log it out right after.
        5. Call the async function you created
        6. Log out "Program Complete!"
        7. How long does this take and why?
        8. How could you speed it up?
*/

const startCode = performance.now();

function fetchFast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fast Done!");
        }, 2000);
    });
}

function fetchSlow() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow Done!");
        }, 6000);
    });
}

console.log("Program Starting...");

async function waitingData() {
    const fetchFastResult = fetchSlow();
    // console.log(fetchFastResult);
    
    const fetchSlowResult = fetchFast();
    // console.log(fetchSlowResult);

    const arrayWithPromise = await Promise.all([fetchFastResult, fetchSlowResult]);
    console.log(arrayWithPromise);
    // console.log(arrayWithPromise[1]);

    const endCode = performance.now();
    console.log(`\nTime to run the program: ${((endCode - startCode)/1000).toFixed(1)} s`);

    console.log("Program complete!");
}

waitingData();

/*
    The program took about 8 seconds to complete after using "await" in calling the two "fetch" functions.  This causes the asynchronous function to stop on the "fetchFast" function call line, which in turn stops the function until the Promise is resolved. The same happens for the "fetchSlow" function call.

    We can execute both functions without the use of "await", because the resolution of one is not tied to the resolution of the other. Thus, the ".all()" method of the Promise constructor can be used. Only this line needs to be asynchronous, so we call "await" to wait for both Promises to be resolved. An array with both fulfilled Promises is returned, and this array displays the elements in the order that the code was written - in our case, the first element is the fulfilled Promise from the "fetchFast" function and the second element is the fulfilled Promise from the "fetchSlow" function. It took about 6 seconds to finish the program with this approach.
*/