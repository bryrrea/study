/*
Practice 19 - Create an array called booleans and that receives [true, true, false, true, false, false]. Use the `map`() method to loop through the array and a function that returns any number when the position is true and zero when it is false. At the end, show the two arrays.
*/

const booleans = [true, true, false, true, false, false];

const randomNumber = (n1, n2) => Math.floor(Math.random() * (n2 - n1 + 1)) + n1;

const checkingBooleans = (bool) => {
    number = randomNumber(1, 1000);

    if (bool === true) {
        return number;
    }

    return 0;
};

const mappingBooleans = booleans.map(checkingBooleans);

console.log(booleans);
console.log(mappingBooleans);
