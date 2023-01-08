/*
    1. Assign an Object to a variable called "user". The Object may have { name: "Misha", age: 22, settings: { color: "blue" } }
    2. Print out "Creating user..."
    3. Try to print out "user.profile.color"
    4. Print out "User created!"
    5. Run the code and observe the behavior
    6. How would you fix this code (without changing steps 1-4 or the user Object)? Also, add any appropriate logging you fell makes sense.
*/

try {
    let user = {}

    user.name = "Misha";
    user.age = 22;
    user.settings = { color: "blue" };

    console.log(`Creating user ${user.name}...\n`);

    console.log(user.profile.color);

    console.log(user);

    console.log("User created!");
} catch(error) {
    console.error(error);
}

console.log("Program completed!");