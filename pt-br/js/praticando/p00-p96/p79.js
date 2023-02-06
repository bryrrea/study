/*
    Prática 79:
        1. Crie uma variável chamada "enemies" que aponte para o Objeto:
        {
            rat: { atk: 3, def: 2, hp: 20, class: 1 },
            goblin: { atk: 10, def: 6, hp: 50, class: 1 },
            troll: { atk: 30, def: 20, hp: 200, class: 2 },
            giant: { atk: 50, def: 40, hp: 500, class: 2 },
        }
        2. Crie um loop que percorra "enemies" e utilize uma declaração switch dentro do loop com os seguintes casos:
            - 1: Imprima "This is an easy fight"
            - 2: Imprima "This will require some training"
            - Caso contrário, imprima "Not implemented yet..."
        3. Rode o código e certifique-se que as mensagens corretas aparecem
*/

const enemies = {
    rat: { atk: 3, def: 2, hp: 20, class: 1 },
    goblin: { atk: 10, def: 6, hp: 50, class: 1 },
    troll: { atk: 30, def: 20, hp: 200, class: 2 },
    giant: { atk: 50, def: 40, hp: 500, class: 2 },
}

for (const enemy in enemies) {
    switch (enemies[enemy].class) {
        case 1: {
            console.log(`This is an easy fight against this ${enemy}.`)
            break;
        }
        case 2: {
            console.log(`This will require some training to challenge this ${enemy}.`)
            break;
        }
        default: {
            console.log("Not implemented yet...")
            break;
        }    
    }
}