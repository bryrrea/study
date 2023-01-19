Para ler em pt-BR, [clique aqui](/pt-br/js/textos/13-generator.md)

# 13. Generator function

## 13.1. Definition

A **generator function** is a function that could return many values over time, being paused and resumed as many times you want. An iterator Object is returned each time the generator function is called, and this iterator controls the generator's execution.

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
But the above code looks a lot like synchronous code. Therefore, it is not the best way to apply a generator function, because a generator function is very useful when we want to work with asynchronous code.

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

The above code is much more asynchronous than the previous one. I created a generator Object (`evens`) that returns an Object with two entries (`{ value: value, done: true or false}`). The `next()` method is called on the iterator (`evens`) to resume the generator function. Then the generator function stops until we have a `next()` method to resume the function again. It repeats until we have a `return` statement in the function or until it reaches the end of the function. In the above example, we don't have a `return` statement, so the generator function ends when `n` is zero.

## 13.4. **Let's practice!**

-   Practice 81:

    1. Create a generator function called "countTo10" that will yield the numbers 0-10 (inclusive) then stop.
    2. Create the generator object by calling the generator function and iterate through the generator using a for...of loop.
       [Solution](/en/js/practicing/p81.js)

-   Practice 82:

    1. Create a generator function called "randomNumber" that will generate a new random number infinitely
    2. Use a loop to generate 10 random numbers using the generator Object you get from calling "randomNumber"
       [Solution](/en/js/practicing/p82.js)

-   Practice 83:

    1. Create a generator function called "randomAmountFromRange" which has 3 parameters: amount, min, and max
    2. This function will generate the amount of random numbers provided as an argument, between the min and max (inclusive), Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19
    3. Create a for...of loop that will loop through the following generator objects to test it: - randomAmountFromRange(3, 10, 20) - randomAmountFromRange(5, 100, 200) - randomAmountFromRange(10, 1000, 2000)
       [Solution](/en/js/practicing/p83.js)

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
       [Solution](/en/js/practicing/p84.js)
