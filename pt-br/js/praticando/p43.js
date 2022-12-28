/**
Practice 43 - Create an array called 'numbers' with the values [10, 20, 15, 30, 15, 20, 35, 60, 10]. Find the first repeated value in 'numbers' and print the index of the repeated value and the index where it was found first.
*/

const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const mapWithNumbers = new Map();

const checkingDoubles = numbers.find((number, index) => {
    if (mapWithNumbers.has(number)) {
        console.log(
            `O número ${number} é o primeiro valor repetido no array. Ele aparece primeiro no índice ${mapWithNumbers.get(
                number
            )} e repete no índice ${index}.\n\n`
        );
        return true;
    } else {
        mapWithNumbers.set(number, index);
        return false;
    }
});

console.log("- - - - - - - - - -\n\n");
console.log(mapWithNumbers);
