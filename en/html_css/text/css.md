# **CSS notes**

## **Table of content**  

|Table of contents|
|--------|
|[1. Definition](#1-definition)|
|[2. Linking HTML and CSS](#2-linking-html-and-css)|
|[3. The anatomy of CSS](#3-the-anatomy-of-css)|
|[3.1. CSS selectors](#31-css-selectors)|
|[3.2. Background style](#32-background-style)|
|[3.3. Text styling](#33-text-styling)|
|[3.4. Pseudo-class](#34-pseudo-class)|
|[3.5. Display property](#35-display-property)|
|[3.6. Box model](#36-box-model)|
|[3.6.1. Margin](#361-margin)|
[3.6.2. Border](#362-border)|
[3.6.3. Padding](#363-padding)|
[3.6.4. The box size property](#364-the-box-size-property)|
|[4. Css Units](#4-css-units)|  
### **1. Definition**  
CSS is an acronym for *Cascade Style Sheet*. This means that CSS is what we use to style a page or an app. For front-end developers, CSS is really important, since it is the language that reproduces everything designed in a prototype.  
>As you can see, CSS is not a programming language!  

#### **1.1. IMPORTANT**  

>**I decided to write the definition of *viewport* as a topic because it is not a common definition to see around. The *Viewport* is the usable size of the browser screen, i.e. the area where the content of the page or app is shown to the user. I created an empty HTML document just to open it in the browser to better illustrate the concept of *viewport*. The result can be seen below in Figure 1, where the *viewport* is all the black space of the screen!**  

Figure 1: the viewport
![Viewport](/src/example.JPG)  

### **2. Linking HTML and CSS**  
CSS can be written directly in the HTML file by using the `<style></style>` element. However, it will increase the size of your HTML file. Generally, almost all projects have a CSS file separate from the HTML file and link it with a `<link />` element inside the `<head></head>` element, as you can see below:  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title of your page here</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        
    </body>
</html>
```  

As you can see above, two attributes will be given to `<link />` element: "rel" (for "relation" between the link and the document) and "href" (specifies the page itself).  

### **3. The anatomy of CSS**  
You can see how we write a CSS rule below:  

```css
selector {
    attribute: value;
}
```  

As you can see above, we use braces to mark the beginning and the end of writing the attributes. After all values we use a semicolon to demonstrate the end of the attribute.  

#### **3.1. CSS selectors**  
We need selectors to specify which elements on the page we are trying to style. In summary, we have four selectors, as can be seen in the table below:  

Table 1: CSS selectors  

|Selector|Priority|Function|
|:------:|:------:|:------:|
|   *    |  None  |Select all|
|   #id  |   1    |Select by HTML id attribute|
| .class |   2    |Select by HTML class attribute|
|element |   3    |Select by HTML element|  

Now is where some rules about CSS make sense. As you can see in Table 1, there is a priority for each CSS selector. This means that a priority will be applied if you write two CSS sentences for the same thing. Let's look at an example:  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title of your page here</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h2 id="my-header"><strong>My header text</strong></h2>   
        <h2> My other header text</h2>     
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

According to Table 1, the output will be an `<h2>` header with a justified text alignment, and all other `<h2>` will be center-aligned. This tells us that CSS works not only with priority, but also with *specificity*. To be even more specific, you can use more than one type of selector, as we will see in the example below:  

```css
#my-header h2 {
    text-align: center;
    color: red;
}
```  

As you can see above, the output would be that *only* the header `<h2>` with the *"id "* "*my-header*" would be styled with red centered text. Therefore, the more specific we are when writing selectors, the better it will be, which is why we should use *"id"* and *"class"* attributes for the same elements we want to style in CSS.  

Another thing about CSS is that if you use the same selector more than once, it will always assume the last one to be the real one. Let's look at an example:  

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

The output will be all headings `<h2>` with a justified text alignment and all text `<h2>` will show a blue color. So, this is the meaning of a *cascade* in the style sheet.  
Finally, selectors can be grouped together if they will have the same attributes.  

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Title of your page here</title>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h2 id="my-header"><strong>My header text</strong></h2>   
        <h3> My other header text</h3> 
        <p>Here we show a paragraph with something written in it.</p>    
    </body>
</html>
```

```css
h2, h3, p {
    text-align: center;
    color: black;
}
```  

The output is that all `<h2>`, `<h3>`, and `<p>` HTML elements will be center-aligned and will have a black color.  

#### **3.2. Background style**  
We can add an image in the viewport background. Since the image must appear throughout the page, we must use the *"background-image"* property on the `<body></body>` to set a background image by using the *"url()"* function as its value. This function takes as an attribute the location where we have our image.  

#### **3.3. Text styling**  
We have many text style properties, which *"font-family"*, *"font-size"*, *"font-weight"* and *"font-style"* are the most common. These styling properties can get the following values:  

```css
h1 {
    font-family: family-name generic-family; /* ("Times New Roman", serif), e.g. */ 
    font-size: px(or em, or rem); /* (14px), e.g. */
    font-weight: 400; /* (any number between 100 and 900, and "bold", "black", and so on), e.g. */
    font-style: one-style; /* (italic, oblique, normal, initial or inherit), e.g. */
}
```  

Another style property commonly used to style a text is the *"text-align"*. This property gets the following values: "center", "left", "right", or "justify". Another thing about HTML text is that all unordered lists (`<ul></ul>`) and links (`<a></a>`) have "decorations", like a bullet point or a line, e.g. This is why we use the *"text-decoration"* property and set "none" as its value to delete these "decorations".  

#### **3.4. Pseudo-class**  
Pseudo-classes are used in special states of an element, such as when you move the mouse pointer over a link, e.g. we can see many of them in [this MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).  

#### **3.5. Display property**  
The *"display"* property is one of the most important properties in CSS. It will set the type of rendering box of an element. It can get many values, which "inline-block", "flex", "inline-flex" and "grid" are used more commonly. This property accepts a "none" value, which means that the element will not be showed in the screen. The main value is "block", which means that each element occupies the entire row width. Now, let's see the difference between block and inline display:  

|**Block**|**Inline**|
|---------|----------|
|The element occupies the entire row, pushing the next element down|Elements side by side|
|`width` and `height` work fine|`width`and `height` don't work|
|`padding`, `margin` and `border` work normally|`padding`, `margin`and `border` work just for left and right|

We can see the table with all values for *"display"* property [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display).  

#### **3.6. Box Model**  

Figure 2: Box Model representation
![Box Model representation](https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png)  
Source: [gfc global](https://edu.gcfglobal.org/)  

*Box Model* is the model that all developers need to keep in mind when styling a page. This model assumes that *everything* inside an HTML document is a box. Why a box and not a circle, triangle, or anything else? Well, just take a look at your monitor and you will see that it is a rectangle, like a box! Still, we assume that the box *contains* the elements inside itself. As you can see from Figure 2, the *Box Model* has four characteristics: *"content"*, *"padding"*, *"border"*, and *"margin"*.  

- Content box: in short, it is the HTML elements (tags) and everything inside them;  
- Padding box: this is the space between the *"content"* and borders (*"border"*);  
- Border box (*"border"*): adds a boundary (a border) around the HTML element. It is like the outer borders of the box;
- Margin box: it is the space around the HTML element relative to the viewport (useful part of the browser screen).

##### **3.6.1. Margin**  
Margins are important for controlling the spaces *around* elements. We have five properties that can control margins: *"margin-top"*, *"margin-right"*, *"margin-bottom"*, *"margin-left"* and *"margin"*. The last one is a shorthand for many ways the define the other four together, as we can see below:  

```css
h1{
margin: top right bottom left;

margin: top horizontal bottom;

margin: vertical horizontal;

margin: all;
}
```  

Remember that the `<body>` of the viewport already has a *"margin"* set to 8px. Therefore, it is common to "reset" the margin of `<body>` before writing any other CSS properties. To do this, just set the margins to zero. Also, we need to remember that **margin collapsing** is only applied to `display: block` elements, which will not sum their vertical margin (if the number is the same), while `display: inline` elements will sum their horizontal margins, ignoring margin collapsing.  
It is important to note that the value `auto` for `display: block` will be applied only for horizontal.

##### **3.6.2. Border**  
The border is the space between the padding and the margin. The border defines the border style of an HTML element. This can be done by setting three properties: *"border-width"*, *"border-style"*, and *"border-color"*. We can use *"border"* as a shorthand for grouping the three properties, as we can see below:  

```css
h1 {
    border: width style color;
    border: style color;
    border: width style;
    border: style;
}
```  

`border` and `outline` properties are different because the first one is used within the box measure, and the last one is used **outside** of the box measure.  
To see all values that *"border-style"* property can receive, take a look at [this MDN page](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style).  

##### **3.6.3. Padding**
Padding is the space between the element and its borders. The `<body>` viewport also has a *"padding"* set to 8px, and it is common to "reset" the paddings of the `<body>` before writing any other CSS properties, by setting it to zero (just like margins). Like margins, paddings can be written in five different ways: *"padding-top"*, *"padding-right"*, *"padding-bottom"*, *"padding-left"* and *"padding"*. The last one is a shorthand to define in many ways the other four together, as we can see below:  

```css
h1 {
padding: top right bottom left;

padding: top horizontal bottom;

padding: vertical horizontal;

padding: all;
}
```  

It's important to note that doesn't exist `auto` value for `padding` property.  

##### **3.6.4. The *"box-size"* property**  
The actual size of the content will be calculated by:  
 $$realSize = contentSize + paddingSize + borderSize + marginSize$$  
 
 This equation can be applied because originally the *"box-size"* property is set to "content-box". As you can imagine, this is not a good approach if we think about how the content will be displayed at all screen sizes, because if we set a width of 100px for the content, padding, border and margin (each), the total width of the content (box) will be 400px.  
We can set the *"box-size"* property to "border-box" to avoid this. So if I want a content that is 100px wide, it will consider the size of the border, padding and margins *automatically*. So if I set 100px wide for the content, but I want a padding, margin and border of 20px each, that means the content will be 40px and padding, margin and border will be 20px each (60px added together), adding up to 100px for the box!  

### **4. CSS Units**  
I will show here only the most used CSS units. If we need more information about all CSS units, just take a look at [this MDN page](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units).  

Table 2: Mais CSS units
|  CSS Unities  | Símbolo  |Tipo de unidade|Referência|Conceito|
|:-------------:|:--------:|:-------------:|:--------:|:------:|
|   Pixel       |    px    |    Absolute   |   None   |Based on the reference pixel¹|
|    em         |    em    |    Relative   |  Parent  |Measurement based on the font size of the parent element|
|    rem        |    rem   |    Relative   |Root(HTML)|Measurement based on the font size of the HTML document|
|Viewport Width |    vw    |    Relative   | Viewport |1vw = 1% of the total browser viewport width|
|Viewport Height|    vh    |    Relative   | Viewport |1vh = 1% of the total browser viewport height|
|  Porcentagem  |     %    |    Relative   |  Parent  |Always based on the measurements of the parent element|  

The browser offers configuration options for the user. One of the most important settings that the user can change in the browser is the font size. All modern browsers support this setting change. In my case I use Brave, and the font measures 16px when set to "medium". Therefore, Brave's default font size is 16px.  
This is one of the things we have to take into consideration when we are creating pages and apps, because text elements are perhaps the most probably to not respecting the size of the elements when we change the screen size. Therefore, we have to take care of the units of measure for each element that we use when building apps and websites.  
In short, the units fall into two groups: *absolute* and *relative*. Absolute units do not change depending on the device. This means that if you set the size of a font to 20px or the size of a div to 500px, they will not change when displayed on a larger or smaller screen, and not even when the user changes the font size setting of the browser. This is why absolute measurements are often seen, but for practical purposes they should not be used much if you think about responsiveness of applications, because they "*don't respond*" to varying screen size.  
Relative units, as the name implies, vary according to some standard measurement or the measurement of another element. For example, it is common to set the *"font-size"* of `<html></html>` to a percentage value that equals a 10px font, and from there, use the unit *rem* to set the size of any element (text or otherwise) in the app or site, since it is easier to calculate. For example, as I said before, Brave has an average font size of 16px. If I want to set it to a 10px ratio, I can just put `font-size: 62.5%;` for the root (html) element.  
The absolute unit that is most used for development is pixel. The others are hardly used in website and application development. The use of relative units covers many more options, as can be seen in Table 2 above. This is because absolute units are more "fixed", which makes their use more common for printed material than for material shown on screen. Therefore, for website and app development it is more common to use relative units, which "rem" and "%" being the most commonly used for this. There is a W3C [article](https://www.w3.org/Style/Examples/007/units.en.html) that covers this.
<hr style="background-color:#191919; border-color:#191919;height:2px;" />  

I believe this is all I should write without referring to the CSS attributes for now. As I study new things about CSS, I will write about it here.

>**It is important to say that it is counterproductive trying to memorize all the existing CSS attributes. We don't need to do this, as we have extensive documentations available, such as the [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).**