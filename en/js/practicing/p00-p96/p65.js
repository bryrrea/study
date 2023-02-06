/*
    Practice 65:
        1. Create an variable called "points" that points at this array:
        [10, 15, 20, 30, 5]
        2. Create another variable called "pointsCopy" that creates a
        copy of "points" using the spread operator, but also adds
        2 extra values at the end: 50 and 75
        3. Print out both "pointsCopy" and "points"
*/

const point = [10, 15, 20, 30, 5];

const pointsCopy = [...point, 50, 75];

console.log(point);
console.log(pointsCopy);