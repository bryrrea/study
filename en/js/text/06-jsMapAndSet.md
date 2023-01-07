# 6. `Map()` and `Set()` Data Structures  

## 6.1. `Map()` Data Structure  

### 6.1.1 Definition  

`Map()` is a JavaScript data structure that allows us to store key-value pairs. It is similar to an object, but there are some differences such as:

- The keys of a `Map()` can be any value (including functions, objects, and primitive values), while the keys of an object can only be primitive values (strings or numbers).
- The order of the elements in a `Map()` is preserved, while the order of the elements in an object is determined by the JavaScript engine and may be different between different browsers.
- `Map()` has it own methods for adding, removing, and iterating over elements, while objects do not have these methods.  

### 6.1.2. Syntax  

```javascript
const map = new Map();
```  

As you can see, to create a new `Map()` the new operator is used. It is also possible to create a new `Map()` with sets of elements.  

```javascript
const map = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]);
```  

Since the keys in a `Map()` can be anything, string keys must be written between quotation marks. In "regular" objects, all property keys are strings and do not need to be written between quotation marks.  

### 6.1.3. Adding elements to a `Map()`  

The `set()` method is used to add new elements to a `Map()`, as shown in the syntax below:  

```javascript
map.set("key3", "value3");
```  

### 6.1.4. Accessing elements in a `Map()`  

To access the value of an element, we can use the `get()` method:  

```javascript
const value = map.get("key1");
```  

### 6.1.5. Removing elements from a `Map()`  

To remove an element from a Map, we can use the `delete()` method:  

```javascript
map.delete("key1");
```  

### 6.1.6. Iterating over a `Map()`  

To iterate over the elements of a Map, we can use the `keys()`, `values()`, and `entries()` methods, which return iterators for the keys, values, and entries (key-value pairs), respectively:  

```javascript
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

for (const key of map.keys()) {
    console.log(key);
} // key1, key2, key3

for (const value of map.values()) {
    console.log(value);
} // value1, value2, and value3

for (const entry of map.entries()) {
    console.log(entry);
} // ['key1', 'value1'], ['key2', 'value2'], and ['key3', 'value3']
```  

It is also possible to use the `forEach()` method. This method will be covered after.  

```javascript
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
map.set("key3", "value3");

for (const key of map.keys()) {
    console.log(chave);
} // key1, key2, key3

for (const value of map.values()) {
    console.log(valor);
} // value1, value2 e value3

for (const entry of map.entries()) {
    console.log(entrada);
} // ['key1', 'value1'], ['key2', 'value2'] e ['key3', 'value3']
```  

### 6.1.7. More used methods with `Map()`  

- `size`: returns the number of elements (key-value pairs) in a `Map()`.
- `clear()`: removes all elements from a `Map()`.
- `has()`: checks if a `Map()` has an element with the specified key. It returns `true` if the element exists and `false` otherwise.  

#### 6.1.7.1. **Let's practice!**

- Practice 38 - Create an Map called "mexico" with the following properties: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Next, print out the Map to the terminal. Next, change the "id" to be 25, and add "Honduras" to the list of neighbors to "mexico". Finally, print out "mexico" to the terminal again. [Solution](/en/js/practicing/p38.js)

- Practice 39 - Create a Mao called "myPet" with the following entries: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Print out "myPet" to the terminal and, after that, add a new entry (color -> "Black"), change "breed" to be "Beagle". Next, remove "Data" from the list of friends and print out "myPet" to the terminal again. Finally, add "Chip" to the list of friends and print out "myPet" to the terminal. [Solution](/en/js/practicing/p39.js)

- Practice 40 - Create the following Maps: - banana (name -> "banana", quantity -> 1, price -> 1.95) - apple (name -> "apple", quantity -> 1, price -> 1.45) - candy (name -> "candy", quantity -> 1, price -> 3.50) - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"]). After, print out the "store" Map to the terminal, and next print out all the products from "store" (only). Next, print out the 3rd product from "store" (only). Change the price of the "banana" to 1.75, and print out "banana" and "store". Finally, change the price of "candy" to 4.99 e print out "store" and "candy". [Solution](/en/js/practicing/p40.js)

- Practice 41 - Create a Map called "houseForSale" with the following entries: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Next: 1. Print out the Map; 2. Delete the entry which "built" is the key; 3. Change the age of the owner to 30; 4. Print out the maximum "offerPrice" value using reduce; 5. Add the property: salePrice -> 312000; 6. Print out "houseForSale" again. [Solution](/en/js/practicing/p41.js)

- Practice 42 - Create a 'Map' called 'myConsole' and:
    1. Assign to 'myConsole' the key 'log' with a value that is an arrow function that will have a parameter called 'message' and the function will only print the 'message';
    2. Call the function with a message. How does this activity differ between 'Map' and an object?
    3. Add the following key-value pairs: 1: 'number one', '1': 'string one'.
    4. Print each of the two values of the keys you just inserted. What is the difference of this activity applied to a 'Map' and an object?" [Solution](/en/js/practicing/p42.js)

- Practice 43 - Create an array called 'numbers' with the values [10, 20, 15, 30, 15, 20, 35, 60, 10]. Find the first repeated value in 'numbers' and print the index of the repeated value and the index where it was found first. [Solution](/en/js/practicing/p43.js)

---  

## 6.2. `Set()` Data Structure

### 6.1.1. Definition  

`Set()` is a JavaScript data structure that accepts only unique values, i.e., values cannot be repeated inside a `Set()`. It works with any primitive data type (or complex).  
Differently of objects an `Map()` structure, `Set()` don't work with key-value pair. However, a lot of methods used with those two structures can be used with `Set()` too.  

### 6.1.2. `Set` Syntax  

```javascript
const newSet = new Set();
```  

### 6.1.3. Adding values to a `Set()`  

We can add values to a set by two different ways:  

```javascript
newSet.add(value);
// OR
const newSet = new Set([data here]);
```  

If we use the `add()` method, we can add values (one by one) to the `Set()`. If we start the `Set()` constructor with values, we should put those values inside squared brackets, like an array (but it will not be an array). For instance:  

```javascript
const newSet = new Set([1, 2, 3, 4]);

console.log(newSet); //Set(4) { 1, 2, 3, 4 }
```  

As we can see in the code provided above, the output is similar to the `Map()` output, but only with values.  

### 6.1.4. Deleting values from a `Set()`  

We can delete one value or all values from a `Set()`.  

```javascript
newSet.delete(value);
newSet.clear(); // delete all values from a set
```  

### 6.1.5. Verifying values and the size of a `Set()`  

We can use the `has()` method, like in `Map()`.  

```javascript
newSet.has(1); // true
newSet.has(5); // false
```  

To verify the size of a `Set()`, we can use the `size` method, like we did with `Map()`.  

```javascript
console.log(newSet.size); // 4
```  

### 6.1.6. `keys()`, `values()` and `entries()` methods  

Those are three methods that are present with `Map()` too. However, they didn't work the same way in a `Set()`.  
Like it was said before, `Set()` don't have a key-value pair, since this data structure is compound only with values. With that in my mind, the `keys()` method will simply return the **value**, just like the `values()` method. But, how it works with `entries()`?  
For `entries()`, the returned value is and array with key and value, but in this case the key is the same as the value, returning `[value, value]`.  

```javascript
const newSet = new Set([1, 2, 3, 4, 5]);

console.log(newSet.keys()); // { 1, 2, 3, 4, 5 }
console.log(newSet.values()); // { 1, 2, 3, 4, 5 }
console.log(newSet.entries()); // { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }
```  

As we can see above, `keys()` and `values()` return an **iterable** object, while `entries()` returns an object with iterable arrays.  

### 6.1.7. Iterating over a `Set()`  

There are a few ways to iterating over a `Set()`. Let's see the most common ones.  

#### 6.1.7.1. `for...of` loop  

It is a special loop designed to iterate over iterable objects, such as arrays, strings, and `Sets()`. The `for...of` loop allows us to easily and concisely loop through each element of the `Set()`.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

for (const value of newSet) {
    console.log(value);
}
```  

The code snippet above runs over a `Set()` using the `for...of` loop to print each element from the `Set()`.  
The basic pros about using this way to iterate over a `Set()` are:  

- Easy to read and understand.
- Allows the use of `break` and `continue` statements to control the flow of the loop.  

In the other hand, the basic con about using this way to iterate over a `Set()` is:  

- It doesn't provide access to the index or key of the current element.  

#### 6.1.7.2. `forEach()` method  

This method is available on many iterable objects, including `Sets()`. It allows us to pass a callback function that will be called for each element of the `Set()`.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

newSet.forEach((number) => console.log(number));
```  

The code above does the same thing as the previous one, but using the `forEach()` method.  
The basic pros about using this method to iterate over a `Set()` are:  

- Easy to read and understand.
- Allows us to use a callback function to process each element.
- Provides access to the value of the current element (through the callback function's argument).  

In the other hand, the basic cons about using this method to iterate over a `Set()` are:  

- Does not provide access to the index or key of the current element.
- Does not allow us to use the `break` or `continue` statements to control the flow of the loop.  

#### 6.1.7.3. A regular `for` loop  

We can also use a regular `for` loop to iterate through a `Set()`, although this is slightly less concise than the `for-of` loop or the `forEach()` method.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

const iterableObject = newSet.values();

for (let index = 0; index < newSet.size; index++) {
    console.log(iterableObject.next().value);
}
```  

As we can see in the code above, it is a bit more complicated to iterate a `Set()` with a `for` loop. It was needed to create a variable to call the `values()` method to transform the `Set()` in an iterable object, which the `next()` method can be called to access the next value.  
The basic pro about using this way to iterate over a `Set()` are:  

- Provides access to the index of the current element (through the loop variable).  

In the other hand, the basic cons about using this way to iterate over a `Set()` are:  

- More verbose and harder to read than the for-of loop.
- Does not provide access to the value or key of the current element.
- Does not allow us to use the `break` or `continue` statements to control the flow of the loop.  

##### 13.7.3.1. `next()` method  

The `next()` method is a method available on iterator objects, such as those returned by the `keys()`, `values()`, and `entries()` methods of a `Set()`. It returns an object with two entries: **value** and **done**. The value field contains the next value of the iterator, and the done field indicates whether the iterator has reached the end or not.  

```javascript
const newSet = new Set([1, 2, 3, 4]);

const iterableObject = newSet.values();

console.log(iterableObject.next().value); // 1
console.log(iterableObject.next().value); // 2
console.log(iterableObject.next().value); // 3
console.log(iterableObject.next().value); // 4
console.log(iterableObject.next().value); // undefined
```  

Each time we call the `next()` method, the iterator object advances to the next value and returns an object with the current `value` and the `done` state. When the iterator reaches the end, the done field is set to `true` and the value field is set to `undefined`.  

#### 13.7.3.2. **Let's practice!**  

- Practice 44 - Create a variable called "numbers" that points to a new Set and add the following numbers to it: 1, 2, 3, 4, 5, 2, 3, 4. Print out "numbers" and take a look what is inside it. Repeat the same creating an array and see the differences. [Solution](/en/js/practicing/p44.js)

- Practice 45 - Create an array called "points" with the following values: [10, 20, 10, 30, 15, 15, 35, 60, 10]. How could we print out all the **UNIQUE** points inside "points"? [Solution](/en/js/practicing/p45.js)

- Practice 46 - Create an array called "numbers" with the values [10, 20, 15, 30, 15, 20, 35, 60, 10]. Find the first duplicated value in "numbers" and print it out to the terminal. [Solution](/en/js/practicing/p46.js)

- Practice 47 - Create an array called "values" with the following values:
        - {name -> "banana", quantity -> 1, price -> 1.95}
        - {name -> "apple", quantity -> 1, price -> 1.45}
        - {name -> "banana", quantity -> 10, price -> 0.05}
        - {name -> "candy", quantity -> 1, price -> 3.50}

    Next:
            1. Create a new array called "results" that starts empty.
            2. Create a Set called "duplicates".
            3. Add all objects in "items" to "results" in order, while skipping over any duplicate-named objects you encounter within "items".
            4. Print out "results". [Solution](/en/js/practicing/p47.js)
