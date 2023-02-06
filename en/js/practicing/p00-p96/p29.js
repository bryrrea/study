/*
Practice 29 - Create an array called "companies" of the following strings: ["apple", "tesla", "spacex", "amazon", "google"]. Create a constant called "modded" that reduces the "companies" array to a string of the companies that do not start with the latter "a", separated by dashes. Print out both.
*/

const companies = ["apple", "tesla", "spacex", "amazon", "google", "auth"];

const modded = companies
    .reduce((accumulator, company) => {
        companies.sort();
        if (company.startsWith("a")) {
            return accumulator;
        } else {
            return accumulator + company + "-";
        }
    }, "")
    .slice(0, -1);

console.log(companies);
console.log(modded);
