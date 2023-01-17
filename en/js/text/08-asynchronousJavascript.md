Para ler em pt-BR, [clique aqui](/pt-br/js/textos/08-javascriptAssincrono)

# 8. Asynchronous JavaScript

## 8.1. Definition

JavaScript is a programming language mainly used for web development, i.e, it runs in web browsers and its proposal is to be **event-oriented**. This means that the user needs to perform an action (click or touch) for JavaScript programs to do something. On the other hand, most of the programs in the real world are **asynchronous**, i.e., they stop their functionality while waiting for data or the occurrence of some event. This stop in functionality can be, many times, undesirable.
Having this in mind, JavaScript has asynchronous execution techniques, i.e, the functionality of the programs does not necessarily has to stop until the data or events are received or propagated.

## 8.2. Callback

Here is a concept that has been extensively used up until now, but we will only now have a formal definition. A callback is a function that is "called" within another function based on a condition or the occurrence of an asynchronous event.
An example of using callback functions are temporal functions, such as `setTimeout()` and `setInterval()`.

```javascript
setTimeout(checkForUpdates, 30000);
```

`setTimeout()` receives two parameters: a callback function and an amount of time (in ms). Let's imagine we are writing a program that checks for updates every 30 seconds. That is what the code above is doing, using a hypothetical callback function (`checkForUpdates()`) that is called asynchronously every 30 seconds to check for updates. However, `setTimeout()` only executes the callback function once and then forgets it.
It is also possible to use the `setInterval()` function:

```javascript
let updateIntervalId = setInterval(checkForUpdates, 30000);

function stopCheckingForUpdates() {
    clearInterval(updateIntervalId);
}
```

Just like `setTimeout()`, `setInterval()` receives two parameters: a callback function and a time value (in ms). In the code above, the hypothetical asynchronous function (`checkForUpdates()`) is called every 30 seconds and then called again every 30 seconds. To stop these successive calls, a function (`stopCheckingForUpdates()`) invokes the `clearInterval()` method (complementary to `setInterval()`). This method only works with scheduled functions, not with functions in execution.

---

As mentioned in the definition, programs written in JavaScript are generally created to run in web browsers, and their operation always depends on an action from the client side - such as a click or tap on the screen. Therefore, callback functions are very important in event-based programs. In the case of the web, callback functions work with specific pre-oriented events programmed by the developer. These functions are called **event listeners or handlers** and are usually called by the `addEventListener()` method.

```javascript
// Peça ao navegador da web para retornar um objeto que represente o elemento HTML
// <button> que corresponde a este seletor CSS
let okay = document.querySelector("#confirmUpdateDialog button.okay");
// Agora, registre uma função de retorno para ser invocada quando o usuário
// clica nesse botão.
okay.addEventListener("click", applyUpdate);
```

In the code above, the browser is asked to return an object representing the HTML `<button>` element that contains a specific id ("*#confirmUpdateDialog button.okay*"). After that, the `addEventListener()` module is called to execute a callback function (`applyUpdate()`) when the user clicks on that button. This function is registered as an event listener for the "*click*" event.
These are just a few examples of the uses of callback functions, but these functions are not limited to time or to receive information after a user action. There are many other applications, such as consuming APIs, for example.

## 8.3. Promise

### 8.3.1. Definition

Promises are native JavaScript objects that represent the completion or not of an asynchronous operation. A Promise can take on three states: **pending** (when it has not yet been resolved), **fulfilled** (when it has been positively completed) or **reject** (when it has been completed negatively).

### 8.3.2. Syntax

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, my friend!");

        reject("Not this time!");
    }, 1000);
});
```

A Promise always receives a function with two parameters: two callback functions, one for when the Promise takes on the fulfilled state and another for when the Promise takes on the reject state. In the code above, a new Promise was created from the `Promise()` constructor. The Promise was created to display a message on the screen that differs according to the status of the Promise, being resolved after 1 second.

### 8.3.3. What to do with a Promise?

If we try to display on the screen what is contained in the `myPromise` object from the previous code, we will get a "**pending**" as a return, because nothing is using the resolution of the Promise contained in the function.
The return of the Promise can be used. For this, we use the `.then` and `.catch` methods. The `.then` method receives two functions as a parameter: a **success handler** function (which deals with the success of a resolved Promise) and a **failure handler** function (which deals with the failure of a resolved Promise). This method will also return a Promise and, therefore, several `.then` methods can be chained.
The `catch` method is used to represent the negative completion of a Promise. It only receives a function as a parameter, called a `failure handler`. It presents the reason for the failure.
Another method that can also be used is `finally`. This method is called regardless of the result of the Promise. It only receives a function as a parameter, called a **finally handler**.
These three methods can be chained in a single Promise. This is very useful because the programmer can deal with all the possible responses of a Promise.

```javascript
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello, my friend!");
    }, 2000);
})

myPromise
    .then(message => message.toUpperCase())
    .then(message => console.log(message))
    .catch(error => console.log(error))
    .finally(() => console.log("Finally!"))
```

### 8.3.4. **Let's practice!**  

- Practice 52: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds. Show the Promise while it's pending. Next, print out "Program in progress..." and, finally, print out "Program completed" when the Promise completes after 3 seconds. [Solution](/en/js/practicing/p52.js)

- Practice 53: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds and rejects after 2 seconds. Show the Promise while it's pending. Next, print out "Program in progress..." and, finally, print out "Program completed" if the Promise fulfills or "Program failure" if the Promise rejects. [Solution](/en/js/practicing/p53.js)

- Practice 54: Print out "Program Started" at the start of your code. Then, create a Promise that resolves after 3 seconds. Show the Promise while it's pending. Next, print out "Program in progress...". After, print out "Step 1 completed!" when the firs Promise fulfills. Make the first Promise return a new Promise that will fulfill after 3 seconds with the message "Step 2 completed!". Finally, print out the message from the second Promise after it fulfills. [Solution](/en/js/practicing/p54.js)

- Practice 55:
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 5 seconds with the value {data: "Hello, friend", error: null}
    3. Print out the Promise while it's pending
    4. Print out "Program in progress..."
    5. Create a first Promise chain using the Promise above and print out the resolved value whe the first Promise fulfills
    6. Make the first Promise return another Promise that will fulfills after 2 seconds with the message "First Promise chain complete!"
    7. Print out the message from the above Promise after it fulfills
    8. Create a second Promise chain using the Promise above and print out the resolved value when the second Promise fulfills
    9. Make this second Promise return another Promise that will fulfill after 10 seconds with the message "Second Promise chain completed!"
    10. Print out the message from the above Promise after it fulfills [Solution](/en/js/practicing/p55.js)

- Practice 56: Create a Promise that resolver with the number 10 after 3 seconds. Next, create another Promise that resolves withe the number 20 after 5 seconds. How can we compute the sum of these two resolved values after both promises successfully fulfill? [Solution](/en/js/practicing/p56.js)

## 8.4. `async`/`await`

### 8.4.1. Definition and background

These two keywords were added with ES2017 to simplify working with **Promises**. One of the biggest problems with using the original `Promise()` constructor and **callbacks** is the amount of nested `.then()` and/or callback functions, as this makes reading and maintaining the code much more difficult.
The use of `async`/`await` greatly simplifies the reading and maintenance of the code, as asynchronous code ends up written more clearly and synchronously - looking like writing synchronous code, rather than looking like a program with synchronous code. However, there is a basic rule for implementing `async`/`await`:

> **The use of an `await` must always be linked to an asynchronous function, i.e., functions that explicitly use the reserved word `async`.**

This implies an error if `await` is used in conjunction with functions or other parts of the program that are not executed from an asynchronous function. The function can be written in any form - arrow function, reserved word `function`, etc. -, but **always** must contain the word `async` in its declaration.
The return of an asynchronous function will be a Promise, whether or not the constructor `Promise()` is explicitly used in the function body. So it can be said that this makes it easier for code to be **Promise-based**.

### 8.4.2. Syntax

```javascript
const anyFunction = async () => {
    const anyVariable = await code here;

    return anyVariable;
}

async function anyFunction() {
    const anyVariable = await code here;

    return anyVariable;
}
```

### 8.4.3. Exception handling

Asynchronous operations can cause various kinds of errors in code execution. To avoid or try to understand these errors, it is important to have something to help control execution at important points in the program. In Promises we have the `reject` parameter in the `Promise()` constructor, and we have the `catch()` method nested with the `then()` method to find and display the error - if there is an error.
With `async`/`await` it is even simpler, because we just put the block of code inside a `try...catch` statement, as is normally done in every JS program to determine critical checkpoints within the program to locate possible execution errors.

```javascript
const anyFunction = async () => {
    try {
        const anyVariable = await code here;
        
        return anyVariable;
        } catch(error) {
            console.error(error);
        } 
}
```

In the example above I have created an asynchronous function that will **try** to perform some task stored in the `anyVariable` variable. This task will be asynchronous, because it is preceded by the `await` keyword. If there is an error while executing the task, the programmer or the user will be told about it.

### 8.4.4. Practical example

Let's see an example of using `async`/`await`. I'll create a function to request data about 3 Pokémons while consuming the "PokeAPI".

```javascript
import fetch from "node-fetch";

function getPokemonURL(pokemonNumber) {
    return `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
}

const getPokemonData = async () => {    
    const pokemonData1 = fetch(getPokemonURL(1));
    const pokemonData2 = fetch(getPokemonURL(2));
    const pokemonData24 = fetch(getPokemonURL(24));

    const pokemonsDataArray = await Promise.all([
        pokemonData1,
        pokemonData2,
        pokemonData24
    ]);

    for(let pokemonsData of pokemonsDataArray) {
        console.log(pokemonsData);
    }
}

getPokemonData();
```

A function was created to automate the URL of the Pokémon from which we want to get the data. The user must enter the number of the Pokémon he wants to pull the data from. Then an asynchronous function was created that pulls the data from 3 Pokémon. I used the `node-fetch` module to make the requests. I will not explain now how it works, but at some point it will be explained. At this point, just keep in mind that a Promise is returned from the three `fetch` calls. Thus, I used `Promise.all()` with an `await` to ensure that all Promises would be resolved **before** printing each Pokémon's data separately to the screen via a `for...of` loop.

> **Keep in mind that `await` behaves as if it "pauses" the function until its line is resolved!**

### 8.4.5. **Let's practice!**

- Practice 61:
    1. Create a function called "fetchPokemon" that returns a Promise that resolves with the value `{data: {name: "Pikachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    3. Create an async function that uses await to wait for the data to comer back from "fetchPokemon" then log out the data
    4. Call the async function created
    5. Log out "Program complete!"
    6. Change "fetchPokemon" to reject after 2 seconds instead with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?

    [Solution](/en/js/practicing/p61.js)

- Practice 62:
    1. Create a function called "fetchUser" that returns a Promise that resolves with the value `{data: {user: "Monkey", admin: true} } after 3 seconds
    2. Create a function called "login" that takes an Object as an argument. If the Object has a property called admin with a value of true, then log out "Successfully logged in!", otherwise log out "Failed to log in, please try again."
    3. Print out "Program starting..."
    4. Create an async function that uses await to wait for the data to comes back from "fetchUser"
    5. Pass the user that comes back from "fetchUser" to the login function you created
    6. Call the async function you created
    7. Log out "Program complete!"

    [Solution](/en/js/practicing/p62.js)

- Practice 63:
    1. Create a function called "fetchFast" that returns a Promise that resolves with the String "Fast Done!" after 2 seconds
    2. Create a function called "fetchSlow" that returns a Promise that resolves with the String "Slow Done!" after 6 seconds
    3. Print out "Program starting..."
    4. Create an async function that uses await to wait for the data to comes back from "fetchFast" then log out the data. Then use await to wait for the data do come back from "fetchSlow" and log it out right after.
    5. Call the async function you created
    6. Log out "Program Complete!"
    7. How long does this take and why?
    8. How could you speed it up?

    [Solution](/en/js/practicing/p63.js)

- Practice 64:
    1. Create a function called "goGetCandies" which will return a Promise Object that resolves to { candy: "sour keys", quantity: 10 } after 2 seconds
    2. Create a function called "sellCandies" that will take a candy Object and return a Number that is .25 * quantity. This will be how much (in cents) we get for our candies. However, make this function take 3 seconds to do this math
    3. Create an async function that uses await to:
        a. Get the candy Object from goGetCandies()
        b. Passes it to "sellCandies" and waits for the response
        c. Prints out how much money we made from our sale

    4. Do the same steps as #3, but with vanilla Promises:
        Q1: Which of these 2 methods do you prefer?
        Q2: Which of these 2 methods is easier to read?

    [Solution](/en/js/practicing/p64.js)
