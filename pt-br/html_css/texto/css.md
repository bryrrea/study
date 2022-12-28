# **CSS notes**

## **Sumário**  

|Sumário|
|--------|
|[1. Definição](#1-definição)|
|[2. Ligando HTML e CSS](#2-ligando-html-e-css)|
|[3. Anatomia CSS](#3-anatomia-css)|
|[3.1. Seletores CSS](#31-seletores-css)|
|[3.2. Estilizando o background](#32-estilizando-o-background)|
|[3.3. Estilização do texto](#33-estilização-do-texto)|
|[3.4. Pseudo-classes](#34-pseudo-classes)|
|[3.5. Propriedade display](#35-propriedade-display)|
|[3.6. Box model](#36-box-model)|
|[3.6.1. Margens](#361-margens)|
|[3.6.2. Preenchimentos](#362-preenchimentos)|
|[3.6.3. Bordas](#363-bordas)|
|[3.6.4. Propriedade box-size](#364-propriedade-box-size)|
|[4. Unidades CSS](#4-unidades-css)|

### **1. Definição**  
CSS é um acrônimo para *Cascade Style Sheet*. Isto significa que CSS é o que usamos para estilizar uma página ou um aplicativo. Para os desenvolvedores front-end, CSS é muito importante, já que é a linguagem que reproduz tudo que foi planejado em um protótipo.  
>Como você pode ver, CSS não é uma linguagem de programação!  

#### **1.1. IMPORTANTE**  

>**Decidi escrever a definição de *viewport* como um tópico porque não é uma definição comum de se ver por aí. *Viewport* é o tamanho útil da tela do navegador, isto é, a área onde o conteúdo da página ou app é mostrado para o usuário. Criei um documento HTML vazio apenas para abrir no navegador e ilustrar melhor o conceito de *viewport*. O resultado pode ser observado abaixo, na Figura 1, em que o *viewport* é todo o espaço preto da tela!**  

![Viewport](/src/example.JPG)  

### **2. Ligando HTML e CSS**  
O CSS pode ser escrito diretamente no arquivo HTML utilizando o elemento `<style></style>`. Entretanto, essa abordagem aumentará o tamanho do seu arquivo HTML. Geralmente, quase todos os projetos têm um arquivo CSS separado do arquivo HTML e se ligam via elemento `<link />` dentro do elemento `<head></head>`, como você pode ver abaixo:  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Título da sua página</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        
    </body>
</html>
```  

Como você pode ver acima, dois atributos serão dados ao elemento `<link />`: "rel" (para "relação" entre o link e o documento) e "href" (especifica o arquivo CSS).  

### **3. Anatomia CSS**  
O modo como se escreve uma regra CSS é mostrado abaixo:  

```css
seletor {
    atributo: valor;
}
```  

Como você pode ver acima, usam-se chaves para marcar o início e o fim da escrita dos atributos. Depois de todos os valores, usamos um ponto-e-vírgula para demonstrar o fim do atributo.  

### **3.1. Seletores CSS**  
Precisamos de seletores para especificar quais elementos na página que estamos tentando estilizar. Em resumo, temos quatro seletores, como pode ser visto na tabela abaixo:  

Tabela 1: Seletores CSS  

|Seletor|Prioridade|Função  |
|:------:|:-------:|:------:|
|   *    |  Nada  |Seleciona tudo|
|   #id  |   1    |Seleciona pelo atributo *"id"* do HTML|
| .class |   2    |Seleciona pelo atributo *"class"* do HTML|
|element |   3    |Seleciona pelo elemento CSS|  

Agora é onde algumas regras sobre o CSS fazem sentido. Como você pode ver na Tabela 1, há uma prioridade para cada seletor do CSS. Isto significa que uma prioridade será aplicada se você escrever duas sentenças CSS para a mesma coisa. Vejamos um exemplo:  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Título da sua página</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h2 id="my-header"><strong>Meu cabeçalho h2</strong></h2>   
        <h2> Meu outro cabeçalho h2</h2>     
    </body>
</html>
```

```css
h2 {
    text-align: center;
}

#my-header {
    text-align: justify;
}
```  

De acordo com a Tabela 1, o output será um cabeçalho `<h2>` com um alinhamento de texto justificado, e todos os outros `<h2>` serão alinhados ao centro. Isto nos diz que o CSS funciona não apenas com prioridade, mas também com *especificidade*. Para ser mais específico ainda, pode-se utilizar mais de um tipo de seletor, como veremos no exemplo abaixo:  

```css
#my-header h2 {
    text-align: center;
    color: red;
}
```  
Como pode ser visto acima, o output seria que *apenas* o cabeçalho `<h2>` contendo o *"id"* "*my-header*" seria estilizado com texto centralizado de cor vermelho. Portanto, quanto mais específico formos na escrita dos seletores, melhor será, e é por isso que devemos usar atributos *"id"* e *"class"* para os mesmos elementos que queremos estilizar no CSS.  
Outra coisa sobre o CSS é que se você utilizar o mesmo seletor mais de uma vez, ele assumirá sempre o último como verdadeiro. Vejamos um exemplo:  

```css
h2 {
    text-align: center;
    color: black;
}

h2 {
    text-align: justify;
    color: blue;
}
```  

A saída será todos os títulos `<h2>` com um alinhamento justificado e com cor azul. Portanto, este é o significado de uma *cascata* na folha de estilo.  
Finalmente, os seletores podem ser agrupados se tiverem os mesmos atributos.  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Título da sua página</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h2 id="my-header"><strong>Meu cabeçalho h2</strong></h2>   
        <h3> Meu cabeçalho h3</h3> 
        <p>Um parágrafo com algo escrito.</p>    
    </body>
</html>
```

```css
h2, h3, p {
    text-align: center;
    color: black;
}
```  

O output será que todos os elementos `<h2>`, `<h3>`, e `<p>` serão alinhados ao centro e terão cor preta.  

### **3.2. Estilizando o background**  
O projeto original tem uma imagem de fundo. Como a imagem deve aparecer em toda a página, devemos usar a propriedade *"background-image"* no elemento <body></body>` para definir uma imagem de fundo usando a função *"url()"* como valor. Esta função recebe como atributo o local em que temos nossa imagem.  
O `<body></body>` recebe outros dois atributos a serem mostrados em toda a página: *"font-family"* e *"padding"*. O *"font-family"* estabelecerá a mesma fonte em todo documento, e o *"padding"* é a distância entre o conteúdo e suas bordas (que será discutido em outro momento).  

### **3.3. Estilização do texto**  
Temos muitas propriedades de estilo de texto, em que *"font-family "*, *"font-size "*, *"font-weight "* e *"font-style "* são as mais comuns. Essas propriedades de estilo recebem os seguintes valores:  

```css
h1 {
    font-family: family-name generic-family; /* ("Times New Roman", serif), e.g. */ 
    font-size: px(or em, or rem); /* (14px), e.g. */
    font-weight: 400; /* (100 até 900 (só os inteiros, como 100, 200 etc.), e "bold", "black", etc.), e.g. */
    font-style: estilo; /* (italic, oblique, normal, initial or inherit), e.g. */
}
```  

Outra propriedade de estilo comumente utilizada para estilizar um texto é a *"text-align"*. Esta propriedade recebe os seguintes valores: *"center"*, *"left"*, *"right"*, ou *"justify"*. Neste projeto, os cabeçalhos e o primeiro elemento `<p></p>` foram setados no centro, enquanto a `<div></div>` com a classe "menu" e os elementos `<p></p>` com as classes *"flavour"* e *"desserts"* foram setados à esquerda. Ainda, a classe *"price"* do elemento `<p></p>` foi setada à direita.  
Outra coisa sobre o texto HTML é que todas as listas não ordenadas e links  têm "decorações", como um ponto ou uma linha, por exemplo. É por isso que usamos a propriedade texto-decoração e definimos "nenhum" como um valor para apagar estas "decorações". No projeto original, não usamos isto.  

### **3.4. Pseudo-classes**  
As pseudo-classes são utilizadas em estados especiais de um elemento, como quando você move o ponteiro do mouse sobre um link, por exemplo.  
No projeto original, usamos três pseudo-classes para estilizar o links do footer: ":visited", ":hover", e ":active". A primeira foi definida para mudar a cor do texto para preto depois de clicado; a segunda foi definida para mudar a cor do link para marrom quando passarmos o ponteiro do mouse sobre o link; e a terceira foi definida para marrom quando o link estiver ativo (ainda não clicado).  

### **3.5. Propriedade Display**  
A propriedade *"display"* é uma das propriedades mais importantes do CSS. Ela irá definir o tipo de renderização da caixa de um elemento. Ela pode obter muitos valores, em que "inline-block", "flex", "inline-flex" e "grid" são usados mais comumente. Esta propriedade aceita um valor "none", o que significa que o elemento não será mostrado na tela. O valor principal é "block", o que significa que cada elemento ocupa toda a largura da linha. A tabela abaixo mostra as diferenças entre os elementos com *display block* e *inline*.  

|***Block***|***Inline***|
|-----------|------------|
|O elemento ocupa a linha inteira, empurrando o próximo elemento para a próxima linha| Os elementos ficam lado a lado|
|`width` e `height` funcionam|`width`and `height` não funcionam|
|`padding`, `margin`e `border` funcionam normalmente|`padding`, `margin`and `border` funcionam apenas na horizontal|  

Podemos ver [aqui](https://developer.mozilla.org/en-US/docs/Web/CSS/display) a tabela com todos os valores para a propriedade *"display"*.  

### **3.6. Box Model**  

Figura 2: Representação do Box Model
![Box Model representation](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)  
Fonte: [gfc global](https://edu.gcfglobal.org/)  

*Box Model* é o modelo que todos os desenvolvedores precisam ter em mente para estilizar uma página. Este modelo assume que *tudo* dentro de um documento HTML é uma caixa. Por que uma caixa e não um círculo, um triângulo, ou qualquer outra coisa? Bem, basta dar uma olhada em seu monitor e você verá que ele é um retângulo, como uma caixa! Ainda, assumimos que a caixa *contém* os elementos dentro de si mesma. Como pode ser visto na Figura 2, o *Box Model* apresenta quatro características: *"conteúdo"* (ou *content*), *"preenchimento"* (ou *padding*), *"borda"* (ou *border*), e *"margem"* (ou *margin*).  

- *Content box*: em resumo, são os elementos HTML (tags) e tudo que há dentro deles;
- *Padding box*: este é o espaço entre o conteúdo (*content*) e as bordas (*border*) (ou o espaço ao redor do conteúdo (*content*));
- *Border box*: acrescenta um limite (uma borda) ao redor do elemento HTML. É como se fosse as bordas externas da caixa;
- *Margin box*: é o espaço em torno do elemento HTML em relação ao viewport (parte útil da tela do navegador).  

#### **3.6.1. Margens**  
As margens são importantes para controlar os espaços *ao redor* dos elementos. Temos cinco propriedades que podem controlar as margens: *"margin-top"*, *"margin-right"*, *"margin-bottom"*, *"margin-left"* e *"margin"*. Esta última é uma abreviação para definir de muitas maneiras as outras quatro juntas, como podemos ver abaixo:  

```css
h1 {
margin: top right bottom left;

margin: top horizontal bottom;

margin: vertical horizontal;

margin: all;
}
```  

Vale lembrar que o `<body>` do viewport do navegador já tem um *"margin"* setado para 8px. Por isso, é comum "reiniciar" a margem do `<body>` antes de escrevermos qualquer outra propriedade CSS. Para isso, é só setar as margens para zero. Também, precisamos lembrar que o ***margin collapsing*** é aplicado apenas para os elementos `display: block`, que não somarão a sua margem vertical, enquanto que os elementos `display: inline` somarão as suas margens horizontais, ignorando o margin collapsing.  
É importante salientar também que o valor `auto` só será aplicado na horizontal quando for `display: block`.

#### **3.6.2. Bordas**  
A borda é o espaço entre o estofamento e a margem. A borda define o estilo de borda de um elemento HTML. Isso pode ser feito definindo três propriedades: *"border-width"*, *"border-style"*, e *"border-color"*. Também podemos usar *"border"* como uma abreviação para agrupar as três propriedades, como podemos ver abaixo:  

```css
h1 {
    border: width style color;
    border: style color;
    border: width style;
    border: style;
}
```  

As propriedades `border` e `outline` são diferentes porque a primeira é utilizada na medida da caixa, e a última é utilizada **fora** da medida da caixa.  
Para ver todos os valores que a propriedade *"border-style"* pode receber, dê uma olhada [nesta página do MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style).  

#### **3.6.3. Preenchimentos**  
O *"padding"*, por outro lado, é o espaço entre o elemento e suas bordas. O `<body>` do viewport também tem um *"padding"* definido para 8px, e é comum "reiniciar" os paddings do `<body>` antes de escrever qualquer outra propriedade CSS, definindo-o para zero (assim como as margens). Como as margens, os paddings podem ser escritos de cinco maneiras diferentes: *"padding-top"*, *"padding-right"*, *"padding-bottom"*, *"padding-left"* e *"padding-right"*.  

```css
h1 {
padding: top right bottom left;

padding: top horizontal bottom;

padding: vertical horizontal;

padding: all;
}
```  

É importante salientar que não há o valor `auto` para a propriedade `padding`.  

#### **3.6.4. Propriedade *box-size***  
O tamanho real do conteúdo será calculado por:  
$$tamanhoReal = tamanhoConteudo + tamanhoPadding + tamanhoBorder + tamanhoMarginin$$  

Esta equação pode ser aplicada porque originalmente a propriedade *"box-size"* está definida como "content-box". Como você pode imaginar, esta não é uma boa abordagem se pensarmos em como o conteúdo será exibido em todos os tamanhos de tela, pois se definirmos uma largura de 100px para o conteúdo, estofamento, borda e margem (cada), a largura total do conteúdo (caixa) será de 400px.  
Podemos definir a propriedade *"box-size"* para "border-box" para evitar isto. Assim, se eu quiser um conteúdo com 100px de largura, ele levará em conta o tamanho da borda, do estofamento e das margens *automaticamente*. Portanto, se eu definir 100px de largura para o conteúdo, mas eu quero um padding, margin e border de 20px cada, isso significa que o conteúdo terá 40px e padding, margin e border terão 20px cada (60px somados), somando 100px para a caixa!  

### 4. Unidades CSS  
Aqui, abordarei apenas as unidades CSS mais utilizadas. Se for necessário obter informações sobre outras unidades, basta acessarmos [esta página do MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units).  

Tabela 2: Principais unidades de medidas em CSS
|   Unidade CSS | Símbolo  |Tipo de unidade|Referência|Conceito|
|:-------------:|:--------:|:-------------:|:--------:|:------:|
|   Pixel       |    px    |    Absoluta   |  Nenhuma |Baseado no pixel de referência¹|
|    em         |    em    |    Relativa   |   Pai    |Medida baseada no tamanho da fonte do elemento pai|
|    rem        |    rem   |    Relativa   |Root(HTML)|Medida baseada no tamanho da fonte do documento HTML|
|Viewport Width |    vw    |    Relativa   | Viewport |1vw = 1% da largura total do viewport do navegador|
|Viewport Height|    vh    |    Relativa   | Viewport |1vh = 1% da altura total do viewport do navegador|
|  Porcentagem  |     %    |    Relativa   |   Pai    |Sempre se baseia nas medidas do elemento pai|  

O navegador oferece opções de configuração para o usuário. Uma das configurações mais importantes que o usuário pode alterar no navegador é o tamanho da fonte. Todos os navegadores modernos suportam essa mudança de configuração. No meu caso, eu utilizo o Brave, e a fonte mede 16px quando setado como "médio". Portanto, o tamanho de fonte padrão do Brave é 16px.  
Isso é uma das coisas que temos que levar em consideração quando estamos criando páginas e apps, pois os elementos de texto talvez sejam os mais propensos a não respeitar o tamanho dos elementos quando mudamos o tamanho da tela. Por isso, devemos cuidar as unidades de medida de cada elemento que utilizamos na construção de apps e sites.  
Em suma, as unidades se dividem em dois grupos: *absolutas* e *relativas*. As unidades absolutas não mudam de acordo com o dispositivo. Isso quer dizer que se você definir o tamanho de uma fonte como 20px ou o tamanho de uma div como 500px, elas não mudarão quando mostradas em uma tela maior ou menor, e nem mesmo quando o usuário alterar a configuração de tamanho de fonte do navegador. É por isso que as medidas absolutas são vistas com frequência, mas para fins práticos não devem ser muito utilizadas se pensarmos na responsividade das aplicações, pois elas "*não respondem*" à variação do tamanho da tela.  
As unidades relativas, como o próprio nome diz, variam de acordo com alguma medida padrão ou com a medida de outro elemento. Por exemplo, é comum definir o *"font-size"* do `<html></html>` para um valor percentual que equivale a uma fonte de 10px e, a partir daí, utilizar a unidade *rem* para definir o tamanho de qualquer elemento (de texto ou não) do app ou site, visto que fica mais fácil de calcular. Por exemplo, como eu disse anteriormente, o Brave tem uma fonte média com tamanho de 16px. Se eu quiser definir ela para uma proporção de 10px, posso simplesmente colocar `font-size: 62.5%;` para o elemento root (html).  
A unidade absoluta mais utilizada para desenvolvimento é o px. As outras praticamente não são utilizadas em desenvolvimento de sites e aplicações. Já o uso das unidades relativas abrange bem mais opções, como pode ser visto na Tabela 2 acima. Isso se deve ao fato de as unidades absolutas serem mais "fixas", o que torna seu uso mais comum para material impresso do que para material mostrado em tela. Por isso, para desenvolvimento de sites e apps, é mais comum a utilização de unidades relativas, sendo "rem" e "%" as mais utilizadas para isso. Há um [artigo](https://www.w3.org/Style/Examples/007/units.pt_BR.html) da W3C que aborda isso.
<hr style="background-color:#191919; border-color:#191919;height:2px;" />  

Creio que isto é tudo que devo escrever sem me referir às propriedades do CSS por enquanto. Ao estudar coisas novas sobre o CSS, vou escrever sobre isso aqui.  

>**É importante dizer que é contraproducente tentar memorizar todos os atributos CSS existentes. Não precisamos fazer isso, já que temos à disposição documentações extensas, tal como o [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).**