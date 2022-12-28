[Versão em PT-BR aqui!](/pt-br/js/textos/04-arrays.md)  

# Arrays in JavaScript  

## 10. Arrays  
An array is a collection of data. It can be written with several data types inside one array.  

```javascript
const array1 = [1, 2, "banana", false, 3];
```  

Arrays are really useful for storing a large amount of data inside a variable. However, each array element will point to a separate "box" in memory.  

```

                               +--------+
                               |    1   |
                               +--------+
                               +--------+
                               |    2   |
                               +--------+
| array1 |    ==========>      +--------+
                               |"banana"|
                               +--------+
                               +--------+
                               |  false |
                               +--------+
                               +--------+
                               |   3    |
                               +--------+
```  

Arrays are iterable, which means that we can go through each element of an array to do something with that element. So, arrays have many methods that work only for arrays.  

> Note that JavaScript handles strings like an array in which each letter is an element of that array (like many other programming languages)!  

```javascript
const numbers = [1, 3, 5, 7, 9];

for (number = 0; number < numbers.length; number++){
    console.log(numbers[number]);
}
```  

In the code above, I was iterating over an array called "numbers" to print out on the screen every number present in the array. As we can see, to access an element of the array, we need to "call" the array and, between square brackets, we set the position we want to access.  

> Note that JavaScript starts with index zero (like many other programming languages).  

As you can also see in the code above, using the method  `length` is common when we are working with arrays, since it allows us to increment or decrement the array in the future.  
Arrays have many methods that work only with it. Below, I'll list the five most commonly used methods.  

 a. length: returns the size of an array;
 b. shift(): removes and returns the first element of an array;
 c. unshift(): adds an element at the beginning of the array;
 d. pop(): removes and returns the last element of an array;
 e. push(): adds an element at the end of an array;  

We can read more about array methods [here](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array).  

##### **LET'S PRACTICE!**

 - Practice 12 - Write a function called "square", which will have a number as a parameter. This function should return the square of the number. After, write another function called "sumOfSquares", which will have two numbers as parameter. Use the "square" function inside the "sumOfSquares" function, and return back the sum of the both numbers square. [Solution](/en/js/practicing/13-p12.js)  

### 10.1. The `map` method  
The `map`() module is exclusively used in arrays. This module loops through an array and receives as a parameter a callback function that will modify or work with the data in the array. The `map`() returns a new array, keeping the original intact.  

> I should pay attention to the return, as every time `map`() is called it should return something!  

The function can be written with the syntax that uses the function keyword or with arrow functions. The function can also be written outside of `map`() and passed as an argument (which I personally find clearer). Below is an example based on my preference for writing the function separately from the `map`() module.  

```javascript
const timesFive = (number) => (number *= 5);

numbers = [1, 2, 3, 4, 5];

const arrayTimesFive = numbers.`map`(timesFive);
console.log(arrayTimesFive);
```  

In the first line, I wrote a function that receives a number as a parameter, and this number will be multiplied by 5. After, I created an array with five numbers. Then, I created a constant to use the `map`() method on the array I created earlier, passing the function I created as a parameter. The output will be a new array where all the elements of the original array were multiplied by 5.  


##### **LET'S PRACTICE!**

 - Practice 13 - Write a function that sums all elements of a number array. [Solution](/en/js/practicing/p13.js)

 - Practice 14 - Write a function that calculates the average of a student grade array (grades from 0 to 10). [Solution](/en/js/practicing/p14.js)

 - Practice 15 - Write a function that receives an array of strings and returns a new array with the strings in alphabetical order. [Solution](/en/js/practicing/p15.js)

 - Practice 16 - Write a function that receives an array of numbers and returns a new array with each element multiplied by 2. [Solution](/en/js/practicing/p16.js)

 - Practice 17 - Write a function that given an array of strings, returns an object with the count of occurrences of each string. For example, given the array ["a", "b", "a", "c", "b"], the function should return the object { a: 2, b: 2, c: 1 }. [Solution](/en/js/practicing/p17.js)

 - Practice 18 - Create an array with numbers from 25 to 30. Create a new array using the `map`() method and square each number. At the end, show the two arrays. [Solution](/en/js/practicing/p18.js)

 - Practice 19 - Create an array called booleans and that receives [true, true, false, true, false, false]. Use the `map`() method to loop through the array and a function that returns any number when the position is true and zero when it is false. At the end, show the two arrays. [Solution](/en/js/practicing/p19.js)

 - Practice 20 - Create an array called prices and that receives the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Create a new array using the `map`(/en/js/practicing/p13.js) method and round each number to the nearest integer. At the end, show the two arrays. [Solution](/en/js/practicing/p20.js)

 - Practice 21 - Create an array called items that receives ["light", "banana", "phone", "book", "mouse"]. Create a new array called plurals and create a function that, together with the map method, loops through the entire items array and adds an "s" at the end of each word. Print the two arrays. [Solution](/en/js/practicing/p21.js)

 - Practice 22 - Create an array called row with the values [10, 20, 30, 40, 50]. Create a new array called matrix from the use of map in the row array, returning each item in an array, resulting in an array with two dimensions. Print the two arrays on the screen. The answer should be [[10], [20], [30], [40], [50]]. [Solution](/en/js/practicing/p22.js)  

### 10.2. The `filter` method  
We have some methods to search arrays in JavaScript.  

|Method|How it works|
|`indexOf()`|We should give a parameter (a word, a number, whatever) to be searched on the array. It starts from left to right and returns the index location of the parameter provided. Otherwise, returns `-1`|
|`lastIndexOf()`|The same thing as `indexOf()`, but start running the array from the last element (right side)|
|`includes()`|Search for a specific element inside the array and returns `true` if it was found|
|`find()`|Also search for a specif element or condition inside the array. If true, returns the element. If false, returns `undefined`|
|`findIndex()`|The same thing as `find()`, but returns the index of the element if it was found. Otherwise, returns `-1`.|
|`findLastIndex()`|Same as `findIndex()`, but starts searching from right to left|  

However, we have a special method to search things inside an array: the `filter()` method. The `filter()` method is similar to the `find()`, `findIndex()`, and `findLastIndex()` methods in that it accepts a function to search for elements inside an array. However, the `filter()` method differs in that it returns a **new array** containing all the elements that match the search criteria, whereas the other methods return a single element or the index of the element.  

```javascript
const arrayWithNumbers = [1, 2, 3, 4, 5, 6];

const filteringEvenNumbers = arrayWithNumbers.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
})

console.log(arrayWithNumbers); // [ 1, 2, 3, 4, 5, 6 ]

console.log(filteringEvenNumbers); // [ 2, 4, 6]
```  

In this example, the `filter()` method is used to search for even numbers in the `arrayWithNumbers` array. The `filter()` method returns a new array containing all the even numbers found in the original array, whereas the other methods would return a single element or the index of the element.  


##### **LET'S PRACTICE!**

 - Practice 23 - Create an array called "practice" with numbers (10-20). Using filter, create a new array that keep the even numbers in practice. Later, print out both arrays. [Solution](/en/js/practicing/p23.js)

 - Practice 24 - Create an array called "countries" with the following entries: ["France", "South Africa", "Brazil", "United States", "Sweden"]. Filter over the array and keep only the countries that have a blank space in their name. Print out both arrays. [Solution](/en/js/practicing/p24.js)

 - Practice 25 - Create an array called "prices" with the following values: [1.23, 19.99, 85.2, 32.87, 8, 5.2]. Create an array called "lowPrices" and use filter to keep all the prices where the price plus a 15% tax is less than 10.00. Print out both arrays. [Solution](/en/js/practicing/p25.js)

 - Practice 26 - Create an array called "values": [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]. Create a new array called "hasTwos" that filters over values and keeps only the sub-arrays that have a 2 in them. Later, print out both arrays. [Solution](/en/js/practicing/p26.js)

 - Practice 27 - Create an array called "nums" with the following values: [10, 20, 30, 40, 50]. Create an array called "timesTwo" and, using map, multiply each number by two. Later, create an array called "over50" that filters "timesTwo" to keep only values over 50. Therefore, print out the three arrays. [Solution](/en/js/practicing/p27.js)  

### 10.3. The `reduce()` method  

The `reduce()` method is a bit more complicated than the previous two methods (`map()` and `filter()`), although it is used to process an array as well. First of all, this method accepts a function as a parameter. However, this function needs to have two parameters: a accumulator and a variable to represent each element of the array. Another important thing about reduce is that it needs one more parameter: an initializer to the accumulator. Let's see how the syntax works:  

```javascript
array.reduce((accumulator, arrayElement) => {
    //code here
}, initializer);
```  

The initializer will be the first assumed value to the accumulator, and it will be incremented by the next array element.  

```javascript
const numbersArray = [5, 10, 15, 20, 25, 30];

const sumOfNumbersArray = numbersArray.reduce((previousNumber, currentNumber) => {
    return previousNumber + currentNumber;
}, 0);

console.log(numbersArray); // [5, 10, 15, 20, 25, 30]
console.log(sumOfNumbersArray); // 105
```  

In the code above, I created an array with numbers and a variable to store the sum of the previous array. So I used the `.reduce()` method and passed an anonymous function with two parameters: `previousNumber` to accumulate the array numbers (starting from zero, value that I set as second parameter for `.reduce()`), and `currentNumber`, which will iterate over each element of the array.  
So, for the first iteration, `previousNumber = 0` and `currentNumber = 5`; for the second iteration, `previousNumber = 5` (0 + 5) and `currentNumber = 10`; the third iteration presents `previousNumber = 15` (5 + 10) and `currentNumber = 15`; the fourth iteration presents `previousNumber = 30` (15 + 15) and `currentNumber = 20`; the fifth presents `previousNumber = 50` and `currentNumber = 25`; the sixth presents `previousNumber = 75` and `currentNumber = 30`; finally, the last iteration presents `previousNumber = 105` and no `currentNumber`. So, the sum of the numbers on the array will be equals to `previousNumber` parameter after the last iteration.  

> Note that `reduce()` can be applied for array with strings too (the reasoning is the same), and this method will **always** need to return something. Otherwise, it returns `undefined`, which can cause errors on the execution.  

![](/src/jsReduce.jpg)  

So, we can state that the `reduce()` method returns to us a reduced form of the array without changing any elements from the original array.  


##### **LET'S PRACTICE!**  

 - Practice 28 - Create an array called "points" with the numbers 55-60 (inclusive). Then create a variable called "sum" using `reduce()` that sums up the points in "points". For last, print out "points" and "sum". [Solution](/en/js/practicing/p28.js)

 - Practice 29 - Create an array called "companies" of the following strings: `["apple", "tesla", "spacex", "amazon", "google"]`. Create a constant called "modded" that reduces the "companies" array to a string of the companies that do not start with the latter "a", separated by dashes. Print out both. [Solution](/en/js/practicing/p29.js)

 - Practice 30 - Create an array called "prices" with the following values: `[1.23, 19.99, 85.2, 32.87, 8, 5.2]`. Next, create a constant called "afterTax" that does a sum getting in mind that, if the price is greater than 6, add the price without tax; otherwise, add the price plus a tax of 20%. Finally, print ou both. [Solution](/en/js/practicing/p30.js)
 
 - Practice 31 - Create an array called "items" with `["light", "banana", "phone", "book", "mouse"]`. Next, create a new array called "caps", map over "items" and capitalize each item. After, create a constant called "concat" to reduce all strings in caps by concatenate them. Use a space to separate each item. Finally, print out "items", "caps" and "concat". (BONUS: try to do it all in one line either) [Solution](/en/js/practicing/p31.js)

 - Practice 32 - Create an array called "nums" with `[10, 30, 50, 70, 90]`. Next, create a new array called "squares" and maps over "nums" to return each number squared. After, create an array called "over1000" and filter the values over 1000. Finally, create a constant called "finale" to reduce the last array to a single sum of its elements. Print out each array and constant. (BONUS: try to do it all in one line either) [Solution](/en/js/practicing/p32.js)