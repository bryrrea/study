Para ler em pt-BR, [clique aqui](/pt-br/js/textos/12-switch.md)

# 12. `switch` Statement

## 12.1. Definition

The `switch` statement is a shorthand for a series of `if...else` statements. It is often used when there are multiple conditions to check, specially with **primitive types** of data. It's a really good way to replace if/if else/else statements, since it increases the readability and maintainability of the code.

## 12.2. Syntax

```javascript
switch (expression) {
    case firstValue: {
        //code here
        break;
    }
    case secondValue: {
        //code here
        break;
    }
    //more cases if needed
    default: {
        //code here
        break;
    }
}
```

The `switch` keyword is used to test an expression (with the comparative operator `===`) for each `case` (reserved word). A `break` statement is required, since we **always** want to terminate the `switch` statement after the expression matches some `case`. If no `case` is filled in, we use a `default` (reserved word) to handle that. The `default` may or may not be followed by a `break` statement.

## 12.3. **Let's practice!**

- Practice 77:
    1. Create a variable called "food" that points to the String "Donut"
    2. Create a series of if/else if/else statements that:
        - First checks for "food" being equal to "Fish" and console.logs
          "Sounds fishy..." if true
        - Then checks for "food" being equal to "Hummus" and console.logs
          "Want chips with that?" if true
        - Then checks for "food" being equal to "Sushi" and console.logs
          "With or without seaweed?" if true
        - Console.logs("Food not in our database, sorry!") in all other cases
    3. Run the program and make sure the correct things gets printed out, then change "food" to be "Sushi" and verify it still works as expected.
    4. Create a switch statement that does step 2 and then repeat step 3 to make sure it works the same as the if/else if/else statements
    [Solution](/en/js/practicing/p77.js)

- Practice 78:
    1. Create a variable called "activities" that points at the Array: ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"]
    2. Create a loop that loops over "activities" and inside the loop use a switch statement that has these cases:
       - "Swimming": only print out "Like a fish!"
       - "Rock Climbing": only print out "Like a mountain goat!"
       - "Running": only print out "Like a cheetah!"
       - Otherwise only print out "I'm sure some animal does that..."
    3. Run the code and make sure the correct messages get printed out
    [Solution](/en/js/practicing/p78.js)

- Practice 79:
    1. Create a variable called "enemies" that points at the Object:
       {
        rat: { atk: 3, def: 2, hp: 20, class: 1 },
        goblin: { atk: 10, def: 6, hp: 50, class: 1 },
        troll: { atk: 30, def: 20, hp: 200, class: 2 },
        giant: { atk: 50, def: 40, hp: 500, class: 2 },
       }
    2. Create a loop that loops over "enemies" and inside the loop use a switch statement on the "class" property that has these cases:
       - 1: print out only "This is an easy fight"
       - 2: print out only "This will require some training"
       - Otherwise only print out "Not implemented yet..."
    3. Run the code and make sure the correct messages get printed out
    [Solution](/en/js/practicing/p79.js)

- Practice 80:
    1. Create a variable called "points" that points at the Array: [3, 4, 1, 0, 1, 5, 6]
    2. Create a loop that loops over "points" and inside the loop use a switch statement that has these cases:
       - 0-2: print out only "Good try!"
       - 3-5: print out only "Very well done!"
       - Otherwise only print out "Wow, shooting for the moon!"
    3. Run the code and make sure the correct messages get printed out
    [Solution](/en/js/practicing/p80.js)
