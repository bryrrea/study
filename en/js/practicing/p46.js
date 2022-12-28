/*
    Practice 46 - Create an array called "numbers" with the values [10, 20, 15, 30, 15, 20, 35, 60, 10]. Find the first duplicated value in "numbers" and print it out to the terminal.
*/

/*
    I can iterate over the array using a regular for loop, forEach method, find method, a map, filter or reduce methods, for...of loop, and so on... The main idea is use an if/else statement to test if a number is already inside the Set. If true, print out the number and its index (if you want to show the index too), otherwise just add the number in the Set. Methods like find and filter need to return a boolean too.
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const setWithNumbers = new Set();

for (let i = 0; i < numbers.length; i++) {
    if (setWithNumbers.has(numbers[i])) {
        console.log(numbers[i]); //15
        break;
    }

    setWithNumbers.add(numbers[i]);
}

console.log(setWithNumbers); // { 10, 20, 15, 30 }

// Another possible solution
const numbersArray = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const newSet = new Set();

let firstIndex;

const noDuplicates = numbersArray.find((number, index) => {
    if (newSet.has(number)) {
        firstIndex = numbersArray.indexOf(number);
        console.log(
            `The number ${number} is already in the set. It was found first at index ${firstIndex} and its double is at index ${index}.`
        ); // The number 15 is already in the set. It was found first at index 2 and its double is at index 4.

        return true;
    }

    newSet.add(number);
    return false;
});

console.log(newSet); // { 10, 20, 25, 30 }
