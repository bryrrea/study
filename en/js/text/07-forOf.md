Leia em [PT-BR](/pt-br/js/textos/07-forOf.md)

# 7. `for-of` loop

## 7.1. Definition

The `for...of` loop is a loop that iterate over an iterable object or data structure, like arrays, strings, `Set()`, `Map()`, and so on. It is more concise and readable than a regular `for` loop or a `for...in` loop. It is important to notice that both loops **cannot change** the original iterable/Object!

## 7.2. Syntax

```javascript
for (const element of iterable) {
    // code here
}
```

## 7.3. The `for...in` loop and its difference about `for...of` loop

The `for...in` loop is a loop that runs over an Object (especially literal Objects) in JavaScript. This is really important to notice, because it is the main difference between the two loops: **the first one can run over an Object, which means that it will not run over an array or string, while the last one can iterate over iterable objects, which means that will not iterate over literal Objects!**  
Even having the `for...in` loop to access the properties of an Object, it is really common the use of `for...of` loop with Object methods that returns an iterable (commonly an array, like `keys()`, `values()` and `entries()` methods for literal Objects). Let's see an example of each one.

```javascript
const fruits = ["apple", "banana", "strawberry"];

for (const fruit of fruits) {
    console.log(fruit);
}
// apple
// banana
// strawberry
```

In the code above, we have an iterable (an array) and a `for...of` loop is used to iterate the array to print out each fruit in the terminal.

```javascript
const me = {
    name: "Bryan",
    qualification: "Biochemical Engineer",
    studying: "Web development",
};

for (const information in me) {
    console.log(`${information}: ${me[information]}`);
}
// name: Bryan
// qualification: Biochemical Engineer
// studying: web development
```

In the code above, a literal Object was created and a `for...in` loop is used to run over the Object properties to print out each key-value pair in the terminal.  
The main difference between `for...of`, `for...in` and regular `for` loops is that the last one have access to the indices of the objects, while the other two haven't.

## 7.4. **Let's practice!**

-   Practice 48 - Create a variable called "numbers" that points to the following array: [10, 20, 40, 50, 20, 100]. Use a for-of loop to print out each number squared.

-   Practice 49 - Create a variable called "ages" that points to the following array: [10, 42, 15, 22, 11, 74, 39, 2]. Next:

    1. Create an array called "results" that starts off empty.
    2. Use a for-of loop over "ages" and add an Object to "results" with and "age" key having the values of the "age" being looped over. Also, add a "name" key that is always "Dragon".
    3. Print out "results". The output should be an array of Objects.

-   Practice 50 - Create an empty Set called "names" with the following strings: "Bilbo", "Hermione", "Spock", "Leia". Next, create another empty Set called "capsNames". Use a for-of loop to loop over "names" and adds the capitalized version of each name to the "capsNames" Set. Finally, print out "capsNames".

-   Practice 51 - Create a Map called "backpack" and add the following entries:
    1 => {name: "Sword", value: 300}
    2 => {name: "Banana", value: 5}
    3 => {name: "Gold Nugget", value: 10000}
    4 => {name: "Pants", value: 100}
    Use a for-of loop to loop over "backpack" and print out the name and the value for each item in the following format: Name: $Value. Also, print out the total value of all items in the "backpack".

**You can find practices' solutions [here](/README.md)**.
