/*
Practice 21 - Create an array called items that receives ["light", "banana", "phone", "book", "mouse"]. Create a new array called plurals and create a function that, together with the map method, loops through the entire items array and adds an "s" at the end of each word. Print the two arrays.
*/

const items = ["light", "banana", "phone", "book", "mouse"];

const returningPlurals = (item) => {
    if (item === "mouse") {
        return "Mice";
    }
    return item + "s";
};

const plurals = items.map(returningPlurals);

console.log(items);
console.log(plurals);
