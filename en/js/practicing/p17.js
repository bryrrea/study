/*
Practice 17 - Write a function that given an array of strings, returns an object with the count of occurrences of each string. For example, given the array ["a", "b", "a", "c", "b"], the function should return the object { a: 2, b: 2, c: 1 }.
*/

const occurrencesInArray = (arrayWithStrings) => {
    let occurrencesObject = {};

    arrayWithStrings.map((string) => {
        if (occurrencesObject[string]) {
            // Add the string to the object. If already have, it will increment
            occurrencesObject[string]++;
        } else {
            occurrencesObject[string] = 1; // Add the string to the object. Starts counting at one
        }
    });

    return occurrencesObject;
};

const stringsArray = [
    "a",
    "b",
    "a",
    "c",
    "b",
    "d",
    "f",
    "s",
    "d",
    "s",
    "s",
    "c",
];
console.log(occurrencesInArray(stringsArray));
