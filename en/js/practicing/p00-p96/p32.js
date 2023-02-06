/*
Practice 32 - Create an array called "nums" with [10, 30, 50, 70, 90]. Next, create a new array called "squares" and maps over "nums" to return each number squared. After, create an array called "over1000" and filter the values over 1000. Finally, create a constant called "finale" to reduce the last array to a single sum of its elements. Print out each array and constant. (BONUS: try to do it all in one line either)
*/

// const nums = [10, 30, 50, 70, 90];

// const squares = nums.map((num) => Math.pow(num, 2));

// const over1000 = squares.filter((square) => {
//     if (square > 1000) {
//         return true;
//     }
//     return false;
// });

// const finale = over1000.reduce((sum, eachNum) => sum + eachNum, 0);

// console.log(nums);
// console.log(squares);
// console.log(over1000);
// console.log(finale);

// BONUS

console.log(
    [10, 30, 50, 70, 90]
        .map((num) => Math.pow(num, 2))
        .filter((square) => (square > 1000 ? true : false))
        .reduce((sum, eachNumber) => sum + eachNumber, 0)
);
