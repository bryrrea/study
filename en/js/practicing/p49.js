/*
    Practice 49 - Create a variable called "ages" that points to the following array: [10, 42, 15, 22, 11, 74, 39, 2]. Next:

        1. Create an array called "results" that starts off empty.
        2. Use a for-of loop over "ages" and add an Object to "results" with and "age" key having the values of the "age" being looped over. Also, add a "name" key that is always "Dragon".
        3. Print out "results". The output should be an array of Objects.
*/

const ages = [10, 42, 15, 22, 11, 74, 39, 2];

const results = [];

let dragonNumber = 1;

for (let age of ages) {
    results.push({ age: age, name: `Dragon ${dragonNumber}` });

    dragonNumber++;
}
console.log(results);

/*
    Important to notice that, since I'm writing a literal Object, the key name is automatically converted to a string.
*/
