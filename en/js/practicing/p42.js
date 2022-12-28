/**
Practice 42 - Create a 'Map' called 'myConsole' and:

 1. Assign to 'myConsole' the key 'log' with a value that is an arrow function that will have a parameter called 'message' and the function will only print the 'message';
 2. Call the function with a message. How does this activity differ between 'Map' and an object?
 3. Add the following key-value pairs: 1: 'number one', '1': 'string one'.
 4. Print each of the two values of the keys you just inserted. What is the difference of this activity applied to a 'Map' and an object?"
 */

const myConsole = new Map();

myConsole.set("log", (message) => console.log(message));

// Calling the function
const logFunction = myConsole.get("log");
logFunction("Hello, friends!!!!");

/**
   I see two basic differences in relation to common objects:

   1.The key of the pair must be written as a string

   2. I need to access the function through the 'get' method, store it in a variable or constant and then pass the message as an argument. Even if the message was written directly in the function when I created it in the 'Map', I would have to do the same thing, because the 'get' method will not execute the function! I can also write in just one line, with my console.get("log")("Hello, friends!!!!"), but this does not allow me to use the function anywhere I want.
*/

// Adding two entries
myConsole.set(1, "number one");
myConsole.set("1", "string one");

// Printing the entries
console.log(myConsole.get(1));
console.log(myConsole.get("1"));

/**
   The difference is that, in a common object, the key of a property can be ONLY a string. This is one of the main advantages of the 'Map' data structure, as it allows ANY type of data to be used as a key.   
*/
