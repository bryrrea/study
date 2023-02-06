/*
    Prática 84:
    1. Criar uma função geradora chamada "getRandomNumber" que gera um número aleatório entre 1-10 (inclusive)
       exatamente 5 vezes
    2. Criar outra função geradora chamada "groceryList". Dentro da "groceryList", crie uma variável chamada
       "groceries" que aponta para: ["Avocado", "Cookie", "Milk", "Soup", "Soda"]. O gerador irá retirar e remover de "groceries" um item aleatoriamente
       Ex: const groceries = groceryList();
       groceries.next() => "Cookie"
       groceries.next() => "Sopa
    3. Crie 2 objetos geradores chamando cada uma das 2 funções geradoras acima
    4. Crie um laço for regular para rodar 5 vezes e chamar o método .next() em cada um dos Objetos geradores para imprimir um número aleatório seguido de um item de compra aleatório:
       Ex: 5 Abacate
       10 Sopa
*/

function* getRandomNumber() {
   let counter = 0;

   while (counter < 5) {
      yield (Math.floor(Math.random() * 10) + 1);
      counter++;      
   }
}

function* groceryList() {
   let groceries = ["Avocado", "Cookie", "Milk", "Soup", "Soda"];

   while (groceries.length > 0) {
      const randomIndex = Math.floor(Math.random() * groceries.length);
      const returnedItem = groceries.splice(randomIndex, 1)[0];

      yield returnedItem;
   }
}

const randomNumberGenerator = getRandomNumber();
const groceryGenerator = groceryList();

console.log("Buy:\n")

for (let index = 0; index < 5; index++) {
   console.log(`${randomNumberGenerator.next().value} ${groceryGenerator.next().value}`);
}