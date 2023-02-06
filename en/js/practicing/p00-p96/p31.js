/*
Practice 31 - Create an array called "items" with ["light", "banana", "phone", "book", "mouse"]. Next, create a new array called "caps", map over "items" and capitalize each item. After, create a constant called "concat" to reduce all strings in caps by concatenate them. Use a space to separate each item. Finally, print out "items", "caps" and "concat". (BONUS: try to do it all in one line either)
*/

// const items = ["light", "banana", "phone", "book", "mouse"];

// const caps = items.map((item) => item[0].toUpperCase() + item.substring(1));

// const concat = caps.reduce((accumulator, item) => {
//     if (item === caps.length - 1) {
//         return accumulator + item;
//     }
//     return accumulator + item + " ";
// }, "");

// console.log(items);
// console.log(caps);
// console.log(concat);

// BONUS

console.log(
    ["light", "banana", "phone", "book", "mouse"]
        .map((item) => item[0].toUpperCase() + item.substring(1))
        .reduce(
            (accumulator, item) =>
                item ===
                ["light", "banana", "phone", "book", "mouse"].length - 1
                    ? accumulator + item
                    : accumulator + item + " ",
            ""
        )
);
