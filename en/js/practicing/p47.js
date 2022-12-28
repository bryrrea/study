/*
    Practice 47 - Create an array called "values" with the following values:
        - {name -> "banana", quantity -> 1, price -> 1.95}
        - {name -> "apple", quantity -> 1, price -> 1.45}
        - {name -> "banana", quantity -> 10, price -> 0.05}
        - {name -> "candy", quantity -> 1, price -> 3.50}

    Next:
        1. Create a new array called "results" that starts empty.
        2. Create a Set called "duplicates".
        3. Add all objects in "items" to "results" in order, while skipping over any duplicate-named objects you encounter within "items".
        4. Print out "results".
*/

const values = [
    { name: "banana", quantity: 1, price: 1.95 },
    { name: "apple", quantity: 1, price: 1.45 },
    { name: "banana", quantity: 10, price: 0.05 },
    { name: "candy", quantity: 1, price: 3.5 },
];

let results = [];

const duplicates = new Set();

values.filter((value) => {
    if (!duplicates.has(value.name)) {
        results.push(value);
        duplicates.add(value.name);
        return true;
    }
});

console.log(duplicates); // { 'banana', 'apple', 'candy' }

console.log(results); //  [{ name: "banana", quantity: 1, price: 1.95 }, { name: "apple", quantity: 1, price: 1.45 }, { name: "candy", quantity: 1, price: 3.5 }]

/*
    My idea here was to use a filter to access the key "name" from each object. If two objects had the same value to "name" key, the value will not be added in the Set and the entire object will not be added to the new array.
*/
