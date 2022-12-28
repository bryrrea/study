# **Notas sobre HTML**  

## **Sumário**  
|Sumário|
|--------|
|[1. Definição](#1-definição)|
|[2. Anatomia de um elemento/tag](#2-anatomia-de-um-elementotag)|
|[3. Estrutura básica de um elemento HTML: o "esqueleto"](#3-estrutura-básica-de-um-documento-html-o-esqueleto)|


### **1. Definição**  
HTML é um acrônimo para *HyperText Markup Language*. Isto significa que HTML é uma linguagem usada para marcar texto.  
>Como você pode ver, HTML não é uma linguagem de programação!  

### **2. Anatomia de um elemento/tag**  
Um elemento/tag é como chamamos a marcação usada para mostrar o início e o fim de um elemento HTML em um documento HTML.  
Quase todas as tags precisam ser "abertas" e "fechadas". A tag de abertura é escrita como `<tag>`. A tag de fechamento é quase a mesma coisa que a de abertura, mas tem um caractere adicional: "/". Portanto, a tag de fechamento é escrita como `</tag>`. Algumas tags não precisam de tags de fechamento. Nós dizemos que "elas se fecham", e é uma boa prática usar um caractere "/" no final delas. Um exemplo de uma tag que não precisa de uma tag de fechamento é `<img>`, que é escrito como `<img src="" alt= />`.  

### **3. Estrutura básica de um documento HTML: o "esqueleto"**  
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title of your page here</title>
    </head>
    <body>
        
    </body>
</html>
```  

Precisamos determinar a versão HTML que é usada no arquivo. O HTML está em sua 5ª versão, e precisamos "contar" isso aos navegadores. Portanto, a linha com a tag "*DOCTYPE*" "diz" para o navegador: "Ei, navegador, eu sou um arquivo HTML5! Por favor, leia-me corretamente!".  
Outra coisa importante que os navegadores e motores de busca precisam saber é a "*linguagem humana*" que o documento HTML está usando. Para fazer isso, precisamos introduzir um *atributo* à tag HTML. No código acima, na segunda linha, estamos "dizendo" aos navegadores e motores de busca: "*Olá, navegador! Olá, motor de busca! Estou usando o inglês para me comunicar com as pessoas, certo?*". Outra coisa importante: todos os arquivos HTML precisam da tag "`<html>`".  
Após a abertura da tag html, temos a tag "*head*". Mas antes disso, dê uma olhada no código com a estrutura básica de um arquivo HTML. Se você for um(a) bom(a) observador(a), você já viu que tudo escrito *após* a tag HTML tem uma separação na margem esquerda, como se estivesse escrito *dentro* da tag HTML. E, sim, você está certo! Foi escrito dentro da tag HTML! Isto é chamado *indentação*!  
>Podemos dizer que a indentação significa que algo está dentro de outra coisa. Para o "esqueleto", podemos dizer que **todas** as coisas precisam estar dentro da tag html! Note que se você não usar indentação, o documento funcionará da mesma maneira. Então, por que é uma boa prática usar indentação? **Porque facilita a leitura para outras pessoas e para o navegador!**  

Muito bem. Agora que sabemos o que é indentação, vamos seguir em frente. O `<head>` é, como diz a tag por si só, a cabeça do documento. É dentro desta tag que vamos adicionar informações importantes sobre o documento, algumas das quais aparecerão para o usuário (como o `<título>` da página) e algumas (na verdade quase todas) não serão mostradas aos usuários (como `<meta>`).  
Falando em `<título>`, este é o texto que é mostrado na guia do seu navegador. Ele ajuda o usuário a saber que página é esta e é muito importante para os mecanismos de busca. Portanto, o título de sua página ou webapp deve ser um resumo perfeito do aplicativo ou página.  
O elemento `<meta>` é realmente importante para os motores de busca e para seu navegador. Esta tag é seguida por atributos, como o "*charset*" (que "diz" ao navegador o conjunto de caracteres que será utilizado). O valor após o sinal "=" é chamado de "*valor*". Ele será quase sempre delimitado por aspas duplas.  
Na 5ª linha (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`), estamos "dizendo" ao navegador que a página/app precisa ser mostrada em todos os tamanhos de tela. É por isso que usamos "*name=viewport*". Viewport significa "o tamanho útil completo da tela". Se você criar um documento HTML, colar a estrutura básica que escrevi aqui e abrir o arquivo em seu navegador, você verá uma tela em branco. O viewport será *toda essa área branca* de sua tela! O atributo "*content="device-width*" está dizendo que todo o conteúdo precisa se ajustar ao tamanho da largura do dispositivo no qual a página foi aberta, e o "*initial-scale=1.0*" se refere ao "zoom". Ao definir este valor como "*1.0*", você está dizendo para o navegador: "*Ei, navegador, a escala inicial deste documento é com zoom 100%, certo?*".  
Finalmente, vamos falar sobre o `<body>`. É dentro deste elemento que tudo o que os usuários verão será colocado. Simples assim. Tags como `<header>`, `<main>` e `<footer>` serão colocadas dentro do `<body>` para dar forma ao seu aplicativo ou página da web. Como você pode ver, fechamos a tag HTML com `</html>`, dizendo ao navegador que nosso documento HTML terminou.  

Acredito que isso é tudo que devo escrever sem ter que consultar a documentação HTML para especificar a importância que cada tag/elemento tem. Portanto, daqui pra frente é sobre tags/elementos. Se houver mais algo útil, adicionarei aqui futuramente.  

>**É importante dizer que é contraproducente tentar memorizar todas as tags/elementos existentes. Não precisamos fazer isso, pois temos uma extensa documentação disponível, como a [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).**  