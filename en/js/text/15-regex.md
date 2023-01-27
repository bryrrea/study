# 15. Regular Expressions (RegEx)

## 15.1. Definition

The **Regular Expressions** tool - also known as **RegEx** - is responsible for searching, replacing, and validating character patterns. This type of tool is present in virtually all programming languages, and in JavaScript it is no different.

## 15.2. Syntax

There are two ways to write regular expressions in JavaScript: Literal notation (`/expression/`) or with the RegExp() constructor.

```javascript
const regex = new RegExp("expression");
```

## 15.3. Patterns

| Pattern | Description                                                            |
| :-----: | :--------------------------------------------------------------------- |
|  `\d`   | **Numeric** character (0-9)                                            |
|  `\D`   | **Non-numeric** character                                              |
|  `\w`   | **Alphanumeric** character (letters, numbers and underscore)           |
|  `\W`   | Any **non-character**                                                  |
|  `\s`   | Space character (space, new line, tab)                                 |
|  `\S`   | Any character that **is not** a space                                  |
|   `.`   | **Any** character                                                      |
|   `?`   | **Zero or one** occurrence of the character or group                   |
|   `*`   | **Zero or more** occurrences of the character or group                 |
|   `+`   | **One or more** occurrences of the character or group                  |
|  `{n}`  | **Exactly** "n" occurrences of the character or group                  |
| `{n,}`  | **At least** "n" occurrences of the character or group                 |
| `{n,m}` | **At least** "n" and at most "m" occurrences of the character or group |
|  `[]`   | **Any** character within the bracket, like [a-z] (from "a" to "z")     |
|  `[^]`  | **Any** character that is not within the bracket                       |
|  `\b`   | Word boundary (beginning or end of a word)                             |
|   `^`   | Beginning of line                                                      |
|   `$`   | End of line                                                            |

## 15.4. Anchors

| Anchor | Description                                |
| :----: | :----------------------------------------- |
|  `\b`  | Word boundary (beginning or end of a word) |
|  `\B`  | Character that is not a word boundary      |
|  `^`   | Beginning of line                          |
|  `$`   | End of line                                |

## 15.5. Flags

| Flags | Description                                                          |
| :---: | :------------------------------------------------------------------- |
|  `g`  | Global search: does not stop at the first occurrence                 |
|  `i`  | Ignores case-sensitive                                               |
|  `m`  | Multiple lines (^ and $ serve as the start and end of the line)      |
|  `u`  | Text with Unicode chars                                              |
|  `s`  | Allows that the point (`.`) matches any character, including newline |

## 15.6. **Let's practice!**

-   Practice 93:

    1. Create a variable called "quote" that points at: "What is this? A center for ants?"
    2. Create a variable called "pattern" that points at a regular expression to search for "ant" in a string
    3. Use the .test method on the "pattern" in step 2 to check if "quote" has the pattern in it
    4. Use the .match method on the "quote" string to return a match for the "pattern" regexp
    5. Print out the results from steps 3 and 4
       [Solution](/en/js/practicing/p93.js)

-   Practice 94:

    1. Create a variable called "email" that points at: "monkey@trees.com"
    2. Create a variable called "emailPattern" that is a regular expression that will look for a string that ENDS with ".com"
    3. Test "email" against "emailPattern" to see if it returns true/false using .test on "emailPattern"
    4. Find a match using .match on "email" with the "emailPattern regex"
    5. Print out the results from 3 and 4.
       BONUS: What is an issue with this pattern?
       [Solution](/en/js/practicing/p94.js)

-   Practice 95:

    1. Create a variable called "email" that points at: "monkey@trees.com"
    2. Create a variable called "emailPattern" that is a regular expression that will look for a string that ENDS with ".com" AND has ANY number of letters followed by the '@' char followed by ANY number of letters and ending with the "".com"
    3. Test "email" against "emailPattern" to see if it returns true/false using .test on "emailPattern"
    4. Find a match using .match on "email" with the "emailPattern regex"
    5. Print out the results from 3 and 4.
       BONUS: What is an issue with this pattern?
       [Solution](/en/js/practicing/p95.js)

-   Practice 96:

    1. Create a variable called "phoneNumber" that points at the string: "020-382-6940"
    2. Create a regular expression called "phonePattern" that is a regular expression that would match a phone number with the format above in "phoneNumber" (including dashes)
    3. Test "phoneNumber" against "phonePattern" to see if it returns true/false using .test on "phonePattern"
    4. Find a match using .match on "phoneNumber" with the "phonePattern regex"
    5. Print out the results from 3 and 4.
       BONUS: What is an issue with this pattern?
       [Solution](/en/js/practicing/p96.js)
