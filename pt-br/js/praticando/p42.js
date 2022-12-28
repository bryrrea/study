/**
 Prática 42 - Prática 37 - Crie um "Map" chamado "myConsole" e:
    1. Atribua à "myConsole" a chave "log" com um valor que é uma arrow function que terá um parâmetro chamado "mensagem" e a função apenas imprimirá a "mensagem";
    2. Chame a função com uma mensagem. Como essa atividade se diferencia entre "Map" e um objeto?
    3. Adicione os seguintes pares chave-valor: 1: "number one", "1": "string one".
    4. Imprima cada um dos dois valores das chaves que você acabou de inserir. Qual a diferença dessa atividade aplicada a um "Map" e a um objeto?
 */

const myConsole = new Map();

myConsole.set("log", (message) => console.log(message));

// Chamando a função
const logFunction = myConsole.get("log");
logFunction("Hello, friends!!!!");

/**
 Vejo duas diferenças básicas em relação aos objetos comuns:
    1. A chave do par precisa ser escrito como uma string
    2. Preciso acessar a função por meio do método 'get', armazenar em uma variável ou constante para aí sim poder passar a mensagem como argumento. Mesmo que a mensagem fosse escrita diretamente na função quando criei ela no 'Map', teria que fazer a mesma coisa, pois o método 'get' não executará a função! Se quiser, posso escrever em apenas uma linha também, com myConsole.get("log")("Hello, friends!!!!"), mas isso não possibilita que eu utilize a função em qualquer lugar que eu queira.
*/

// Adicionando os dois pares
myConsole.set(1, "number one");
myConsole.set("1", "string one");

// Imprimindo os dois pares
console.log(myConsole.get(1));
console.log(myConsole.get("1"));

/**
 A diferença é que, em um objeto comum, a chave de uma propriedade pode ser APENAS string. Essa é uma das principais vantagens da estrutura de dados "Map", pois ela possibilita que QUALQUER tipo de dado seja usado como chave.   
*/
