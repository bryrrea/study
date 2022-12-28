/*
    Practice 44 - Create a variable called "numbers" that points to a new Set and add the following numbers to it: 1, 2, 3, 4, 5, 2, 3, 4. Print out "numbers" and take a look what is inside it. Repeat the same creating an array and see the differences.
*/

const numbers = new Set();

numbers.add(1).add(2).add(3).add(4).add(5).add(2).add(3).add(4);

console.log(numbers); // { 1, 2, 3, 4, 5 }

console.log("- - - - - - - - - - \n\n");

const numbersArray = [1, 2, 3, 4, 5, 2, 3, 4];

console.log(numbersArray); // [ 1, 2, 3, 4, 5, 2, 3, 4 ]

/*
    A Set data structure works only with no duplicated data, while an array accepts duplicated data. However, if we tried to add `1, 2, 3, 4, 5, "2", "3", "4", "5"` the output will be `Set { 1, 2, 3, 4, 5, "2", "3", "4", "5" }`, since `"2", "3", "4", "5"` are strings.
*/
