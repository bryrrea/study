# 11. Destructuring and Ternary Operator

## 11.1. Destructuring

### 11.1. Definition

Destructuring is a JavaScript expression that makes it possible to unpack values and properties from arrays and objects into distinct variables in a single line of code.

### 11.2. Problem and syntax

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

### 11.3. Can we use destructuring on Objects?

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

### 11.4. **Let's practice!**

- Practice 69:
      1. Create an variable called "jungle" that points at the array: ["Monkey", "Lion", "Panda", "Rabbit", "Squirrel"]
      2. Use array destructuring to destructure out "Lion", and "Rabbit" while ignoring the other animals
      3. Print out your variables containing "Lion" and "Rabbit"
      [Solution](/en/js/practicing/p69.js)

- Practice 70:
      1. Create a variable called "snacks" that points to the Object:
        {
            chips: {name: "Pringles", salty: true},
            candy: {name: "Twizzlers", salty: false},
            chocolate: {name: "Mars", salty: false},
        }
      2. Destructure out "candy" from "snacks" using the Objects destructuring syntax. Also destructure out the key "fruit" which will be set to a default value of: {name: "Banana", salty: false} if it doesn't exist inside of "snacks"
      3. Print out the variables pointing at the "candy" and "fruit" Objects
      [Solution](/en/js/practicing/p70.js)

- Practice 71:
      1. Create a variable called "store" that is a Map. Then add the following entries to the "store":
          - "Cups" with a value of 46
          - "Candles" with a value of 121
          - "Vases" with a value of 15
      2. Use a for...of loop to loop through "store" but inside the loop's (const -- of --) syntax, use destructuring to destructure out the key and value using Array style destructuring.
      3. Within the loop, print out the key and value on the same line separated by a " => ". Eg: Cups => 46
      (The loop's body should only have one line of code)
      [Solution](/en/js/practicing/p71.js)

- Practice 72:
      1. Create a function called "xyzCalc" that has a single parameter that is an Object. It expects to get that Object
      as an argument that looks like the following format: { x: 20, y: 2, z: 7 }
      2. The function will return the following calculation using x, y and z inside the Object: `5 * x - 2 * y - z`
      3. Call this function using the following Objects and make sure the results match:
        a. xyzCalc({ x: 20, y: 2, z: 7 }) => 89
        b. xyzCalc({ x: 2, y: 1, z: 20 }) => -12
        c. xyzCalc({ x: 100, y: 100, z: 100 }) => 200
      4. Use destructuring inside the parameter list of the "xyzCalc" to grab out the x, y and z values directly inside the function parameter list (as opposed to inside the function body).
      5. Redo step 3 and make sure it still works
          a. Which method do you prefer?
          b. Which method is more clear?
      [Solution](/en/js/practicing/p72.js)

## 11.2. Ternary Operator

### 11.2.1. Definition

A **Ternary Operator** is a shorthand way to write an if/else statement. It uses three operators: a comparative one (either or not combined with a logical operator), a truthy one (`?`) and a falsy one (`:`).

### 11.2.2. Syntax

```javascript
a [comparative operator] check ? truthy response : falsy response
```

For instance:

```javascript
const moodSad = true;

moodSad === false ? console.log("Yup!") : console.log("Get better soon! :(");
```

### 11.2.3. Usage

The usage of ternary operator is better when we have a single check, like in the previous example. It is not recommended to use the ternary operator if we have more than a single check or if we need to use a nested checking, because it could get the code harder to read.

```javascript
const moodSad = true;
const angry = true;

moodSad === false
? console.log("Yup!")
: angry === true
      ? console.log("Get better soon! Try to relax somehow!")
      : console.log("At least you are not angry! :)");
```

As you can see above, the code got really confuse using the ternary operator instead of a convectional if/else statement.

### 11.2.3. **Let's practice!**

- Practice 73:
      1. Create a variable called "hungry" that start as true;
      2. Create an if/else statement that:
      - If "hungry" is true, print out "Have a cookie!"
      - Otherwise, print out: "No cookies for you!";
      3. Execute the code to make sure it works.
      4. Repeat steps 2-3 but with a ternary expression.
      [Solution](/en/js/practicing/p73.js)

- Practice 74:
      1. Create a function called "over9000" that has a single parameter which is a Number. This function:
      - Returns "It's over 9000!!!" if the argument is > 9000
      - Returns "Taking a Nappe..." in all other cases
      2. Do step 1 with a regular if/else clause first 
      3. Re-do step 1 with a ternary expressions
      BONUS: Can you shorten this with the short "arrow function expression" syntax?
      [Solution](/en/js/practicing/p74.js)

- Practice 75:
      1. Create a variable called "wizards" that points at the array: ["Gandalf", "Voldemort", "Harry", "Jafar", "Saruman", "Neville", "Merlin"]
      2. Map over "wizards" to create a new array that does the following:
      - If the name contains the letter "n" or "N" return the name but with all the "n"'s  and "N"'s replaced with a "*" character
      - Otherwise return the name, but upper-cased
      - Use a regular if/else statement for this
      3. Repeat step 2 but with a ternary expression
      BONUS: Can you shorten this with the short "arrow function expression" syntax?
            [Solution](/en/js/practicing/p75.js)

- Practice 76:
      1. Create a variable called "characters" that points at the array: ["Han Solo", "Spock", "Darth Vader", "Yoda", "Neo", "Sarah Connor"]
      2. Filter over "characters" to create a new array that does the following:
      - If the name has a space in it " ", keep it in the result (return true)
      - Otherwise, filter it out (return false)
      - Use a regular if/else statement for this
      3. Repeat step 2 but with a ternary expression
      BONUS: Can you shorten this with the short "arrow function expression" syntax?
            [Solution](/en/js/practicing/p76.js)
