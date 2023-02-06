/*
    Practice 96:
        1. Create a variable called "phoneNumber" that points at the string: "020-382-6940"
        2. Create a regular expression called "phonePattern" that is a regular expression that would match a phone number with the format above in "phoneNumber" (including dashes) 
        3. Test "phoneNumber" against "phonePattern" to see if it returns true/false using .test on "phonePattern"
        4. Find a match using .match on "phoneNumber" with the "phonePattern regex"
        5. Print out the results from 3 and 4.
        BONUS: What is an issue with this pattern?
*/

const phoneNumber = "020-382-6940";

const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

console.log(phonePattern.test(phoneNumber));
console.log(phoneNumber.match(phonePattern));

/*
    The issue here is that not every single location has a phone number like the pattern. We need to have in mind the country code, state code, and so on...
*/