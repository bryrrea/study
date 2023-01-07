[Versão em PT-BR aqui!](/pt-br/js/textos/02-EstruturaCondicionalEFuncoes.md)  

# 2. If statements and Functions

## 2.1. If Statement

**"If statements"** are conditional structures that check whether a condition is `true` or `false` before executing a code block. Below, we can see a basic "if" statement.

```javascript
if (condition_is_true) {
  code_block;
}
```

Depending on the verification results, we may have more than one code block to be executed. To deal with that, we use a more robust if statement: the "if-else".

```javascript
if (condition_is_true) {
  code_block;
} else {
  code_block
}
```

As we can see above, the "else" code block will run if the condition is `false`. We also have a more robust if statement: the "if-else-if".

```javascript
if (condition1_is_true) {
  code_block;
} else if (condition2_is_true) {
  code_block;
} else if (condition3_is_true) {
  code_block;
} else {
  code_block;
}
```

If the first condition is `true`, the first code block will run. If the second condition is `true`, the second code block will run. If the third condition is `true`, the third code block will run. If none of the three conditions are `true`, the fourth code block will run. We have two main conventions about "if statements":

 1. When we have a complex verification to be done, it's highly recommended the creation of a variable to stock this verification.
 2. The variable created should start with "is", since we are verifying a boolean condition. It is like we are asking something to our code, e.g. "isEven" (is this number an even number?).

### 2.1.1. **Let's practice!**

- Practice 2 - Create a program that calculates the amount of fuel spent on a trip. In this program there should be 5 variables (ethanol price, gasoline price, which fuel your car needs, average amount of fuel spent by the car (km/L), and the distance of the trip (in km)). Print on the console the amount of fuel that will be spent to make the trip. [My solution](/en/js/practicing/03-p02.js)

- Practice 3 - Create an algorithm that, given the 3 grades of a student in a semester in college, calculates and prints the average and shows the grade of this student. If the average is lower than 5, the student failed; if the average is between 5 and 7, the student went to remedial; finally, the student passed if the average is above 7. [My solution](/en/js/practicing/04-p03.js)

- Practice 4 - Create an algorithm that calculates a person's BMI (Body Mass Index) and returns what spectrum that person is on. If the BMI is less than 18.5, the person is said to be underweight; if the BMI is between 18.5 and 25, the person is at their normal weight; if the BMI is between 25 and 30, the person is overweight; if the BMI is between 30 and 40, the person is considered obese, and if the BMI is over 40, the person is severely obese. [My solution](/en/js/practicing/05-p04.js)

- Practice 5 - Create an algorithm that calculates how much should be paid for a product, considering the normal price tag and the payment option chosen. Use the following conditions: 10% discount when paid in cash on Debit; 15% discount when paid in cash or PIX; if paid in two installments on credit card, the consumer will pay the tag price; if paid in more than two installments on credit card, the consumer will be charged the tag price plus 10%. [My solution](/en/js/practicing/06-p05.js)

## 2.2. Functions

A function is a chunk of code that can be "called" at any time we want. It is useful when we have a chunk of code that will be written many times in our program, e.g. The following syntax is used to write a function in JavaScript:

```javascript
function nameOfTheFunction(pam01, pam02, pam03) {
  code chunk here;
} // pam is an alias for parameter
```

It's common to use **"return"**, a reserved word which returns something when the function is called somewhere. Let' see a practical example solving the "Practice 4" by creating functions.

```javascript
function bmiCalculation(weight, height) {
  return (weight / Math.pow(height, 2)).toFixed(1);
}

function verifyBMI(bmi) {
  if (bmi < 18.5) {
    return "The person has BMI = " + bmi + ". Therefore, he/she is under the ideal weight.";
} else if (bmi >= 18.5 && bmi < 25) {
    return "The person has BMI = " + bmi + ". Therefore, he/she is at the ideal weight.";
} else if (bmi >= 25 && bmi < 30) {
    return "The person has BMI = " + bmi + ". Therefore, he/she is overweight.";
} else if (bmi >= 30 && bmi < 40) {
    return "The person has BMI = " + bmi + ". Therefore, he/she is considered obese.";
} else {
    return "The person has BMI = " + bmi + ". Beware! The person is considered to be severely obese!";
}
}

(function main() {
  const weight = 140; // kg
  const height = 1.75; // m

  let bmi = bmiCalculation(weight, height);
  console.log(verifyBMI(bmi));
})();
```

As we can see above, I created two functions: one to calculate the BMI and one to check the BMI result. The **"main"** function was create to pass the parameters **"weight"** and **"height"**, which are used to calculate the BMI. When we put a function between parentheses, that means it will have **priority** in execution. When we put the parentheses after we close the function, it will "call" that function immediately. Inside the **"main"** function, I created a variable to store the value returned by calculation, and I called the **"verifyBMI"** function to show the result of the function on the user's screen.
Functions have two interesting properties in JavaScript: they can be treated as **objects**, and they can be created nameless when we create a function inside parentheses. The latter property is very common for isolating a piece of code when we are using JavaScript for web development. Therefore, the **"main"** function can be replaced with:

```javascript
(function () {
  const weight = 140; // kg
  const height = 1.75; // m

  let bmi = bmiCalculation(weight, height);
  console.log(verifyBMI(bmi));
})();
```

One reserved word that is commonly used within functions (but not only within functions) is ***`this`***. In the case of functions, this reserved word serves as a context for the execution of the function, i.e., it can substitute a variable or characteristic. In the next item (objects) I will give a more concrete example.

### 2.2.1. **Let's practice!**

- Practice 6 - Create a function to check if you are above legal age. [My solution](/en/js/practicing/07-p06.js)

- Practice 7 - Recreate practice 5 with functions. [My solution](/en/js/practicing/08-p07.js)
