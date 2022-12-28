/*
Practice 26 - Create an array called "values": [[1, 2, 3], [0, 0, 1], [3, 6, 9], [0, 1, 2]]. Create a new array called "hasTwos" that filters over values and keeps only the sub-arrays that have a 2 in them. Later, print out both arrays.
*/

const values = [
    [1, 2, 3],
    [0, 0, 1],
    [3, 6, 9],
    [0, 1, 2],
];

const hasTwos = values.filter((value) => {
    if (value.includes(2)) {
        return true;
    }
    return false;
});

console.log(values);
console.log(hasTwos);
