/*
Prática 29 - Crie um *array* chamado "*companies*" com as seguintes *strings*: ["apple", "tesla", "spacex", "amazon", "google"]. Crie uma constante chamada "*modded*" que reduza o *array* "*companies*" para uma string das empresas que não começam com a letra "a", separadas por traços. Imprima ambos.
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
