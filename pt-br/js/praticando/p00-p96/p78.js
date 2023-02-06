/*
    Prática 78:
        1. Crie uma variável chamada "activities" que aponte para o Array: ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"]
        2. Crie um loop que percorra "activities" e crie uma declaração switch dentro do loop para os casos:
            - "Swimming": imprima "Like a fish!"
            - "Rock Climbing": imprima "Like a mountain goat!"
            - "Running": imprima "Like a cheetah!"
            - Otherwise imprima "I'm sure some animal does that..."
        3. Rode o código e certifique-se de que as mensagens corretas são impressas
*/

const activities = ["Swimming", "Hiking", "Rock Climbing", "Biking", "Running"];

for (const activity of activities) {
    switch (activity) {
        case "Swimming": {
            console.log("Like a fish!");
            break;
        }
        case "Rock Climbing": {
            console.log("Like a mountain goat!");
            break;
        }
        case "Running": {
            console.log("Like a cheetah!")
            break;
        }
        default: {
            console.log("I'm sure some animal does that...")
            break;
        }
    }
}