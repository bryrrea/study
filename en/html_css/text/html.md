# **HTML notes**

## **Table of content**  

|Table of contents|
|--------|
|[1. Definition](#1-definition)|
|[2. The anatomy of an element/tag](#2-the-anatomy-of-an-elementtag)|
|[3. Basic structure of an HTML document: the "skeleton"](#3-basic-structure-of-an-html-document-the-skeleton)|

### **1. Definition**  
HTML is an acronym for *HyperText Markup Language*. This means that HTML is a language used to mark up text.  
>As you can see, HTML is not a programming language!  

### **2. The anatomy of an element/tag**  
An element is how we call the markup used to show the beginning and the end of an HTML element in an HTML document.  
Almost all tags need to be "open" and "closed". The opening tag is written as "`<tag>`".The closing tag is almost the same as opening, but has an additional character: "/". Therefore, the closing tag is written as `</tag>`. Some tags don't have a closing tag. We say they "close themselves", and it is a good practice to use a "/" character at the end of them. An exemple of a tag that don't need a closing tag is `<img>`, which is written as `<img src="" alt="" />`.  

### **3. Basic structure of an HTML document: the "skeleton"**  

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

We need to determine the HTML version that has been used in the file. HTML is in its 5th version, and we need to "tell" our browsers about it. So, the line with the *"DOCTYPE"* tag "says" to the browser: "Hey, browser, I'm an HTML5 file! Please read me correctly!".  
Another important thing that browsers and search engines need to know is the *human language* that HTML document is using. To do this, we need to introduce an *attribute* to the HTML tag. In the code above, on the second line, we are "telling" browsers and search engines: "*Hey, browser! Hey, search engine! I'm using English to communicate with people, right?*".Another important thing to note: all HTML files need the "`<html>`" tag.  
After the opening of the html tag, we have the "*head*" tag. But before that, take a look at the code with the basic structure of an HTML file. If you are a good observer, you have seen that everything written *after* the HTML tag has a separation in the left margin, as if it was written *inside* the HTML tag. And, yeah, you are right! It was written inside the HTML tag! This is called *indentation*!  
>We can say that indentation means that something is inside something else. For the basic structure, we can say that **everything** needs to be inside the html tag! Note that if you don't use indentation, the document will work the same way. So, why is it a good practice to use indentation? **Because it makes it easier for other people and the browser to read!**  

Alright. Now that we know what indentation is, let's move on. The `<head>` is, like the tag says by itself, the head of the document. It's inside this tag that we will add important information about the document, some of which will appear to the user (such as the `<title>` of the page) and some (actually almost all) will not be shown to users (such as `<meta>`).  
Speaking about `<title>`, this is the text that is shown in your browser tab. It help the user to know what page is this and is very important for search engines. So the title of your page or webapp should be a perfect summary of the app or page.  
The `<meta>` is really important for search engines and to your browser. This tag is followed by attributes like "*charset*" ("telling" to browser the character set that will be used). The value after the "=" sign is called (surprise, surprise!) "*value*". It will almost always be enclosed in double quotes marks.  
In the 5th line (`<meta name="viewport" content="width=device-width, initial-scale=1.0" />`), we are "telling" the browser that the page/app needs to be showed on all screen sizes. This is why we use "*name=viewport*". Viewport means "the full useful size of the screen". If you create an HTML document, paste the basic structure that I wrote here, and open the file in your browser, you'll get a white screen. The viewport will be *the whole white area* of your screen! The "*content="device-width*" attribute is saying that all content needs to fit the size of the width of the device the page was opened on, and the "*initial-scale=1.0*" refers to the "zoom". By setting this value to "*1.0*", you are telling to the browser: "*Hey, browser, the initial scale of this doc is 100% zoom, right?*".  
Finally, let's talk about the `<body>`. It's inside this tag that everything that users see will be placed. Simple as that. Tags like `<header>`, `<main>` and `<footer>` will be placed inside `<body>` to give a shape to your app or webpage. As you can see, we close the HTML tag with `</html>`, telling the browser that our HTML document has finished.  

I believe this is all I should write without having to refer to the HTML documentation to specify the importance that each tag/element has. So from now it's about tags/elements. If there is anything else more useful, I will add here in the future.  

>**It is important to say that it is counterproductive trying to memorize all the existing tags/elements. We don't need to do this, as we have extensive documentation available, such as the [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).**