Para ler em pt-BR, [clique aqui](/pt-br/js/textos/13-generator.md)

# 13. Generator function

## 13.1. Definition

A **generator function** is a function that could return many values over time, being paused and resumed as many times you want. An iterator Object is returned each time the generator function is called, and this iterator controls the generator's execution through the key/value pair `done`, which is a boolean entry that assumes `true` or `false`.

## 13.2. Syntax

```javascript
function* anyName() {
    yield [value / code];
}
```

A `*` is used to show that a generator function is being created. The `yield` keyword is used to control the calling/returning of the function.

## 13.3. How does it work?

The function starts paused when we called it. To return the value or functionality, we use `next()`, a method used with generator functions to return the next value or functionality of the function. Let's see an example:

```javascript
function* evenNumbers(number, n) {
    while (n > 0) {
        if (number % 2 === 0) {
            yield number;
            n--;
        }

        number++;
    }
}

const evenNumbersArray = Array.from(evenNumbers(99, 10));
console.log(evenNumbersArray);
```

The above generator function takes two numbers as parameter: the first is any number you want to check, and the second is to show the existing `n` even numbers from the `number` parameter. As long as the parameter `n` is greater than zero, the function will return the number if it is an even number and 1 is subtracted from `n` and we increment `number` by one. So I created an array using the `from()` method of the `Array` constructor to return an array of even numbers. The output of the example above - using `number = 99` and `n = 10` - will be the following array: `[ 100, 102, 104, 106, 108, 110, 112, 114, 116, 118 ]`. Thus, the function returned all 10 even numbers after the number 99.

```javascript
function* evenNumbers(number, n) {
    while (n > 0) {
        if (number % 2 === 0) {
            yield number;
            n--;
        }

        number++;
    }
}

const evens = evenNumbers(99, 10);
const evenNumbersArray = [];
let nextNumber = evens.next();

while (nextNumber.done === false) {
    evenNumbersArray.push(nextNumber.value);
    nextNumber = evens.next();
}

console.log(evenNumbersArray);
```

The above code looks much more "asynchronous" than the previous one, but it's not. I created a generator Object (`evens`) that returns an Object with two entries (`{ value: value, done: true or false}`). The `next()` method is called on the iterator (`evens`) to resume the generator function. Then the generator function stops until we have a `next()` method to resume the function again. It repeats until we have a `return` statement in the function or until it reaches the end of the function. In the above example, we don't have a `return` statement, so the generator function ends when `n` is zero.
Next, let's practice a little with "regular" generator functions. After, let's see what can be done to turn a "regular" generator in an **async** generator.

## 13.4. **Let's practice!**

-   Practice 81:

    1. Create a generator function called "countTo10" that will yield the numbers 0-10 (inclusive) then stop.
    2. Create the generator object by calling the generator function and iterate through the generator using a for...of loop.

-   Practice 82:

    1. Create a generator function called "randomNumber" that will generate a new random number infinitely
    2. Use a loop to generate 10 random numbers using the generator Object you get from calling "randomNumber"

-   Practice 83:

    1. Create a generator function called "randomAmountFromRange" which has 3 parameters: amount, min, and max
    2. This function will generate the amount of random numbers provided as an argument, between the min and max (inclusive), Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Create a for...of loop that will loop through the following generator objects to test it: - randomAmountFromRange(3, 10, 20) - randomAmountFromRange(5, 100, 200) - randomAmountFromRange(10, 1000, 2000)

-   Practice 84:
    1. Create a generator function called "getRandomNumber" that generates a random number between 1-10 (inclusive)
       exactly 5 times
    2. Create another generator function called "groceryList". Inside of "groceryList", create an variable called
       "groceries" that points at: ["Avocado", "Cookie", "Milk", "Soup", "Soda"]. The generator will yield a random grocery from "groceries" and also remove that grocery item from the list of "groceries",
       Eg: const groceries = groceryList();
       groceries.next() => "Cookie"
       groceries.next() => "Soup"
    3. Create 2 generator Objects by calling each of the 2 generator functions above
    4. Create a regular for loop that will loop 5 times and calls .next() on each of the generator Objects ^ to print out a random number followed by a random grocery:
       Eg: 5 Avocado
       10 Soup

**You can find practices' solutions [here](/README.md)**

## 13.5. Async generators

We have seen that "regular" generators can be useful in various situations. But then the question arises: what if we want to use a `Promise` inside a generator function? Is that possible? If so, is there a way to turn this generator function into an asynchronous function? The answer is **yes**.

### 13.5.1. How to use

```javascript
const newFunction = function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
};

const generatorObject = newFunction();
generatorObject.next().value.then((value) => console.log(value));
```

The code above creates a regular generator function that produces a `Promise` that returns the number "1" after 1 second for its resolution. As it is a generator function, it needs to be executed and stored in a variable to store the generator object(s). As we know, a generator object is composed of two key/value pairs: `value` and `done`. The first returns the result of the function, and the last returns a boolean to indicate if the object has been exhausted or not.
As we are dealing with a `Promise` in the function, this means that we will see a `Pending` status in the `value` input of the object, as it returns a **`Promise`**. Therefore, we need to use the `then()` method to declare what we want to do with the result of the `Promise` when it changes to the `Fulfilled` status - which, in this case, occurs after one second. In the case of the example function, the result of the `Promise` of the function will be printed on the screen.
Just like in regular generator functions, loops can be used to traverse the generator object.

```javascript
const newFunction = function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

for (const promises of generatorObject) {
    promises.then((value) => console.log(value));
}
```

A small change was made in the generator function: a new `Promise` was added to it to be resolved after 2 seconds, returning the number 2. To have the values printed on the screen, a `for...of` loop is needed to traverse the generator/iterator object and, from the `then()` method, an anonymous function is created to print the values on the screen.

### 13.5.2. Async generator function

Asynchronous generator functions can be declared the same as traditional asynchronous functions. To do this, we use the keywords `async` and `await`.

```javascript
const newFunction = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

for await (const promiseResult of generatorObject) {
    console.log(promiseResult);
}
```

As we have already observed in the study of asynchronous functions, working with these functions is much simpler than working with the syntax of `Promises`. In the example above, it was possible to use the `await` directly in the `for...of` to print the `value` entries of the two generator objects. It's as if the loop stops, waits for the resolution of the `Promises` and then prints the values. However, not all versions accept this syntax because they do not recognize that the `await` is being used in the result of an asynchronous function. Therefore, the most common syntax is the creation of a "regular" asynchronous function to use `await`, as shown below.

```javascript
const newFunction = async function* () {
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
    yield new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const generatorObject = newFunction();

const asyncFunction = async function () {
    for await (const promiseResult of generatorObject) {
        console.log(promiseResult);
    }
};

asyncFunction();
```

Here, the `await` waits for the resolution of the two `Promises` from the asynchronous generator function so that the generated results can be printed.

### 13.5.3. Funções geradoras assíncronas infinitas

As with regular generator functions, we can create infinite asynchronous generator functions.

```javascript
const newFunction = async function* () {
    let counter = 0;

    while (true) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(counter);
            }, 1000);
        });

        counter++;
    }
};

const generatorObject = newFunction();

const asyncFunction = async function () {
    for await (const promiseResult of generatorObject) {
        console.log(promiseResult);
    }
};

asyncFunction();
```

The `newFunction` function is an infinite function, as the loop used does not have a clear stop statement.

> It is worth noting that, just like "regular" generator functions, asynchronous generator functions also end if the return keyword is declared within the function.

### 13.5.4. Execution flux control

It is known that the `yield` keyword controls the execution flow of a generator function. It is as if it pauses and resumes the execution of the function.
An interesting thing about the execution flow control of a generator function - asynchronous or regular - is the use of the `yield*` expression. The asterisk after the keyword indicates that that section is delegating the execution flow to another generator, that is, to another `yield`.

```javascript
function* firstGenerator() {
    yield 1;
    yield 2;
}

function* secondGenerator() {
    yield* firstGenerator();
    yield 3;
}

const secondGeneratorObject = secondGenerator();

for (const value of secondGeneratorObject) {
    console.log(value);
}
```

In the example above, part of the generator function `secondGenerator()` transfers the execution flow to the generator of the function `firstGenerator()`. This makes only the second iterator/generator necessary, as it will "store" all the keys/values of both functions.

### 13.5.5. **Let's practice!**

-   Practice 85:

    1. Create an async Generator function that will yield a Promise that resolves after 1 second with a random
       number between 0-9 (integer and inclusive)
    2. Create the generator object by calling the function
    3. Use a for-await-of loop to loop through the generator indefinitely (ctrl-c to force exit the program)

-   Practice 86:

    1. Create an async Generator function that has a 50% chance of yielding either of the following Promises:
        - Resolve after 500ms with the value "Fast!"
        - Resolve after 3000ms with the value "Slow!"
    2. Create the generator object by calling the function
    3. Use a for-await-of loop to loop through the generator indefinitely (ctrl-c to force exit the program)

-   Practice 87:

    1. Create an async Generator function that has a single parameter called "sentence". The function will loop through
       "sentence" letter by letter, and for each letter it will yield a Promise that resolves after 100ms that:
        - If the letter is a vowel (a, e, i, o, u) then resolve with a "\*"
        - Otherwise resolve with the letter, but in uppercase
    2. Create the generator object by calling the function with a value of "Monkeys are the coolest animal!"
    3. Use a for-await-of loop to loop through the generator. There are MANY ways to check if a string has any of several letters

-   Practice 88:

    1. Create an async Generator function that has a single parameter called "time". This function will yield a Promise that resolves with the time taken after that many milliseconds. The time for each subsequent Promise will take TWICE as long.
    2. Create the generator object by calling the function with the value 100 to start.
    3. Use a for-await-of loop to loop through the generator indefinitely (ctrl-c to force exit the program)
    4. Example output if we started with:
       const timeGeneratorObject = timeGenerator(100)
       for await (const time of timeGeneratorObject)
        - If we print "time" each loop we'd get:
        - 100, 200, 400, 800, 1600, 3200 ... etc

**You can find practices' solutions [here](/README.md)**.
