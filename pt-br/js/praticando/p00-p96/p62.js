/*
    Prática 62:
        1. Crie uma função chamada "fetchUser" que retorna uma *Promise* que se resolve com o valor `{dados: {usuário: "Monkey", admin: true} } após 3 segundos
        2. Crie uma função chamada "login" que toma um Objeto como argumento. Se o Objeto tem uma propriedade chamada "admin" com um valor de "true", então imprima "Login com sucesso!", caso contrário imprima "Falha no login, por favor tente novamente".
        3. Imprimir "Program starting..."
        4. Crie uma função assíncrona que espere que os dados retornem do "fetchUser".
        5. Passe o usuário que volta do "fetchUser" para a função "login" que você criou
        6. Chame a função assíncrona que você criou
        7. Imprima "Program complete!"
*/

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    user: "Monkey",
                    admin: true,
                }
            });
        }, 3000)
    })
};

const login = (user) => {
    if(user.admin === true) {
        console.log("Successfully logged in!");
    } else {
        console.log("Failed to log in, please try again.");
    }
};

console.log("Program starting...");

const asyncFunction = async () => {
    const waitingData = await fetchUser();

    login(waitingData.data);
};

asyncFunction();

console.log("Program complete!");