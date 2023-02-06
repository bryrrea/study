/*
    Practice 64:
        1. Create a function called "goGetCandies" which will return a Promise Object that resolves to { candy: "sour keys", quantity: 10 } after 2 seconds
        2. Create a function called "sellCandies" that will take a candy Object and return a Number that is .25 * quantity. This will be how much (in cents) we get for our candies. However, make this function take 3 seconds to do this math
        3. Create an async function that uses await to:
            a. Get the candy Object from goGetCandies()
            b. Passes it to "sellCandies" and waits for the response
            c. Prints out how much money we made from our sale

        4. Do the same steps as #3, but with vanilla Promises:
            Q1: Which of these 2 methods do you prefer?
            Q2: Which of these 2 methods is easier to read?
*/

function goGetCandies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "sour keys", quantity: 10 });
        }, 2000);
    })
}

function sellCandies(candyObject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(.25 * candyObject.quantity);
        }, 3000)
    })
}

const start = performance.now();

async function howMuchMoneyMade() {
    const candyObject = await goGetCandies();

    const moneyMade = await sellCandies(candyObject);
    console.log(`\nMoney received: $ ${moneyMade.toFixed(2)}`);

    const end = performance.now();
    console.log(`\nRuntime: ${((end - start)/1000).toFixed(1)} s.`);
}

howMuchMoneyMade();

// const candyObject = goGetCandies();

// candyObject
//     .then((candiesObj) => {
//         const moneyMade = sellCandies(candiesObj);
        
//         console.log(moneyMade);

//         moneyMade.then((cashReceived) => {
//             console.log(`\nMoney received: $ ${cashReceived.toFixed(2)}`);

//             const end = performance.now();
//             console.log(`\nRuntime execution: ${((end - start) / 1000).toFixed(1)} s.`);
//         })
//     })

/*
    The async function and the vanilla promise took the same runtime execution (~5 s). However, it was easier for me to work with the async function, which is more readable too.
*/