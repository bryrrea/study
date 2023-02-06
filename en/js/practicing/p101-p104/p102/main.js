/*
    Practice 102:

        1. Create a folder for this exercise called 'exercise1'
        2. Inside 'exercise1' run 'npm init' to create a default package.json file (press enter to skip answers)
        3. Add "type": "module" to the package.json so we can use es modules (import/export)
        4. Use NPM to install the "chalk" package
        5. Create a file called "main.js" and import chalk (refer to the npm page or the docs as to how)
        6. Use chalk to print out some Strings in different colors like blue and red.
        7. Use node to run "main.js"
        BONUS: What dependencies does chalk rely on? Where would you find this info?
*/

import chalk from "chalk";

const message = "Hi, there!"

console.log(chalk.bgHex("#F88DAD").hex("#FAC748").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#8390fa").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#1D2F6F").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#1C0221").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#B9F18C").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#596157").bold(message));
console.log(chalk.bgHex("#F88DAD").hex("#F9E9E6").bold(message));

/*
    The chalk dependencies can be found within the package.json or package-lock.json files, and also with the npm list command (or npm list --omit=dev to see only the production dependency). It has only one dependency (chalk@5.2.0).
*/



