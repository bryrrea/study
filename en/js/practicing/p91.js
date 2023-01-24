/*
    Practice 91:
        1. Create a variable "book" that points at this Object:
        { name: "1984", author: "George Orwell", year: 1949,
          rating: 4.6, genre: "Science Fiction", movie: true }
        2. Create a Symbol.iterator property on "book" that will allow you to loop over it using a for-of-loop that will give you back the key-value pairs each loop as a paired array (similar to a Map): ["name", "1984"] ["rating", 4.6]
        3. Test your loop with a for-of-loop to make sure it works
*/

function* loopOver (obj) {
    for (const entry of Object.entries(obj)) {
        yield entry;
    }
}

const book = {
    name: "1984",
    author: "George Orwell",
    year: 1949,
    rating: 4.6,
    genre: "Science Fiction",
    movie: true
};

book[Symbol.iterator] = function* () {
    for (const entry of Object.entries(book)) {
        yield entry;
    }
};

for (const entry of book) {
    console.log(entry);
}