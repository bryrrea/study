[Versão em PT-BR aqui!](/pt-br/js/textos/01-fundamentos.md)  

# Fundamentals

## 1. Programming Basics

### 1.1. Commenting a code

One of the first things that you can learn about good programming practices is that your code **ALWAYS** needs to be commented. However, you only need to comment something non-trivial, as the comment lines would "pollute" your code.  
That said, you can comment out a row in JavaScript by writing your text after "//". If you want to comment more than just a row, you should write your text between "/\*\*/".  
Comments will not be showing when we run a code, and a one way to quickly skip a row or a block of code is using the comments characters.

```Javascript
console.log("Hello, World"); // This is a comment on just one row
/*
    This is a comment
    using multiple lines
    in JavaScript.
*/
console.log("Hello, World, again!");
```

### 1.2. Hello, world!

The "Hello, World" thing is a programming mantra. It will almost always be your first line of code.  
To do this, you need to know how the programming language you use does to display something on the user's screen. In JavaScript, you use "console.log()" command. As you can see above, the text will be placed inside brackets and quotation marks. This text is called **string** in programming.

#### 1.2.1. Quotation marks

We have single quotation mark (') and double quotation mark ("). Which one should we use?  
Some "human languages" (like English, e.g.) seem to use more single quotation marks than other languages (like PT-BR, e.g.). As you can saw above, I used "... user's screen." besides "...screen of the user.". Since English is the "universal human language", I will use double quotation marks to express strings, even though some programmers advise to use single quotes always, except when the string has single quotation marks (in this case, they advise to use double quotes).

### 1.3. Interpreter basics

JavaScript is an interpreted language. The parser will "read" your code from left to right, from top to bottom, and the result of executing the code is immediately returned.  
That means if your code have some error between rows, everything before the error will be interpreted, and everything after the error will not be interpreted.

```Javascript
console.log("I hope you are understanding it all.");
console.log("If you are not understanding, please let me know.");
huashsuahhsuahushaushuhusashsuiahdskaddsdkashnncjshd
console.log("What do you think about programming?");
```

The above code will run and display the first two lines to the user, but will return an error on the third line and will not display the fourth line because execution will stop at line 3.

## 2. Code sentences and blocks

A code sentence is a single code. Alone, it can does something; in a code block, it will have some meaning for an implementation. In the last example, every "console.log()" is a sentence. Each one will display a message on the user's screen.  
A code block, however, is a bunch of sentences that will run together, and when all those sentences ran together they bring up some function or feature. In JavaScript, a code block almost always will be placed between braces ({}).

```Javascript
let ice_cream = 'chocolate';
if (ice_cream === 'chocolate') {
  console.log('I love chocolate ice cream!');
} else {
  console.log('Sorry, but chocolate ice cream is my favorite.');
}
```

Above, we have two blocks of code (even though each one has only one code phrase): the first one will display something if we have chocolate ice cream, and the last one will display another message if we don't have chocolate ice cream. So if statements, for and while loops (control structures) and functions are some instances we will implement blocks of code.  
So, essentially, a code block will execute several sentences of code that together have a specific function.

## 3. Declaring variables

Nowadays, we have two ways to declare variables. For that, we use two distinct reserved words: **let** or **const**. The usage of **let** refers to a value that can be changed in the future, while the usage of **const** refers to a value that will _never_ be changed. Let's see an example:

```javascript
let name = "Bryan Corrêa";
const pi = 3.14;
```

In the code above, the variable "name" would be changed by another name anytime, while the variable "pi" refers to a math constant named "pi", which have a value that is always the same.  
Another important difference about declaring a variable with **let** or **const** is that using **const** assumes that you will **always** declare a value to the variable, i.e., with **let** you don't need to assign a value to the variable.

## 4. Primitive data types

We have 5 basic primitive types of data in JavaScript: **string**, **number**, **boolean**, **null** and **undefined**. This last one is almost exclusive for JavaScript.  
A **string** is a chain of characters. It can be a person's name, a city's name, a text, a set of numbers, special characters, and so on. However, a string will **always** be written inside **quote marks** (double or single).  
A **number** is any number. It can be a positive number, a negative number, an integer, a real, and so on. However, it's important to note that JavaScript will treat any type of number as a number. In Python, for instance, real and integer numbers are treated differently and have different data types as well. In JavaScript, numbers are limited to ±((2^53)-1).  
A **boolean** assumes only two values: `true` or `false`. It is commonly used for logical tests, to create an algorithm that will decide which piece of code will be run if a condition is obeyed.  
A **null** refers to “nothing”, “empty” or “value unknown”, while **undefined** refers to "value not assigned". Those two data types are commonly referred as "type of its own", but we can also assume them as primitive data types.

> Remember that we can use the `typeof` operator to see the type of a variable!

## 5. Operators

### 5.1. Arithmetic operators

Table 1 - Arithmetic Operators with JavaScript

| Operator |      What it does      |                               Return                                |
| :------: | :--------------------: | :-----------------------------------------------------------------: |
|    +     |          Sum           |                    Returns a sum between values                     |
|    +     |       Unary plus       | Converts an operand to a number (+"3" is "3" and +"true" returns 1) |
|    -     |      Subtraction       |                Returns a subtraction between values                 |
|    -     |     Unary negation     |                         If x=3, so -x is -3                         |
|    \*    |     Multiplication     |               Returns a multiplication between values               |
|    /     |        Division        |                  Returns a division between values                  |
|   \*\*   |     exponentiation     |          Returns the exponential of a value or expression           |
|    %     | Reminder of a division |                 Returns the reminder of a division                  |
|    ++    |       Increment        |               Increment a unit (if x=3, so x++ is 4)                |
|    --    |       Decrement        |               Decrement a unit (if x=3, so x-- is 2)                |

The precedence is like in Math: "`*`" and "/" before "+" and "-". If we have an expression with operators with the same precedence, it is like in Math again: the expression will be calculated from **left** to **right**.

### 5.2. Comparison Operators

Table 2 - Comparison Operators with JavaScript

| Operator |       What it does       |                                      Return                                      |
| :------: | :----------------------: | :------------------------------------------------------------------------------: |
|    ==    |         Equal to         |                      `true` if operands have the same value                      |
|   ===    |     Strict equal to      |                   `true` if operands have same value and type                    |
|    !=    | Not equal (different) to |                   `true` if operands present different values                    |
|   !==    |   Strict not equal to    | `true` if operands present different types or same type but wih different values |
|    >     |       Greater than       |               `true` if left operand is greater than the right one               |
|    <     |        Less than         |                `true` if left operand is lower than the right one                |
|    >=    |  Greater than or equal   |         `true` if left operand is greater than or equal to the right one         |
|    <=    |    Less than or equal    |          `true` if left operand is lower than or equal to the right one          |

As we can see, comparison operators return a boolean value (`true` or `false`). It is commonly used with "if" structures.

### 5.3. Logical Operators

Table 3 - Logical Operators with JavaScript

|   Operator   | What it does |          Return           |
| :----------: | :----------: | :-----------------------: |
|      &&      |     AND      | One AND another condition |
| &#124;&#124; |      OR      | One OR another condition  |
|      !       |     NOT      |         NOT equal         |

### 5.4. Assignment Operators

Table 4 - Assignment Operators

| Operator |       What it does        |
| :------: | :-----------------------: |
|    =     |        Assignment         |
|    +=    |      Sum assignment       |
|    -=    |  Subtraction assignment   |
|   \*=    | Multiplication assignment |
|    /=    |    Division assignment    |
|    %=    |    Reminder assignment    |
 
##### **Let's practice!**
 
 - Practice 1 - Create a program that calculates the amount of fuel spent on a trip. In this program there should be 3 variables (fuel price, average amount of fuel spent by the car (km/L), and the distance of the trip (in km)). Print on the console the amount of fuel that will be spent to make the trip. [My solution](/en/js/practicing/02-p01.js)
