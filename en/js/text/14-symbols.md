# 14. Symbols (`Symbols()`)

## 14.1. Definition

**Symbols** are a type of **primitive** data introduced in JavaScript in ES6. A symbol is unique and immutable, which implies that each symbol created points to a different space in memory.

## 14.2. Syntax

Although symbols are a primitive data type in JavaScript, they can only be created using a function.

```javascript
const newSymbol = Symbol();
```

The `Symbol()` takes one parameter, usually called **identifier**. As you can imagine, it serves to identify the symbol, and it's not uncommon to receive the same name as the variable that stores it.

```javascript
const newSymbol = Symbol("newSymbol");
```

## 14.3. How to use

As we know, Objects in JavaScript are properties that contain a key/value pair. We also know that the properties of an Object can be accessed if we know the key of the same. For example, if an Object has a property `name: "Rick"` and we use `objectName.name`, we will have access to the value of the property (`Rick`). However, if we use `Object.keys(objectName)` on an Object that contains symbols as the key of the property, the key of the symbol **does not appear**. This is excellent when creating an object in which we want some properties to remain "hidden." However, you can access symbols in an Object from the `Object.getOwnPropertySymbols(objectName)` method, which returns an Array with all the symbols in the Object.

```javascript
const obj = {
    [Symbol("first")]: 1,
    [Symbol("second")]: 2,
    [Symbol("third")]: 3,
};

console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(first), Symbol(second), Symbol(third) ]
```

We also know that Objects only accept Strings as keys. Even if we put a number, for example, it will be converted to String. One way to add a number as a key in an Object is to put it in square brackets. This is also applicable to symbols.

```javascript
const obj = {
    [1]: "one",
    [2]: "two",
    [3]: "three",
    [Symbol("newSymbol")]: "anything here",
};

for (const key of Object.keys(obj)) {
    console.log(key);
}

console.log(Object.getOwnPropertySymbols(obj));
```

The code above will print `1`, `2` and `3` - which are the keys of the created Object -, and the last line will print `Symbol(newSymbol)`.
Now, take a new look at the code above. If you paid minimal attention to the code, you saw that a `for...of` loop was used on an Object. As we know, Objects are not **originally iterable**. In the example above, it was possible to use the `for...of` loop because we used the `Object.keys()` module, and this returns an iterable. However, an Object can become iterable through the use of a `Symbol.iterator`.

```javascript
const obj = new Object();

obj.one = 1;
obj.two = 2;
obj.three = 3;

obj[Symbol.iterator] = function* () {
    yield* Object.entries(this);
};

for (const [key, value] of obj) {
    console.log(`${key}: ${value}`);
}

console.log(obj);
```

In the code above, a new Object was created from the `Object()` constructor and four properties were added: `one`, `two`, and `three` - which receive the values `1`, `2`, and `3`, respectively -, and a symbol - which receives as a value a constructor function that gives control of the flow to the Object in order to access its inputs. Next, I was able to use the `for...of` loop **directly** on the Object, as we have a `Symbol.iterator` in the same.

## 14.4. Well-known Symbols

Above, we saw an example of a "known symbol": the `Symbol.iterator`. This is able to turn an Object into an iterable. However, we have other "known symbols" that, like the `iterator`, are accessed as methods of the `Symbol` function.
There are various modules that can be used with the `Symbol` function. Therefore, I will leave [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) a link that can be consulted when necessary.

## 14.5. **Let's practice!**

-   Practice 89:

    1. Create a variable called "baboon" that points to a Symbol with a description of "Monkey"
    2. Create a variable called "gorilla" that points to a Symbol with a description of "Monkey" as well
    3. Print out the types of each of the symbols as well as their description property 4. Are the two symbols equivalent? (Equality check) Why or why not?
       [Solution](/en/js/practicing/p89.js)

-   Practice 90:

    1. Create a variable "movie" that points at this Object:
       { name: "Blade Runner", director: "Ridley Scott",
       year: 1982, rating: 89, genre: "Science Fiction" }
    2. Add two more properties to the "movie" Object:
       [Symbol("budget")]: 30
       [Symbol("boxOffice")]: 41.6
    3. Use a for-of loop to loop through all the entries inside "movie" and print out their key-value pairs:
       Eg: name => Blade Runner, director => Ridley Scott 4. How would you access and print out the symbols in "movie"?
       [Solution](/en/js/practicing/p90.js)

-   Practice 91:

    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
       rating: 4.6, genre: "Science Fiction", movie: true }
    2. Create a Symbol.iterator property on "book" that will allow you to loop over it using a for-of-loop that will give you back the key-value pairs each loop as a paired array (similar to a Map): ["name", "1984"] ["rating", 4.6]
    3. Test your loop with a for-of-loop to make sure it works
       [Solution](/en/js/practicing/p91.js)

-   Practice 92:

    1. Create a variable "book" that points at this Object:
       { name: "1984", author: "George Orwell", year: 1949,
       rating: 4.6, genre: "Science Fiction", movie: true }
    2. Create a Symbol.asyncIterator property on "book" that will allow you to loop over it using a for-await-of-loop that will give you back the key-value pairs each loop but delayed by 1 second each as a paired array (similar to a Map): ["name", "1984"] ["rating", 4.6]
    3. Test your loop with a for-await-of-loop to make sure it works
       [Solution](/en/js/practicing/p92.js)
