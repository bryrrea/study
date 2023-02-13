/*
    Practice 105:

        1. Install node-fetch if your Node version is less than 18 using NPM, and import it in to your file (ES Module style)       
        2. Make a request to: https://www.craigslist.org/about/ and print out the resulting HTML (text) String, using Fetch
        3. Compare what you see in Node to visiting the actual page in your Browser - what matches up?
*/

import fetch from "node-fetch";

const endpoint= "https://www.craigslist.org/about/";
const fetchingSite = fetch(endpoint)
    .then((responseToText) => responseToText.text())
    .then((html) => console.log(html));