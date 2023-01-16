/*
    Practice 72:
        1. Create a function called "xyzCalc" that has a single parameter that is an coordinates. It expects to get that coordinates as an argument that looks like the following format: { x: 20, y: 2, z: 7 }
        2. The function will return the following calculation using x, y and z inside the coordinates: 5 * x - 2 * y - z
        3. Call this function using the following Objects and make sure the results match:
        - xyzCalc({ x: 20, y: 2, z: 7 }) => 89
        - xyzCalc({ x: 2, y: 1, z: 20 }) => -12
        - xyzCalc({ x: 100, y: 100, z: 100 }) => 200
        4. Use destructuring inside the parameter list of the "xyzCalc" to grab out the x, y and z values directly
        inside the function parameter list (as opposed to inside the function body).
        5. Redo step 3 and make sure it still works
            a. Which method do you prefer?
            b. Which method is more clear?
*/

function xyzCalc(coordinates) {
    return 5 * coordinates.x - 2 * coordinates.y - coordinates.z;
}

console.log(xyzCalc({ x: 20, y: 2, z: 7}));

console.log(xyzCalc({ x: 2, y: 1, z: 20}));

console.log(xyzCalc({ x: 100, y: 100, z: 100}));


function xyzCalcDestructured( { x, y, z } ) {
    return 5 * x - 2 * y - z;
}

console.log("\n\n", xyzCalc({ x: 20, y: 2, z: 7 }));

console.log(xyzCalc({ x: 2, y: 1, z: 20 }));

console.log(xyzCalc({ x: 100, y: 100, z: 100 }));

/*
    I prefer the destructuring method, since it is more concise and clear to understand what is going on.
*/