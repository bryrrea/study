Leia em [PT-BR](/pt-br/js/textos/17-npm.md)

# 17. Node Package Manager (NPM)

## 17.1. Definition

NPM is a package manager used to install, update, remove and manage Node, JS and TS modules, libraries, frameworks, etc.

## 17.2. Installing Packages

```bash
npm install package_name
```

The first thing to keep in mind is that NPM installs packages **locally**. This means that three things are locally created within our project when we install a package: a directory called `npm_modules` - which contains all modules installed for that project -, and two `json` files: `package.json` - which we previously studied as it contains information about the project's modules - and `package-lock.json` - a `json` file containing internal information for Node usage that should **never** change.
The `package.json` file should include all dependencies required for running the project, as well as any other metadata. As we saw when studying JS modules, a row with `"type": "module",` can be added to work with modules in ES style. Additionally, it can contain scripts that can be ran using `npm run`.
There's a tricky issue with packages, especially older ones, as some of them were written for **CommonJS**, which may not support all `module.exports` as named exports. This means that importing a CommonJS module is different from importing an ES module. So, we need to determine whether the package we installed is a CommonJS or an ES package. Here are three ways to do this:

1. Inspect the modules in the `node_modules` folder to see how they are being exported.

    ```javascript
    //CommonJS export
    module.exports = {
        function: function name() {
            /* code here */
        },
        /* anything else */
    };

    // ES export
    export function name() {
        /* code here */
    }
    /* OR */
    function name() {
        /* code here */
    }

    export { name };
    ```

2. Check the extension of the module: `.js` is a CommonJS file, and `.mjs` is an ES file. However, this is not a foolproof method as each type of file can be written to look like the other. As a best practice, it may be a good idea to write our packages as `.mjs` files.

3. Try and see: run the program after importing the module to see if it works.

## 17.3. Others `npm` commands and its importance

| Command         | What it does                                                                                                                   | Importance                                                                                                  |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------- |
| `npm init`      | Create a new `package.json` file                                                                                               | Important to create a `package.json` file or to create another `package.json` file inside another directory |
| `npm uninstall` | Uninstall a local package                                                                                                      | Important to remove packages that will not be used anymore                                                  |
| `npm update`    | Update all packages on `node_modules` local folder. If we want to update a specific module, we should provide its name as well | Important to maintain our packages always updated (security)                                                |
| `npm root`      | Print the location of the `node_modules` folder that is being used                                                             | Important to know where node is looking for the modules                                                     |
| `npm ls`        | Print a list of all existing modules on local `node_modules` folder and its versions                                           | Important to see which modules we installed locally and what is their versions                              |

We have many other commands, but those above are the most commonly used. If we need to see something about other command, we should read the NPM Doc [here](https://docs.npmjs.com/cli/v8/commands).

## 17.4. **Let's practice!**

-   Practice 101:

    1. Create a folder for this exercise called 'warmup'
    2. Inside 'warmup' run 'npm init' to create a default package.json file (press enter to skip answers)
    3. Add "type": "module" to the package.json so we can use es modules (import/export)
    4. Use NPM to install the "lodash-es" package
    5. Create a file called "main.js" and import "camelCase" from lodash-es
    6. Use the function on the String "I love Javascript!" to test if it works and print it out
    7. Use node to run "main.js"
       BONUS: Find the camelCase function/file inside of node_modules and read through it

-   Practice 102:

    1. Create a folder for this exercise called 'exercise1'
    2. Inside 'exercise1' run 'npm init' to create a default package.json file (press enter to skip answers)
    3. Add "type": "module" to the package.json so we can use es modules (import/export)
    4. Use NPM to install the "chalk" package
    5. Create a file called "main.js" and import chalk (refer to the npm page or the docs as to how)
    6. Use chalk to print out some Strings in different colors like blue and red.
    7. Use node to run "main.js"
       BONUS: What dependencies does chalk rely on? Where would you find this info?

-   Practice 103:

    1. Create a folder for this exercise called 'exercise2'
    2. Inside 'exercise2' run 'npm init' to create a default package.json file (press enter to skip answers)
    3. Use NPM to install the "fs-extra" package
    4. Create a file called "main.js" and import fs-extra (refer to the npm page or the docs as to how) NOTE: This package uses the CommonJS syntax, NOT ES Modules
    5. Use fs-extra to create a text file in the current directory with the text "Hello, from NodeJS!" "hello.txt"
    6. Use node to run "main.js"
       BONUS: What are the other functions fs-extra has that might be useful?

-   Practice 104:

    1. Create a folder for this exercise called 'exercise3'
    2. Inside 'exercise3' run 'npm init' to create a default package.json file (press enter to skip answers)
    3. Add "type": "module" to the package.json so we can use es modules (import/export)
    4. Use NPM to install the "commander" package
    5. Create a file called "hello.js" and import { program } from commander (refer to the npm page or the docs as to how)
    6. Write code to allow us to run: node hello.js -n monkey Which will output: Hello, monkey! (-n will be a flag for the "name" argument which can be any single user-provided word)
       This is challenging and requires a lot of trial and error and back and forth on NPM's website and this package's examples/docs

**You can find practices' solutions [here](/README.md)**.
