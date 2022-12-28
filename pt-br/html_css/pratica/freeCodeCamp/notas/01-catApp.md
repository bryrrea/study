# **Cat app**  

## **1. Objetivo**  
Este projeto simples foi criado para ensinar elementos básicos de HTML, tais como parágrafos (`<p></p>`), títulos (`<h1></h1>...<h6></h6>`), elementos de formulário, etc.  

## **2. Elementos utilizados**  
Vou dividir por seções para explicar melhor.  
Antes de tudo, temos a estrutura "óssea" do HTML. Você pode ler [aqui](/pt/html_css/text/html.md/#3-basic-structure-of-an-html-document-the-skeleton).  
Depois, devemos saber que podemos utilizar o elemento `<h1></h1>` apenas uma vez (boas práticas). Portanto, tenha cuidado para escolher o texto certo para isso!  

### **2.1. Parte Um: pensando no projeto**  
Devemos sempre pensar no projeto: funcionalidades, o que os usuários verão, e assim por diante.  
Este é um projeto simples. Queremos criar um aplicativo que mostre ou redirecione para fotos de gatos. Dentro do `<body></body>` teremos o `<main></main>` e o `<footer></footer>`.  

### **2.2. Parte Dois: o main**  
O `<main></main>` terá três seções com funções diferentes.  
- A primeira seção é para mostrar algumas fotos de gatos.
- A segunda seção é para trazer algumas curiosidades sobre os gatos.
- A terceira seção é para trabalhar com um formulário sobre gatos.  

#### **2.2.1. Seção Um: trabalhando com links e imagens**  
Na seção um usamos um `<h2></h2>` para colocar um título na seção. Em seguida, usamos um parágrafo (`<p></p>`) com um link aninhado nele (`<a></a>`) para transformar parte do texto em um link clicável. Agora, adicionamos outro `<a></a>` com um `<img />` aninhado nele para mostrar uma foto de gato que é clicável: ao clicar na foto, você deve ser redirecionado para o aplicativo do gato.  
Duas coisas são importantes aqui (acredito que já falei sobre isso no outro documento, mas vou escrever aqui novamente):  
1. A `<a></a>` deve *sempre* ter o atributo *href* (onde será colocado o link).  
2. O `<img />` não tem uma tag de fechamento e deve *sempre* ter os atributos *src* e *alt*: O primeiro é para indicar a localização da imagem, e o segundo é para dar um texto alternativo para a imagem (caso a imagem não carregue ou o usuário não possa vê-la).  

#### **2.2.2. Seção Dois: listas**  
Na seção dois, temos um heading para denominar um *label* para a seção (`<h2></h2>`). Cada lista (temos duas) terá:  
1. Um heading (`<h3></h3>`) para nos dizer qual é o "nome" da lista.
2. Um `<ul></ul>` (apenas na primeira lista, que é não-ordenada).
3. Um `<ol></ol>` (apenas na segunda lista, que é uma lista ordenada).
4. Alguns `<li></li>` indentadas ao `<ul></ul>` e 
`<ol></ol>`.
5. Um `<figure></figure>` com um `<img />` e um `<figcaption></figcaption>` indentados. Deve ser uma imagem que represente a lista, com uma legenda abaixo da imagem.  
6. Utilizou-se `<strong></strong>` e `<em></em>` para destacar algum texto dentro do `<figcaption></figcaption>`.  

#### **Seção Três: formulário**  
Acredito que os formulários são a coisa mais complicadas em HTML. Nesta seção, criamos um formulário simples com dois campos.  
No primeiro campo, queremos saber se seu gato é um gato *indoor* ou *outdoor*, enquanto no segundo campo queremos saber o "tipo" de gato que o usuário tem. Também temos um campo para os usuários enviarem uma URL para uma foto de gato.  
Em `<form>>/form>` adicionamos o atributo *action* para mostrar para onde o formulário deve ser enviado.  
No primeiro campo do formulário, nós:  

- Utilizamos o `<fieldset></fieldset>` aninhado no `<form></form>` para agrupar alguns elementos do formulário.
- Aninhado ao `<fieldset></fieldset>`, temos o `<legend></legend>` para etiquetar o `<fieldset></fieldset>`.
- Um `<label></label>` aninhado ao `<fieldset></fieldset>` e um `<input></input>` aninhado ao `<label></label>`. O input recebe os atributos *value* ("*indoor*" ou "*outdoor*"), *name* (neste caso, ambos têm recebem o valor "*indoor-outdoor*", visto que pertencem à mesma etiqueta), *type* (valor "*radio*" neste caso, o que significa que é um campo de seleção) e uma "*id*" ("*indoor*" ou "*outdoor*", necessitando ser o mesmo valor do atributo *value*).  

No segundo campo nós:  

- Utilizamos o `<fieldset></fieldset>` aninhado ao `<form></form>` para agrupar alguns elementos do formulário.
- Aninhado ao `<fieldset></fieldset>`, temos um `<legend></legend>` para etiquetar o `<fieldset></fieldset>`.
- Três `<label></label>` e três `<input></input>` aninhados ao `<fieldset></fieldset>`. Cada `<label></label>` recebe um atributo *for* apontado para o *id* do `<input></input>`. Isso é comum quando temos um `<input type="checkbox"></input>`, em que o *for* recebe o mesmo valor que o. Lembre que é boa prática adicionar o atributo *value* a checkboxes e botões com *type* "*radio*", e é mais conveniente se *id* e *value* tiverem os mesmos valores.  

Finalmente, temos um `<input></input>` com atributo *type=text* para receber uma URL do usuário. Adicionamos um botão "*submit*" também. Então, o *type* do botão é "*submit*". Quando temos um `<input></input>` com atributo *type=text*, podemos adicionar um atributo *placeholder* (um texto simples) no `<input></input>`.  

### **Parte Três: footer**  
O `<footer></footer>` é o último elemento da página. Neste caso, há apenas um `<p></p>` com um `<a></a>` aninhado que enviará para o website do FreeCodeCamp quando clicado.  

## **3. Conclusion**  
Acredito que este pequeno projeto é um bom começo para aqueles que querem começar a estudar HTML e não sabem por onde começar. Não é muito difícil de entender os conceitos ensinados lá, é tudo bem explicado e acredito que é amigável para quem é iniciante.
