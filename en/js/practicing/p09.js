/* Practice 9 - Create a class to represent people with the following attributes: name, weight, and height. Create a function to calculate the BMI of these people and tell them which ones need to be more careful in their lifestyle. */

class Person {
    name;
    weight;
    height;

    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateBMI() {
        let imc = (this.weight / (this.height * this.height)).toFixed(2);

        return imc;
    }

    classifyBMI(imc) {
        imc = this.calculateBMI();
        if (imc < 18.5) {
            return (console.log(`${this.name} is below the ideal weight, and his/her BMI is ${imc}.`));
        } else if (imc >= 18.5 && imc < 25) {
            return (console.log(`${this.name} is withing ideal weight, and his/her BMI is ${imc}.`));
        } else if (imc >= 25 && imc < 35) {
            return (console.log(`${this.name} is in the "Obesity I" category, and his/her BMI is ${imc}.`));
        } else if (imc >= 35 && imc < 40) {
            return (console.log(`${this.name} is in the "Obesity II" category, and his/her BMI is ${imc}.`));
        } else {
            return (console.log(`Warning! ${this.name} is in the "Obesity III" category (morbid obesity), and his/her BMI is ${imc}.`));
        }
    }
}

p01 = new Person("Tiffany", 140, 1.75);
p02 = new Person("Antony", 60, 1.85);

p01.calculateBMI();
p02.calculateBMI()
p01.classifyBMI();
p02.classifyBMI();