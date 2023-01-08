Para ler em pt-BR, [clique aqui](/pt-br/js/textos/08-javascriptAssincrono)

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
