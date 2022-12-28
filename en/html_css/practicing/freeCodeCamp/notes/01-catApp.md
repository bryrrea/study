# **Cat app**  

## **1. Objective**  
This simple project was created to teach HTML basic elements, such as paragraphs (`<p></p>`), headings (`<h1></h1>...<h6></h6>`), form elements, and so on.  

## **2. Elements used**  
I'll split by sections to explain it better.  
First of all, we have the HTML "bone" structure. You can read [here](/en/html_css/text/html.md/#3-basic-structure-of-an-html-document-the-skeleton).  
After, we should know that we can use `<h1></h1>` just one time. So be careful to choose the right text for it!  

### **2.1. Part One: thinking on project**  
We always should think about the project: functionalities, what users will see, and so on.  
This is a simple project. We want to create an app that shows or redirects to cat photos. Inside the `<body></body>`, we will have the `<main></main>` and the `<footer></footer>`.  

### **2.2. Part Two: the main**  
The main will have three sections with different functions.  

- The first section is to show some cat photos.
- The second section is to bring some curiosities about cats.
- The third section is to work with a form about cats.  

#### **2.2.1. Section one: working with images and links**  
In section one we use a heading (`<h2></h2>`) to expose a "title" for the section. After, we use a paragraph (`<p></p>`) with a link nested on it (`<a></a>`) to transform part of the text into a clickable link. Now, we add another `<a></a>` with an `<img />` nested on it to show a cat photo that is clickable: when you click the photo, you should be redirected to the cat app.  
Two things are important here (I believe I already talk about it in the other document, but I'll write here again):  

1. The `<a></a>` should *always* have the *href* attribute (where link will be placed).  
2. The `<img />` doesn't have a closing tag and should *always* have *src* and *alt* attributes. The first one is to tell where the image is, and the second one is to give an alternative text for the image (in case the image has not loaded and/or the user cannot see the image).  

#### **2.2.2. Section two: lists**  
In section two we have a heading to tell us that we will see some cat lists (`<h2></h2>`). Every list (we have two) will have:  

1. A heading (`<h3></h3>`) to tell us the name of the list.
2. A `<ul></ul>` (only in the first list, which is an unordered list).
3. A `<ol></ol>` (only in the second list, which is an ordered list).
4. Some `<li></li>` nested to `<ul></ul>` or `<ol></ol>`.
5. A `<figure></figure>` with an `<img />` and a `<figcaption></figcaption>` nested on it. This would be an image that represents the list, with a caption below the image.
6. We had use `<strong></strong>` and `<em></em>` to highlight some text inside the `<figcaption></figcaption>`.  

#### **2.2.3. Section three: form**  
I believe that forms are the most trick thing in HTML. In this section, we created a simple form with two fields.  
In the first field, we want to know if your cat is an indoor or outdoor cat, while in the second field we want to know the "type" of cat the user have. We also have a field to users submit an URL for a cat photo.  
In `<form></form>` we add the *"action"* attribute to show where the form should be sent.  
In the first field of the form we:  

- Use a `<fieldset></fieldset>` nested on `<form></form>` to group some elements of the form.
- Nested to the `<fieldset></fieldset>`, we have a `<legend></legend>` to label the `<fieldset></fieldset>`.
- A `<label></label>` nested to `<fieldset></fieldset>` and an `<input></input>` nested to `<label></label>`. This input received the attributes *value* ("indoor" or "outdoor"), *name* (in this case both have the same "indoor-outdoor", as they belong to the same label), *type* ("radio", which means they are a selection field) and *id* ("indoor" or "outdoor", needing to be the same as the *value* attribute).  

In the second field we:  

- Use a `<fieldset></fieldset>` nested on `<form></form>` to group some elements of the form.
- Nested to the `<fieldset></fieldset>`, we have a `<legend></legend>` to label the `<fieldset></fieldset>`.
- Three `<label></label>` and three `<input></input>` nested to `<fieldset></fieldset>`. Each `<label></label>` received an attribute *for* to point to the id of the input. It is common when we have checkbox type input, which the input *id* and the label *for* have the same value. Remember that it is a good practice add a *value* attribute to checkboxes and radio buttons, and it is more convenient if the *value* has the same *id* value.  

Finally, we have an `<input></input>` with *type=text* attribute to receive an URL from the user. We add a button to submit the URL too. So, the *type* of the button is "submit". When we have an `<input></input>` with *type=text* attribute, we can add a *placeholder* (a simple text) as an `<input></input>` attribute.  

### **Part three: the footer**  
The `<footer></footer>` is the last element in the page. In this case, it has just a `<p></p>` with a nested `<a></a>` that send you to FreeCodeCamp website when clicked.  

## **3. Conclusion**  
I believe this little project is a good start for those who want to start studying HTML and don't know where to begin. It is not difficult to understand the concepts taught there, and I believe it is beginner-friendly.
