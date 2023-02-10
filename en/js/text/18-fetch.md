# 18. Fetch API

> **At this moment, I'll only focus on get requests.**

## 18.1. Definition

The **fetch API** is an API that makes HTTP requests to obtain data from websites and applications. The fetch API also enables the sending of data and information to the website or application.

## 18.2. Usage

The fetch API is the most recommended request method if we need simpler handling of the required and received data. Another very used method is `axios`, since it offers greater control over the requests - including canceling them. However, the fetch API is more widely used than `axios` in simpler projects, since this API is **natively integrated** in the vast majority of the most widely used browsers.

## 18.3. Functioning and syntax

The fetch API is a **_Promise-based_** API, that is, the request receives a **`Promise`** as a response, denoting that the sending and receiving of data can occur in an **asynchronous** manner.

```javascript
fetch(url);
```

Above, we have the syntax for using the fetch API method. This method can receive several parameters, but two are the most widely used: a URL - an mandatory parameter, since we need a URL to obtain the data - and `init` - an object with information such as `headers` and `method`, the latter being `get`, `post`, `delete`, etc.
For a better understanding of the use of this method, let's go to a real example. First, I created an HTML page just to open it in the browser to run the script in the same console.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <script src="test.js"></script>
    </body>
</html>
```

Next, we will make a request to the `reqres` API, a free testing API.

```javascript
const endpoint = "https://reqres.in/api/users";
const request = fetch(endpoint);

console.log(request);
```

Take a look below at what is shown in the console after making the request.

|       1 ![Results](/src/01.png)        |             2 ![Prototype](/src/02.png)             |
| :------------------------------------: | :-------------------------------------------------: |
| 3 ![PromiseResult Object](/src/03.png) | 4 ![Prototype object of PromiseResult](/src/04.png) |

Image 1 shows that the request returns a `Promise` - as stated before. This `Promise` is, in fact, an **object** containing three `entries`: two arrays with one object each (`Prototype` and `PromiseResult`) and an array _PromiseState_ that returns the **state** of the `Promise`. But didn't `Promise` come back as `pending`? How come the `entry` _PromiseState_ is with the `fulfilled` `status`? Although the `Promise` object is `pending`, it returns an object of type `Response` (`PromiseResult`) itself. This means that the state of `Promise` can and should change to `fulfilled`, but the data returned is inaccessible, since `Promise` is pending.
Image 2 details the inputs of the `Promise`, while image 3 details the request-response object.
Now pay attention to image 4: the response object carries with it an object called `Prototype` which is of type `Response`. This object contains **all** the properties and methods that can be used to work with the data returned by the request. Therefore, to use the returned data, we must work with the `then()` method - as we have seen in `Promises` - or we must create an asynchronous function.

```javascript
const endpoint = "https://reqres.in/api/users";
const request = fetch(endpoint);

const result = request
    .then((resultToJson) => resultToJson.json())
    .then((data) => console.log(data))
    .catch((error) => "Error: " + error);
```

Above, the returned data is converted to a JSON object and then printed to the browser console - as you can see in image 5.

| 5 ![Response handled](/src/05.png) | 6 ![Resolution of the retrieved data](/src/06.png) |
| :--------------------------------: | :------------------------------------------------: |

Image 6 shows the obtained data converted to a JSON object. From this we can do whatever we want with our data. Finally, the `.catch()` method is used to expose to the user any errors that may return from the request, such as data not being retrieved due to a typo in the URL, for example, because it returns a `404` error - page not found or not existing.
In short, this is how we work with the fetch API: we supply a URL when we use the `fetch()` method, we handle the `Promise` with `.then()` to handle the data as we wish, and `.catch()` to discover any request errors. However, does `.catch()` return the error and the request is resolved as a failure? **No**! Amazingly enough, the request only fails if there is a connection problem. For example, if you misspell the address you want to extract data from, `catch()` will `catch' the error, but still return a `Response` object.

## 18.3 Parallel and sequential requests

The **parallel requests** are those that occur "side-by-side", that is, they are requests that do not depend on each other in order to happen. Sequential requests are those that occur one **after** the other, either because one depends on the other or by choice of the developer.

```javascript
const endpoint01 = "https://reqres.in/api/users";
const endpoint02 = "https://reqres.in/api/unknown";

const fetch01 = fetch(endpoint01);
const fetch02 = fetch(endpoint02);

Promise.all([fetch01, fetch02])
    .then((resultsToJson) =>
        Promise.all(resultsToJson.map((resultToJson) => resultToJson.json()))
    )
    .then((data) => console.log(data))
    .catch((error = "Error: " + error));
```

The code above performs two **parallel** requests and, starting with the `Promise.all()` method, waits for both `Promises` to complete before changing the `Array` of `Promises` by a `map()`, transforming the data into two JSON objects (one for each request) belonging to one `Array`. The result can be seen in the image below:

![Result of the two parallel requests](/src/07.png)

```javascript
const endpoint01 = "https://reqres.in/api/users";
const endpoint02 = "https://reqres.in/api/unknown";

fetch(endpoint01)
    .then((responseToJson01) => responseToJson01.json())
    .then((data) => {
        console.log(data);
        return fetch(endpoint02);
    })
    .then((responseToJson02) => responseToJson02.json())
    .then((data) => console.log(data))
    .catch((error) => "Error: " + error);
```

The above code performs two **sequential** requests, i.e. the first request is made and the result is printed to the console. Then the second request is made and printed to the console. The result is two isolated JSON objects, as shown in the image below.

![Sequential request](/src/08.png)

## 18.4. Asynchronous functions

As we already know, fetch API returns a _Promise_. Thus, we can use asynchronous functions to fetch and handle the data.

```javascript
async function getData() {
    const endpoint01 = "https://reqres.in/api/users";
    const endpoint02 = "https://reqres.in/api/unknown";

    try {
        const fetching01 = await fetch(endpoint01);
        const responseToJson01 = await fetching01.json();

        const fetching02 = await fetch(endpoint02);
        const responseToJson02 = await fetching02.json();

        console.log(responseToJson01, responseToJson02);
    } catch (error) {
        return console.error(error);
    }
}

getData();
```

The above function works asynchronously and sequentially: it "stops" the code to make the request, and after it is resolved, it converts the response to JSON, doing the same for the second request. Finally, it prints both objects to the console and uses the `catch()` statement to handle printing to the console if there is an error in the request. The image below shows the result.

![Result of asynchronous sequential request](/src/09.png)

Asynchronous functions can also handle parallel requests.

```javascript
async function getData() {
    const endpoint01 = "https://reqres.in/api/users";
    const endpoint02 = "https://reqres.in/api/unknown";

    try {
        const [fetching01, fetching02] = await Promise.all(
            fetch(endpoint01),
            fetch(endpoint02)
        );

        const responseToJson01 = await fetching01.json();
        const responseToJson02 = await fetching02.json();

        console.log(responseToJson01, responseToJson02);
    } catch (error) {
        return console.error(error);
    }
}

getData();
```

The function above uses `Promise.all()` to make the two parallel requests asynchronously, and then converts the data to JSON asynchronously to print to the console. The result obtained is identical to the previous one, and can be seen in the image below:

![Asynchronous parallel request result](/src/10.png)
