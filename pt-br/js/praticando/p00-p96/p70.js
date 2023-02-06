/*
    Prática 70:
        1. Criar uma variável chamada "snacks" que aponte para o Objeto:
                {
                    chips: {name: "Pringles", salty: true},
                    candy: {name: "Twizzlers", salty: false},
                    chocolate: {name: "Marte", salty: false},
                } 
        2. Desestruturar "candy" a partir de "snacks" usando desestruturação. Também desestruturar a chave "fruit", que será definido como um valor padrão de:
            {name: "Banana", salty: false} se não existir dentro de "snacks".            
        3. Imprimir as variáveis que apontam para os Objetos "candy" e "fruits" 
*/

const snacks = {
    chips: {name: "Pringles", salty: true},
    candy: {name: "Twizzlers", salty: false},
    chocolate: {name: "Mars", salty: false},
};

const { candy, fruit= {name: "Banana", salty: false} } = snacks;

console.log(candy);
console.log(fruit);