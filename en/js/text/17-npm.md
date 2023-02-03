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
