/* Practice 6 - Create a function to check if you are above legal age. */

function checkAge(age) {
    if (age >= 18) {
        return "Since you are " + age + " years old, you are above legal age."
    } else {
        return "Since you are " + age + " years old, you are under legal age."

    }
}

(function () {
    age = 21;

    console.log(checkAge(age));
})();