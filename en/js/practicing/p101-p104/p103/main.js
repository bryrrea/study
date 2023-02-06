/*
    Practice 103: 

        1. Create a folder for this exercise called 'exercise2'
        2. Inside 'exercise2' run 'npm init' to create a default package.json file (press enter to skip answers)
        3. Use NPM to install the "fs-extra" package
        4. Create a file called "main.js" and import fs-extra (refer to the npm page or the docs as to how) NOTE: This package uses the CommonJS syntax, NOT ES Modules
        6. Use fs-extra to create a text file in the current directory with the text "Hello, from NodeJS!" "hello.txt"
        7. Use node to run "main.js"
        BONUS: What are the other functions fs-extra has that might be useful?
*/

const fsExtra = require("fs-extra");

const file = "./hello.txt";

const data = "Hello, from NodeJS!";

fsExtra.outputFile(file, data);

/*
    fs-extra has functions that can handle Promises (Async/await function). It also has functions to determine if a directory exists, to create that directory if it does not exist, functions to copy and move files and directories, and so on.
*/