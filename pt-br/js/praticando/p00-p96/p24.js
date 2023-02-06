/* 
Prática 24 - Crie um *array* chamado "*countries*" com as seguintes entradas: ["France", "South Africa", "Brazil", "United States", "Sweden"]. Filtrar sobre o *array* e manter somente os países que têm um espaço em branco em seu nome. Imprima ambos os *arrays*.
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
