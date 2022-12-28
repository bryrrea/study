/*
Practice 27 - Create an array called "nums" with the following values: [10, 20, 30, 40, 50]. Create an array called "timesTwo" and, using map, multiply each number by two. Later, create an array called "over50" that filters "timesTwo" to keep only values over 50. Therefore, print out the three arrays.
*/

const nums = [10, 20, 30, 40, 50];

const timesTwo = nums.map((num) => num * 2);

const over50 = timesTwo.filter((element) => element > 50);

console.log(nums);
console.log(timesTwo);
console.log(over50);

const newOver50 = nums
    .map((number) => number * 2)
    .filter((number) => number > 50);

console.log(newOver50);
