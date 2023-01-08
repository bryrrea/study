/*
    Practice 58:
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    4. Catch the error and print out the loop number
    5. Make sure the loop goes all the way to 10
*/

for (let loop = 1; loop <= 10; loop++) {
    console.log(`Loop number ${loop}.`);

    if (loop === 5) {
        try {
            throw new Error("Boom!");
        } catch(error) {
            console.error(`${error} at loop ${loop}.`);
        }
    }
}