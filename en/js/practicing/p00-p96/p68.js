/*
    Practice 68:
        1. Create a variable called "superhero" that points at this Object:
            {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
                happy: false, enemies: ["Joker", "Catwoman", "Bane"],
                bestMovie: {title: "The Dark Knight", rating: 95}   }
        2. How would you create a COPY of the Object pointed to by
            "superhero" INCLUDING COPIES of "enemies" and "bestMovie".
        3. Once you've created a total copy, modify the following:
            - add "Poison Ivy" to the copy's array of "enemies"
            - add { year: 2008 } to the copy's "bestMovie" Object
        4. Print out both "superhero" and it's copy to ensure that
            "superhero"'s "enemies" and "bestMovie" were NOT modified.
        This can be done MANY different ways but is also quite challenging!
*/

const superhero = {
    name: "Bruce Wayne",
    alias: "Batman",
    universe: "DC",
    happy: false,
    enemies: ["Joker", "Catwoman", "Bane"],
    bestMovie: {
        title: "The Dark Knight",
        rating: 95,
    },
}

const superheroCopy = {
    ...superhero,
    enemies: [...superhero.enemies, "Poison Ivy"],
    bestMovie: {...superhero.bestMovie, year: 2008},
}

console.log("superhero Object:\n", superhero);
console.log("\n\n")
console.log("superhero copy Object:\n", superheroCopy);

/*
    An Object is not an iterable element. So if we want to create a perfect copy and not just another reference pointing to the same memory space, we can spread the original data inside the copy Object, and we need to REPLACE the key/value pairs they are arrays, Objects, etc. In this exercise, the keys "enemies" and "bestMovie" are an array and an Object, respectively. To create a perfect copy of these elements that can be changed WITHOUT changing the original Object, we can access the right elements/entries to RE-WRIGHT these entries, since we know that an Object cannot have two keys with the same name. 
*/