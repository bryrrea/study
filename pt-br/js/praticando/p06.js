/* Prática 6 - Crie uma função para checar se você é maior de idade. */

function checkAge(age) {
    if (age >= 18) {
        return "Como você tem " + age + " anos, você é maior de idade."
    } else {
        return "Como você tem " + age + " anos, você é menor de idade."
    }
}

(function () {
    age = 21;

    console.log(checkAge(age));
})();