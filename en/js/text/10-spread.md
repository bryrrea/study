Para ler em pt-BR, [clique aqui](/pt-br/js/textos/10-spread.md)

# 10. The Spread Operator (`...`)

## 10.1. Definition

A **spread operator** is a built-in JavaScript operator used to go through iterable objects to expand then.

## 10.2. Case

Let's pretend that, for some reason, we want to copy an array of numbers to an empty array and we do not have the `.concat()` method to do it:

```javascript
const arrayWithNumbers = [1, 2, 3, 4, 5];

let copyArray = [];

for (const number of arrayWithNumbers) {
    copyArray.push(number);
}
```

With the spread operator is much more easier to do that:

```javascript

const arrayWithNumbers = [1, 2, 3, 4, 5];

const copyArray = [...arrayWithNumbers]; // [1, 2, 3, 4, 5]
```

If we want to add more numbers in the copy array, we just need to pass the numbers:

```javascript
const copyArray = [...arrayWithNumbers, 6, 7]; // [1, 2, 3, 4, 5, 6, 7]
```

We can use the spread operator with any JavaScript iterable object, like arrays, `.Set()`, `.Map()`, strings. We can also spread Objects:

```javascript
const object = {a: 1, b: 2, c: 3};

const newObject = {...object, d: 4, e:5};
```

It's important to note that changes **can affect** the original data. It happens because "copied" iterables just create a reference pointing to the original iterable. So, if we made a direct change in the "copied" iterable, it will change **only** the "copy". However, if we made a change like using the arrays methods `.pop()` or `.push()`, we change **both** iterables, the original and the "copy". Changing only the copy array is also only possible if the array/iterable has only primitive data types.

## 10.3. **Let's Practice!**

- Practice 65:
    1. Create an variable called "points" that points at this array: [10, 15, 20, 30, 5]
    2. Create another variable called "pointsCopy" that creates a copy of "points" using the spread operator, but also adds 2 extra values at the end: 50 and 75
    3. Print out both "pointsCopy" and "points"
    [Solution](/en/js/practicing/p65.js)

- Practice 66:
    1. Create an variable called "views" that points at this array: [ [5, 10, 20], [10, 20, 30] ]
    2. Create another variable called "viewsCopy" that creates a copy of "views" using the spread operator
    3. Print out "views" and "viewsCopy"
    4. Add the number 40 to the end of the second array inside "viewsCopy" and delete the last number (20) inside the first array
    5. Add the array [100, 200] to the end of "viewsCopy"
    6. Print out "views" and "viewsCopy"
    Explain this behavior
    [Solution](/en/js/practicing/p66.js)

Practice 67:
    1. Create a variable called "animal" that points at this Object:
        { name: "Koala", kingdom: "Australia", cute: true,
          friends: [ { name: "Kangaroo" , kingdom: "Australia"} ] }
    2. Create a variable called "koala" that points at a COPY of "animal" using the spread operator for Objects, but add the following property as well: "tail": false
    3. Print out both "animal" as well as "koala"
    4. Change "cute" to be false inside of "animal". Print out both "animal" and "koala" again and observe the change. Does this make sense?
    5. Add a "cute" property initialized to be false inside of the "kangaroo" object, inside of the "friends" array in "animal". Print out both "animal" and "koala" again and observe the change. Does this make sense?
    [Solution](/en/js/practicing/p67.js)

Practice 68:
    1. Create a variable called "superhero" that points at this Object:
        {   name: "Bruce Wayne", alias: "Batman", universe: "DC",
            happy: false, enemies: ["Joker", "Catwoman", "Bane"],
            bestMovie: {title: "The Dark Knight", rating: 95}   }
    2. How would you create a COPY of the Object pointed to by "superhero" INCLUDING COPIES of "enemies" and "bestMovie".
    3. Once you've created a total copy, modify the following:
       - add "Poison Ivy" to the copy's array of "enemies"
       - add { year: 2008 } to the copy's "bestMovie" Object
    4. Print out both "superhero" and it's copy to ensure that "superhero"'s "enemies" and "bestMovie" were NOT modified.
    This can be done MANY different ways but is also quite challenging!
    [Solution](/en/js/practicing/p68.js)
