/* Practice 11: Create a program that runs through a list of numbers to return only the even numbers in this list. */

/* I decided to create a function that will generate an array with 10 random numbers between two numbers given by the user. */

let numberArray = [];
function creatingRandomNumbers(n1, n2) {
    for (i=0; i<10; i++) {
        let number = Math.floor(Math.random() * (n2 - n1 + 1)) + n1; //floor will round the random number, since "random" only generates numbers between 0 and 1 (1 excluded). The n2+1 is to include the n2 in the range of random numbers; +n1 ensures that the range will be between n1 and n2, and not between 0 and 10; n2-n1+1 is to ensure how many integers will be between n1 and n2. For example, if n1=10 and n2=20, 20-10+1=11, i.e., we have 10, 11, 12, 13, 14, 15, 16, 17, 18, 19 and 20.
        numberArray[i] = number;
    } 
    return numberArray;
}

function returningEvenNumbers () {
    let numberList = creatingRandomNumbers(1, 1000);
    console.log(`The list of numbers is ${numberList}`);

    let sumOfEvens = 0;
    for (i=0; i<numberList.length; i++) {
        if (numberList[i] % 2 === 0) {
            sumOfEvens++
            console.log(`${numberList[i]} is even.`);
        } else {
            console.log(`${numberList[i]} is odd.`);
        }
    }
    console.log(`The list of numbers has ${sumOfEvens} even numbers.`);
}

returningEvenNumbers();
