/*
    Practice 51 - Create a Map called "backpack" and add the following entries:
        - 1 => {name: "Sword", value: 300}
        - 2 => {name: "Banana", value: 5}
        - 3 => {name: "Gold Nugget", value: 10000}
        - 4 => {name: "Pants", value: 100}

    Use a for-of loop to loop over "backpack" and print out the name and the value for each item in the following format: Name: $Value. Also, print out the total value of all items in the "backpack".
*/

/*
    The "trick" here is: I have to create an array two variables (one for the Map keys and other for the Map values) in the for-of loop. Why an array? because the Map is an array with keys and values.
*/

const backpack = new Map();
let totalValue = 0;

backpack
    .set(1, { name: "Sword", value: 300 })
    .set(2, { name: "Banana", value: 5 })
    .set(3, { name: "Gold Nugget", value: 10000 })
    .set(4, { name: "Pants", value: 100 });

for (const [key, value] of backpack) {
    console.log(`${value.name}: $${value.value}`);

    totalValue += value.value;
}

console.log(`Total value of the backpack: ${totalValue}`);
