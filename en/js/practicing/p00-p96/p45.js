/*
    Practice 45 - Create an array called "points" with the following values: [10, 20, 10, 30, 15, 15, 35, 60, 10]. How could we print out all the **UNIQUE** points inside "points"?
*/

/*
    I believe we could iterate over the array to add all values to a Set. Doing it, only the unique values will be put in the Set, since this data structure didn't accept duplicates.
*/

const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const pointsSet = new Set();

const noDuplicates = points.map((point) => {
    pointsSet.add(point);
});

console.log(points); // [ 10, 20, 10, 30, 15, 15, 35, 60, 10 ]
console.log("- - - - - - - - - - \n\n");
console.log(pointsSet); // { 10, 20, 30, 15, 35, 60 }
