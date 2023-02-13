/*
    Practice 106:

        1. Install node-fetch if your Node version is less than 18 using NPM, and import it in to your file (ES Module style)
        2. Make a request to: https://jsonplaceholder.typicode.com/posts/1 and print out the resulting JSON using Fetch     
        BONUS: How does this differ from text content and what might fetch be doing with the JSON response for us?
*/

import fetch from "node-fetch";

const endpoint = "https://jsonplaceholder.typicode.com/posts/1";

const responseToJson = fetch(endpoint)
    .then((responseToJson) => responseToJson.json())
    .then((jsonData) => console.log(jsonData));

/*
    The difference between text() and json() is that text() returns the HTML per se, while json() returns a JSON Object with key/value pairs (entries or properties).
*/