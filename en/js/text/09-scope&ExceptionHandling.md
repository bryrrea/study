Para ler em pt-BR, [clique aqui](/pt-br/js/textos/09-escopo%26Excecoes.md)

# 9. Scope and Exception Handling

## 9.1. Scope

### 9.1.1. Definition

**Scope** is the context which a variable is defined. As in many other languages, JavaScript works with two big and distinguished scopes: the global and the local scopes.  

### 9.1.2. Global scope

We need to have in mind that when we are talking about scope, we are actually talking about where a variable exists. When we talk about a **global scope**, we are talking about a variable that exists outside of a function and outside of a block-level, i.e., this variable can be called and accessed in any part of the code.

### 9.1.3. Local scope

When we talk about **local scope**, we are talking about a variable who lies only in the context where it was created, i.e., it only exists and can be accessed inside a function or block-level where it was created.

```javascript
const globalVariable = "I can be accessed wherever you want!";

function differencingGlobalAndLocalScope() {
    const localVariable = "I exist only inside this function and I can be called only inside this function as well!";

    console.log(globalVariable); // I can be accessed wherever you want!
    console.log(localVariable); // I exist only inside this function and I can be called only inside this function as well!
};

differencingGlobalAndLocalScope();

console.log(globalVariable); // I can be accessed wherever you want!
console.log(localVariable); // Returns an error message saying the variable wasn't declared yet
```

I know the piece of code above is idiotic, but it was the way I found to understand about scope. The `globalVariable` was created outside the function `differencingGlobalAndLocalScope()` and it was not created into a block-level code either. So, when the function `differencingGlobalAndLocalScope()` was created and the variable `globalVariable` was called inside the function, everything works just fine. In the other hand, the variable `localVariable` was created **inside** the function `differencingGlobalAndLocalScope()`, and when it was called **outside** this scope, an error message will be returned saying that the variable wasn't declared yet.

### 9.1.4. Block-level scope

You must had realized I used a lot of "block-level scope" in the text above. In JavaScript, a block-level code is delimited by curly brackets (`{code here}`), i.e., everything **inside** the curly brackets exists **only** inside that block-level. As examples of block-level we can use `if-statements` and loops like `for`, `while`, `for...of`, and so on.
Let's make a slightly change in the previous program:

```javascript
const globalVariable = "I can be accessed wherever you want!";

function differencingGlobalAndLocalScope() {
    const localVariable = "I exist only inside this function and I can be called only inside this function as well!";

    console.log(globalVariable); // I can be accessed wherever you want!
    console.log(localVariable); // I exist only inside this function and I can be called only inside this function as well!

    if (true) {
        const newLocalVariable = "I'm existing only here!";
        console.log(newLocalVariable);       
    }

    console.log(newLocalVariable); // Returns an error message saying the variable wasn't declared yet and the program stops here
};

differencingGlobalAndLocalScope(); // Returns an error message saying the variable wasn't declared yet

console.log(globalVariable); // I can be accessed wherever you want!
console.log(localVariable); // Returns an error message saying the variable wasn't declared yet
console.log(newLocalVariable); // Returns an error message saying the variable wasn't declared yet
```

As we can see, the `newLocalVariable` exists **only** inside the block-level of the `if-statement`, and when we try to access it outside the block-level, an error is returned saying the variable wasn't declared yet.

## 9.2. Exception Handling

**Exception handling** is a way to handle with runtime errors of our code. It is denoted by the `try...catch`, where each one is a block of code (block-level).
Inside a `try` block-level may lie the code that will be tested to see if it works. Inside the `catch` block-level may lie what should happen when the `try` block-level fails. The `catch` block-level receives a parameter - commonly named as "error", "err", or something like that. It is the error message that should be displayed to inform the coder what is going wrong with the code.
The `throw` keyword is really important when we are talking about exception handling. As we may realize, it will "throw" an exception that can be "caught" and handled with a `try...catch` statement.

```javascript
function divisionOfTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error("There is no such thing like division by zero.");
    }

    return a / b;
}

try {
    let division = divisionOfTwoNumbers(1000, 0);
    
    console.log(division); // will fail
} catch(error) {
    console.error(error); // Error: There is no such thing like division by zero.
}
```

In the code above, I created a function to divide two numbers. As you may know, there is no way to divide a number by zero (we can treat it with advanced calculus, but a number cannot be divided by zero). So, I inserted an exception in the function: if divider is zero, am error will be "thrown". Outside the function, I created a `try...catch` statement calling the function and stating the divider as zero. The function will not resolve "1000/0", so the error will be "caught" and the text I wrote for the error might be displayed.

**IMPORTANT: anything can be "throw" as an exception, not just a string. We can use objects, numbers, whatever we want!**

As I saw in Promises, we can use `finally` in the statement, which will looks like `try...catch...finally`. The `finally` receives a block of code that will be ran whether the existence of an exception or not.

```javascript
function divisionOfTwoNumbers(a, b) {
    if (b === 0) {
        throw new Error("There is no such thing like division by zero.");
    }

    return a / b;
}

try {
    let division = divisionOfTwoNumbers(1000, 0);
    
    console.log(division); // will fail
} catch(error) {
    console.error(error); // Error: There is no such thing like division by zero.
} finally {
    console.log("End of the test. This part will always be executed!");
}
```

I improved the previous code with a `finally` statement. The message I wrote there will always be executed, regardless the existence of an error or not.

## 9.3. **Let's practice!**

- Practice 57:
    1. Print out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program, print out "Program completed!"
    4. Run the program and watch it crash
    5. Create a `try...catch` block that print out the error message
    6. Run the program again and see the difference [Solution](/en/js/practicing/p57.js)

- Practice 58:
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    4. Catch the error and print out the loop number
    5. Make sure the loop goes all the way to 10 [Solution](/en/js/practicing/p58.js)

- Practice 59:
    1. Assign an object to a variable called "user". The object may have { name: "Misha", age: 22, settings: { color: "blue" } }
    2. Print out "Creating user..."
    3. Try to print out "user.profile.color"
    4. Print out "User created!"
    5. Run the code and observe the behavior
    6. How would you fix this code (without changing steps 1-4 or the user Object)? Also, add any appropriate logging you fell makes sense. [Solution](/en/js/practicing/p59.js)

- Practice 60:
    1. Create a `try` block that does the following: create a variable called "number" and initialize it to the number 1337, add a random number between 0-1000 to "number", and print out "number. If the number is lower than 2000, an Error should be threw with the message "You lose!", otherwise print out "You win" without throw/error
    2. Create a `catch` block that catches the error and print out it
    3. Inside the `catch` block, print out "number" as well
    4. What is the issue with this setup/code?
    5. How can we fix it so we can access "number" in the `catch`? [Solution](/en/js/practicing/p60.js)
