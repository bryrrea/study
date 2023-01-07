[Versão em PT-BR aqui!](/pt-br/js/textos/03-EstruturasDeRepeticaoEEmpacotamento.md)

# 3. Loops and Packing

## 3.1. Loops

Loops are structures that allows you to execute the same block of code more than once.

### 3.1.1. The for loop

The for loop is used with countable loops. It is commonly called "repetition structure with a variable of control". Below, we have the syntax to write a for loop.

```javascript
for (let index = 0; index < array.length; index++) {
  code block;
}
```

Let's brake the code above:

- **"`let index = 0`"** is creating a variable called `"index"` and it is starting with the value (index) "0" (almost all programming languages starting the index from zero).
- **"`index < array.length`"** is a boolean structure to check if a condition is true or false.
- **"`index++`"** is incrementing the variable `"index"` by one unit. It can be incremented by more than one unit if you want.  

### 3.1.2. While loop

The **while loop** is used when we have uncountable loops. It is commonly called a **"repetition structure with a logical test"**, since we need to start a variable outside the loop and increment (or decrease) it to work. Let's see it syntax below:

```javascript
initializing variable
while (logical test with initializing variable) {
  code here
}
```

A variable is logically tested and a piece of code will run as long as that logic is `true` (or `false` in some cases). Let's see an example:

```javascript
let points = 100;

while (points > 100 === false) {
    console.log(points + " is lower than 100.");

    points--;

    if (points < 0) {
        break;
    }
}
```

In the code above, I started a variable called "points" and the loop will run when this variable **is not** greater than 100. An "if statement" was add to stop the loop when the variable comes to zero. The using of reserved word `break` is restricted to `while` and `for` loops.

## 3.2. Packing

When we are creating an app, we will create some features in this. So, it is almost always a good practice to create **modules** separated from the main script. It improves the organization and maintainability of our code.  
To use those modules that have been written outside, we need to **import** them on the main script. But, to import them in the main script, we need to export that module to be imported where we want. Let's see an example below:

```javascript
let numberArray = [];
function creatingRandomNumbers(n1, n2) {
    for (i = 0; i < 10; i++) {
        let number = Math.floor(Math.random() * (n2 - n1 + 1)) + n1; //floor will round the random number, since "random" only generates numbers between 0 and 1 (1 excluded). The n2+1 is to include the n2 in the range of random numbers; +n1 ensures that the range will be between n1 and n2, and not between 0 and 10; n2-n1+1 is to ensure how many integers will be between n1 and n2. For example, if n1=10 and n2=20, 20-10+1=11, i.e., we have 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 and 20.
        numberArray[i] = number;
    }
    return numberArray;
}

function returningEvenNumbers() {
    let numberList = creatingRandomNumbers(1, 1000);
    console.log(`The list of numbers is ${numberList}`);

    let sumOfEvens = 0;
    for (i = 0; i < numberList.length; i++) {
        if (numberList[i] % 2 === 0) {
            sumOfEvens++;
            console.log(`${numberList[i]} is even.`);
        } else {
            console.log(`${numberList[i]} is odd.`);
        }
    }
    console.log(`The list of numbers has ${sumOfEvens} even numbers.`);
}
```

Above, I created a script with two functions (or modules): one to generate a list with 10 random numbers from a range defined by me, and one to check and return whether a number is odd or even. Let's imagine that these functions were created in a script called "checkingNumbers.js", but I want to use at least one of these modules in another program/script. To do so, we need to add a line of code in the script "checkingNumbers.js" to export the modules.

```javascript
module.exports = { creatingRandomNumbers, returningEvenNumbers };

/* We write like above nowadays, but in the past:
module.exports = {
  creatingRandomNumbers : creatingRandomNumbers,
  returningEvenNumbers : returningEvenNumbers
}; */
```

Now, if you want to use "creatingRandomNumbers" module in another script/program, you use the reserved word **"`require`"** in the file in which you want to use the module.

```javascript
const randomList = require("./checkingNumbers");

console.log(randomList.creatingRandomNumbers(1, 100));
```

I created a variable to import the modules from the script "checkingNumbers.js". I used the reserved word **"`require`"** and gave a string with the location of the script as argument. Then, I used the module "creatingRandomNumbers" to create and print on the screen a list with 10 numbers.

### 3.2.1. Destructuring

Destructuring is a JavaScript expression that makes it possible to unpack values and properties from arrays and objects into distinct variables in a single line of code.

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const pizza = food[0];
const hamburger = food[1];
const chicken = food[2];
const salad = food[3];
const soup = food[4];
```

Above, this was the way we accessed information within an array in the past. Since ES6, we can do as below:

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const [pizza, hamburger, chicken, salad, soup] = food;
```

As we can see, each variable inside the array on the left side of the equals sign refers to the index of the array elements. We can ignore an array element by using just a comma (e.g. `const[pizza, , , salad, soup] = food` stocks "🍕", "🥗" and "🍵" into variables). We also can use `...rest` to group the other elements in one element called **"rest"**, like `const[pizza, hamburger, ...rest] = food` returns `pizza = "🍕"`, `hamburger = "🍔"`, and `"🍗", "🥗", "🍵"` as **"`rest`"**.
We can change a value inside a list in te same way:

```javascript
const food = ["🍕", "🍔", "🍗", "🥗", "🍵"];

const [pizza, hamburger, chicken, salad, soup = "🥕"] = food;
```

Earlier, we talked about local objects, as following:

```javascript
const fruits {
  strawberry: "🍓",
  banana: "🍌",
  watermelon: "🍉",
  apple: "🍎",
  peach: "🍑"
};
```

And we can write like this:

```javascript
const { strawberry, banana, watermelon, apple, peach } = fruits;
```

And we can chance a variable name if we want to:

```javascript
const { strawberry: berry } = fruits;
```

### 3.2.2. **Let's practice!**

- Practice 10: Create a program to calculate the multiplication table of a number. [My solution](/en/js/practicing/11-p10.js)

- Practice 11: Create a program that runs through a list of numbers to return only the even numbers in this list. [My solution](/en/js/practicing/12-p11.js)
