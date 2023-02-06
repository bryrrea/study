/* 
Practice 24 - Create an array called "countries" with the following entries: ["France", "South Africa", "Brazil", "United States", "Sweden"]. Filter over the array and keep only the countries that have a blank space in their name. Print out both arrays.
*/

const countries = [
    "France",
    "South Africa",
    "Brazil",
    "United States",
    "Sweden",
];

const countriesWithBlankSpace = countries.filter((country) => {
    if (country.includes(" ")) {
        return true;
    }
    return false;
});

console.log(countries);
console.log(countriesWithBlankSpace);
