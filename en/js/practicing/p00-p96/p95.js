/*
    Practice 95: Building on exercise 2
        1. Create a variable called "email" that points at: "monkey@trees.com"
        2. Create a variable called "emailPattern" that is a regular expression that will look for a string that ENDS with ".com" AND has ANY number of letters followed by the '@' char followed by ANY number of letters and ending with the "".com"
        3. Test "email" against "emailPattern" to see if it returns true/false using .test on "emailPattern"
        4. Find a match using .match on "email" with the "emailPattern regex"
        5. Print out the results from 3 and 4.
        BONUS: What is an issue with this pattern?
*/

const email = "monkey@trees.com";

const emailPattern = /\w*@\w*\.com$/;

console.log(emailPattern.test(email));
console.log(email.match(emailPattern));

/*
    One issue is that not every e-mail has a '.com' domain. Another issue is that '\w' assumes any character, including forbidden e-mail characters like '!' or '*', for instance.
*/