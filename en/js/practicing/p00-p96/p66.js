/*
   Practice 66:
      1. Create an variable called "views" that points at this array:
      [ [5, 10, 20], [10, 20, 30] ]
      2. Create another variable called "viewsCopy" that creates a
      copy of "views" using the spread operator
      3. Print out "views" and "viewsCopy"
      4. Add the number 40 to the end of the second array inside "viewsCopy"
      and delete the last number (20) inside the first array
      5. Add the array [100, 200] to the end of "viewsCopy"
      6. Print out "views" and "viewsCopy"
      Explain this behavior
*/

const views = [ [5, 10, 20], [10, 20, 30] ];

const viewsCopy = [...views];

console.log(views);
console.log(viewsCopy, "\n");

viewsCopy[1].push(40);
viewsCopy[0].pop();
viewsCopy.push( [100, 200] );

console.log(views);
console.log(viewsCopy);

/*
    It happens because "copied" iterables just create a reference pointing to the original iterable. So, if we made a direct change in the "copied" iterable, it will change ONLY the "copy". However, if we made a change like using the arrays methods `.pop()` or `.push()`, we change BOTH iterables, the original and the "copy".
*/