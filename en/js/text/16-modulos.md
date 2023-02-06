Leia em [PT-BR](/pt-br/js/textos/16-modulos.md)

# 16. Modules

## 16.1. Definition

**Modules** are files containing functions, objects, variables, and any data structures that can be imported into other files. Just like in other programming languages, modules must **export** their functionality to be **imported** into the target code. This ensures the reuse of code snippets without having to keep rewriting it each time it is needed.

## 16.2. Why use modules?

-   Encapsulates code, functionality, and variables;
-   Facilitates the reuse of persistent code in an application;
-   Decreases pollution in the global scope;
-   Separates the responsibilities of an application.

## 16.3. Different Syntaxes

In short, there are two export forms:

```javascript
// code here with functions, data structures, etc.

export { function1, function2, object1, object2, etc. }
```

```javascript
// code here with functions, data structures, etc.

export default function1;
```

In the second syntax, it is only possible to export **one** functionality, that is, the **main** functionality of the module. There are other module export forms, but they are much less used.
There are three main ways to import modules:

```javascript
import { moduleName } from "/file";

// Code
```

```javascript
import { moduleName as aliasName } from "/file";

// Code
```

```javascript
import * as assignedName from "/file";

// Code
```

When using the keyword `as`, it means we are determining an alias - a **nickname** - to the module. We can also use this in the export, but it is much less common.

## 16.4. Conventions

There are some conventions for working with modules:

-   All import statements must be written at the beginning of the file
-   The export default declaration is used for the main function of the module
-   The names given to modules should be clear and descriptive
-   Exporting many items or what is unnecessary is avoided
-   Only the functionalities that will be used should be imported
-   The module should be reusable, that is, it should be able to be used anywhere in the application without worrying about external dependencies or side effects.

## 16.5. **Let's practice!**

-   Practice 97:

    1. Create a new folder called "warmup"
    2. Inside of "warmup" create 2 files:
        - main.js
        - utils.js
    3. Inside of utils.js create a function called "capsLock" that takes a single parameter called "string" and RETURNS "string", but upper-cased
    4. Export "capsLock" as a NAMED export from utils.js
    5. Import "capsLock" inside main.js and call it with any string as an argument, then print the result. Run main.js using Node.
       HINT: Make sure to make a package.json file inside of "warmup" with this inside: { "type": "module" }

-   Practice 98:

    1. Create a new folder called "exercise1"
    2. Inside of "exercise1" create 2 files:
        - main.js
        - utils.js
    3. Inside of utils.js create a function called "square" that takes a single parameter called "number" and RETURNS "number" squared (multiplied by itself).
    4. Also inside of utils.js, create a function called "greeting" that takes a single parameter called "name" and it simply prints out: `Hello ${name}!`
    5. Export "square" as a NAMED export from utils.js
    6. Export "greeting" as a DEFAULT export from utils.js
    7. Import both "square" and "greeting" on ONE line inside of main.js. Call both functions to make sure they work as expected. Run main.js using Node.
       HINT: Make sure to make a package.json file inside of "exercise1" with this inside: { "type": "module" }

-   Practice 99:

    1. Create a new folder called "exercise2"
    2. Inside of "exercise2" create 4 files:
        - main.js
        - modules.js
        - moduleA.js
        - moduleB.js
    3. Inside of moduleB.js create an Array called "topMovies": ["Spirited Away", "The Matrix", "Star Wars", "Zoolander"]. Export "topMovies" as a NAMED export
    4. Inside of moduleA.js, import "topMovies" from moduleB.js. Then, create a Function called "checkMovie" that has a String parameter called "movieName". This function will RETURN true if the movie is in "topMovies", otherwise it will RETURN false. Export "checkMovie" as a NAMED export
    5. Inside of modules.js, import "checkMovie" from moduleA.js as well as "topMovies" from moduleB.js. Then, export them both as NAMED exports (This file will both import and export the same variables)
    6. Import both "checkMovie" and "topMovies" on ONE line inside of main.js FROM modules.js. Call "checkMovie" with different movie names to make sure it works. Also, print out "topMovies" to make sure it's the correct array. Run main.js using Node.
       HINT: Make sure to make a package.json file inside of "exercise2" with this inside: { "type": "module" }

-   Practice 100:

    1. Create a new folder called "exercise3"
    2. Inside of "exercise3" create 3 files:
        - main.js
        - moduleA.js
        - moduleB.js
    3. Inside of moduleA.js print out 'Module A'. Then, create and export (named) a variable called 'a' that points to the String 'A'.
    4. Inside of moduleB.js import 'a' from moduleA.js. Also, print out 'Module B' next. Then, create and export (named) a variable called 'b' that points to the String 'B'. (Note, we don't USE 'a' here)
    5. Inside of main.js import 'b' from moduleB.js. Immediately after this, print out 'MAIN'. (Note, we don't USE 'b' here)
    6. Try to predict the order of the print outs when you run main.js. Why might this be?
       BONUS: Why might this make top-level await in modules tricky to use?
       HINT: Make sure to make a package.json file inside of "exercise3" with this inside: { "type": "module" }

**You can find practices' solutions [here](/README.md)**.
