/*
    Practice 94:
        1. Create a variable called "email" that points at: "monkey@trees.com"
        2. Create a variable called "emailPattern" that is a regular expression that will look for a string that ENDS with ".com"
        3. Test "email" against "emailPattern" to see if it returns true/false using .test on "emailPattern"
        4. Find a match using .match on "email" with the "emailPattern regex"
        5. Print out the results from 3 and 4.
        BONUS: What is an issue with this pattern?
*/

const email = "monkey@trees.com";

const emailPattern = /\.com$/

console.log(emailPattern.test(email));
console.log(email.match(emailPattern));

/*
    We can have an issue with chars like "." because they have some meaning for regEx, so we need to use a backslash to use it literally.
*/