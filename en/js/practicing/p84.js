/*
    Practice 84:
    1. Create a generator function called "getRandomNumber" that generates a random number between 1-10 (inclusive)
       exactly 5 times
    2. Create another generator function called "groceryList". Inside of "groceryList", create an variable called
       "groceries" that points at: ["Avocado", "Cookie", "Milk", "Soup", "Soda"]. The generator will yield a random grocery from "groceries" and also remove that grocery item from the list of "groceries",
       Eg: const groceries = groceryList();
       groceries.next() => "Cookie"
       groceries.next() => "Soup"
    3. Create 2 generator Objects by calling each of the 2 generator functions above
    4. Create a regular for loop that will loop 5 times and calls .next() on each of the generator Objects ^ to print out a random number followed by a random grocery:
       Eg: 5 Avocado
       10 Soup
*/

function* getRandomNumber() {
   let counter = 0;

   while (counter < 5) {
      yield (Math.floor(Math.random() * 10) + 1);
      counter++;      
   }
}

function* groceryList() {
   let groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];

   while (groceries.length > 0) {
      const randomIndex = Math.floor(Math.random() * groceries.length);
      const returnedItem = groceries.splice(randomIndex, 1)[0];

      yield returnedItem;
   }
}

const randomNumberGenerator = getRandomNumber();
const groceryGenerator = groceryList();

console.log("Buy:\n")

for (let index = 0; index < 5; index++) {
   console.log(`${randomNumberGenerator.next().value} ${groceryGenerator.next().value}`);
}