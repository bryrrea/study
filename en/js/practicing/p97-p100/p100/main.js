/*
    Practice 100:

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
*/

import { b } from "./moduleB.js"

console.log("MAIN");

/*
    I believe the outputs will be "Module A", "Module B", and "MAIN". When importing "b", the first line of "ModuleB" (which imports "a") will be read. The first line of "ModuleA" will be printed, then the first line of "Module" after the line importing "a" will be printed, and then it will return to "main" to print "MAIN".
*/
