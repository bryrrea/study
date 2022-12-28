/* 
Practice 23 - Create an array called "practice" with numbers (10-20). Using filter, create a new array that keep the even numbers in practice. Later, print out both arrays.
*/

const practice = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const evenNumbers = practice.filter((number) => {
    if (number % 2 === 0) {
        return true;
    }
    return false;
});

console.log(practice);
console.log(evenNumbers);
