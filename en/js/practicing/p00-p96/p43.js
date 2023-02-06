const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const mapWithNumbers = new Map();

const checkingDoubles = numbers.find((number, index) => {
    if (mapWithNumbers.has(number)) {
        console.log(
            `The number ${number} is the first repeated value in the array. It shows up first at index ${mapWithNumbers.get(
                number
            )} and repeats at index ${index} index.\n\n`
        );
        return true;
    } else {
        mapWithNumbers.set(number, index);
        return false;
    }
});

console.log("- - - - - - - - - -\n\n");
console.log(mapWithNumbers);
