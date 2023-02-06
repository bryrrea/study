[Versão em PT-BR aqui!](/pt-br/js/textos/05-objetosJs.md)

# 5. JavaScript Objects

## 5.1. Definition

In JavaScript, an object is a collection of properties, where each one consists of a name and a value. Objects are used in code to represent more realistic entities from the real world, such as people, places, things, and events.

## 5.2. The `this` keyword

The `this` keyword is used to refer to the current object being manipulated or the current execution context. The value of `this` can change depending on how the function is called.
There are five important characteristics about the use of `this`.

1.  The value of `this` is determined by the call context in which the function is executed. For example, if a function is called as a method of an object, `this` will be the object. If the function is called as a global function, `this` will be the global object.

2.  You can use the `this` keyword to refer to properties and methods of an object.

    ```javascript
    const obj = {
        name: "John",
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        },
    };

    obj.greet(); // Output: "Hello, my name is John"
    ```

3.  In a function that is used as a constructor (that is, when it is called with the `new` operator), the value of this is the object created by the constructor.

    ```javascript
    function Person(name) {
        this.name = name;
    }

    const john = new Person("John");
    console.log(john.name); // Output: "John"
    ```

4.  You can use the `bind()`, `call()`, or `apply()` function to explicitly change the value of `this`.

    ```javascript
    const obj = { name: "John" };

    function greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    greet.call(obj); // Output: "Hello, my name is John"
    ```

5.  In an arrow function, the value of this is determined by the scope where the function is defined, rather than how the function is called (lexical context). Below, `this.name` is not define at global context, and because of that, `this.name` returns `undefined`.

    ```javascript
    const obj = {
        name: "John",
        greet: () => {
            console.log(`Hello, my name is ${this.name}`);
        },
    };

    obj.greet(); // Output: "Hello, my name is undefined"
    ```

## 5.3. Anatomy of an object

An object in JavaScript is composed of properties and methods. Properties are name-value pairs that represent the characteristics of an object. Methods are functions that represent actions that an object can perform.

```javascript
const person = {
    name: "João",
    age: 30,
    height: 1.75,
    walk() {
        console.log("Walking...");
    },
    speak() {
        console.log("Speaking...");
    },
};
```

Above, an object "person" has been created with properties "name", "age", and "height", and methods "walk" and "speak".

## 5.4. Creating objects in JavaScript

### 5.4.1. Literal objects

It is an object notation that allows us to create an object and define its properties and methods directly in the notation. It is the simplest way to create objects in JavaScript. The previous example (which creates an object called "person") is an example of literal object creation.

### 5.4.2. Keyword `new`

The keyword `new` can be used to create an object from a constructor function. A constructor function is a special function that is used to initialize an object when it is created.

```javascript
function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.walk = function () {
        console.log("Walking...");
    };
    this.speak = function () {
        console.log("Speaking...");
    };
}

const person = new Person("John", 30, 1.75);
```

Above, a constructor function has been created to create an object called `Person`. Three properties and two methods are created for the object. The `this` operator refers to the object being created by the constructor. Finally, the `Person` function is called to create a new `Person` object with the help of the `new` operator, which keys "name", "age" and "height" receive values "John", 30 and 1.75, respectively.

### 5.4.3. Prototypes

In JavaScript, objects are created from prototypes. A prototype is a model object that serves as a base for creating other objects. When we create an object from a prototype, the new object inherits all the properties and methods of the prototype.

To create an object from a prototype, we can use the `Object.create()` method.

```javascript
const personPrototype = {
    walk() {
        console.log("Walking...");
    },
    talk() {
        console.log("Talking...");
    },
};

const person = Object.create(personPrototype);
person.name = "John";
person.age = 30;
person.height = 1.75;
```

In the code above, I created an object called `personPrototype` and used the `Object.create()` method to create a "new person" from this model.

### 5.4.4. `create()` Method

This method can also be used to create an object from a prototype and define the object's properties at creation.

```javascript
const personPrototype = {
    walk() {
        console.log("Walking...");
    },
    talk() {
        console.log("Talking...");
    },
};

const person = Object.create(personPrototype, {
    name: { value: "John" },
    age: { value: 30 },
    height: { value: 1.75 },
});
```

## 5.5. Querying and setting properties

To query the value of an object's property, simply access it using the dot operator (`.`) or the square bracket operator (`[]`).

```javascript
console.log(pessoa.name); // 'João'
console.log(pessoa["age"]); // 30
```

> **It is important to note that the naming of the property key cannot contain spaces if we want to use the dot operator to access a key.**

To set the value of a property, simply assign a new value to it, as shown below:

```javascript
pessoa.nome = "Mary";
pessoa["age"] = 25;
```

### 5.5.1. Associative Arrays

In JavaScript, it is possible to use strings as property indices of an object, which allows creating associative arrays, which are objects that behave like arrays but can have properties with custom names.

```javascript
const people = {
    0: { name: "João", age: 30, height: 1.75 },
    1: { name: "Maria", age: 25, height: 1.65 },
    2: { name: "Pedro", age: 28, height: 1.8 },
    length: 3,
};

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}
```

#### 5.5.2. Inheritance

In JavaScript, objects can inherit properties and methods from other objects through the prototype. This allows the creation of object hierarchies and code reuse.  
To create an object hierarchy, simply define the prototype of an object as another object.

```javascript
// Creating an object called "Animal" with some properties and methods
const Animal = {
    name: "",
    type: "",
    makeNoise() {
        console.log(`${this.name} made a noise (snif snif)!`);
    },
};

// Creating an object called "Dog" who inherit everything from "Animal"
const Dog = Object.create(Animal);

// Adding additional properties and methods to "Dog"
Dog.bark = function () {
    console.log(`${this.name} barked (wof wof!`);
};

// Creating an object called "dog" using "Dog" as model
const dog = Object.create(Dog);
dog.name = "Buddy";

// Accessing the properties and methods of "Animal" object through "dog" object
console.log(dog.name); // "Buddy"
dog.makeNoise(); // "Buddy made a noise!"

// Accessing the additional properties and methods of "Dog" object using "dog" object
dog.bark(); // "Buddy barked!"
```

#### 5.5.3. Property Access Errors

If we try to access a property of an object that does not exist, JavaScript will throw a property access error. To avoid this, we can check if the property exists in the object before accessing it.

```javascript
// Attempting access without checking property existence
console.log(pessoa.telefone); // Uncaught TypeError: Cannot read property 'telefone' of undefined

// Checking for existence
if (pessoa.hasOwnProperty("telefone")) {
    console.log(pessoa.telefone);
} else {
    console.log(
        'The "telefone" property does not exist in the "pessoa" object.'
    );
}
```

## 5.6. Deleting properties from an object

To delete a property from an object, we can use the `delete` reserved word. This deletes only **own** properties, and not **inherited** ones.

```javascript
delete person.age;
```

The code above will delete the `age` property from the `person` object.

## 5.7. Testing properties

To test if an object has a certain property, we can use the `in` operator or the `hasOwnProperty()` method.

```javascript
// Creating object
const person = {
  person.name = "",
}

// Checking property "name"
console.log('name' in person); // true
console.log(person.hasOwnProperty('name')); // true

// Checking property "toString"
console.log("toString" in person); // true
console.log(person.hasOwnProperty('toString')); // false
```

The difference between the `in` operator and the `hasOwnProperty()` method is that the first checks if the property exists on the object or in any of its prototypes, while the latter only checks if the property exists on the object itself.
In the above example, in the first case, the "name" property exists on the "person" object, so both `in` and `hasOwnProperty()` return `true`. In the second case, the toString property does not exist on the "person" object, but it exists on its prototype (all objects in JavaScript inherit from `Object.prototype()`), so `in` returns `true`, but `hasOwnProperty()` returns `false`.

## 5.8. Property enumeration

To enumerate the properties of an object, we can use the `Object.keys()` method.

```javascript
console.log(Object.keys(person)); // ['name', 'height']
```

We can also use the `Object.getOwnPropertyNames()` method to enumerate all properties of an object, including those that have been defined as non-enumerable.

```javascript
console.log(Object.getOwnPropertyNames(person)); // ['name', 'height']
```

## 5.9. Getter and setter methods

`Getter` and `setter` methods are special functions that allow us to intercept access and assignment of values to object properties. They are defined as object properties using the get and set notation.

```javascript
const person = {
    _name: "John",
    _age: 30,
    _height: 1.75,
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        this._age = value;
    },
    get height() {
        return this._height;
    },
    set height(value) {
        this._height = value;
    },
};

console.log(person.name); // 'John'
person.name = "Mary";
console.log(person.name); // 'Mary'
```

In the above code, an object called "person" was created. This object has three properties and, for each property, we have a `get`-`set` pair. The `get` method is used to retrieve the value of the property, while the `set` method sets the value of the property. The properties begin with an underscore (`_`), which means that each of the properties is a **private value** of the object. Therefore, `get name()` retrieves the value of the "\_name" property, while `set name()` sets the value of the "\_name" property. This allows the value of the property to be read and modified safely, without the value being accessed directly.

## 5.10. Property attributes

Property attributes are additional settings that can be defined for the properties of an object. They include attributes such as **enumerable**, **writable**, **configurable** and **value**.
To set the attributes of a property, we can use the `Object.defineProperty()` method.

```javascript
Object.defineProperty(person, "name", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: "João",
});
```

The `Object.defineProperty()` method can be used to create or modify a property of an object. In the case of the example above, a property named 'name' is being created on the 'person' object with the following attributes:

-   **enumerable**: specifies whether the property should be listed in loops such as `for...in` or if it should be accessible through `Object.keys()`. If this value is `false`, the property will not be listed.
-   **writable**: specifies whether the property can be modified. If this value is `false`, the property cannot be modified.
-   **configurable**: specifies whether the property can be deleted or if the **enumerable**, **writable**, and **configurable** attributes can be modified. If this value is `false`, the property cannot be deleted and the attributes cannot be changed.
-   **value**: specifies the value of the property. In this case, the 'name' property will have a value of `'João'`.

These attributes are called property descriptors and are used to control the behavior of a property on an object. They can be useful in situations where it is necessary to ensure that a property is not accidentally modified or deleted by code or malicious code. For example, if we want to create a read-only property on an object, we can use the `Object.defineProperty()` method and set the **writable** attribute to `false`. This will ensure that the property cannot be modified.

## 5.11. Object attributes

Object attributes are additional settings that can be defined for an entire object. They include attributes such as `extensible()`, `sealed()`, and `frozen()`.
To set the attributes of an object, we can use the `Object.preventExtensions()`, `Object.seal()`, and `Object.freeze()` methods.

```javascript
Object.preventExtensions(person);
Object.seal(person);
Object.freeze(person);
```

### 5.11.1. Prototypes

The prototype of an object is another object from which the object is created. When an object is created from a prototype, it inherits the properties of the prototype. For example:

```javascript
// Creating an 'animal' object as a prototype
const animal = {
    hasLegs: true,
};

// Creating a 'dog' object from the 'animal' prototype
const dog = Object.create(animal);

// The 'dog' object inherits the 'hasLegs' property from the 'animal' prototype
console.log(dog.hasLegs); // Output: true
```

#### 5.11.2. Class Attribute

Starting with ECMAScript 2015 (also known as ES6), the `class` syntax was added to JavaScript. Classes allow us to define a set of properties and methods that share a certain behavior. For example:

```javascript
class Animal {
    constructor(hasLegs) {
        this.hasLegs = hasLegs;
    }
}

// Creating a 'dog' object from the 'Animal' class
const dog = new Animal(true);

// The 'dog' object has the 'hasLegs' property defined in the 'Animal' class
console.log(dog.hasLegs); // Output: true
```

A class called `Animal` defines a constructor that takes as a parameter `hasLegs`. The `constructor` operator is used to initialize the object created from the class. Then, an object called `dog` is created from the `Animal` class, passing the value `true` for the `hasLegs` parameter. This creates a `dog` object with a `hasLegs` property, and with the value `true`. Finally, the value of the `hasLegs` property of the `dog` object is printed, which results in `true`.

#### 5.11.3. Extensible Attribute

The extensible attribute determines whether an object can have new properties added to it. By default, all objects are extensible, but we can change this using the `Object.preventExtensions()` method. For example:

```javascript
const obj = {};

// The object is extensible
Object.isExtensible(obj); // Output: true

// Preventing the object from being extended
Object.preventExtensions(obj);

// The object is no longer extensible
Object.isExtensible(obj); // Output: false
```

## 5.12. Object Serialization

It is the process of converting an object into a string representation that can be stored or transmitted. This is useful when we need to store or transmit data in a format that can be read by other languages or systems.  
The `JSON.stringify()` method is used to serialize an object in JavaScript. For example:

```javascript
const obj = {
  prop1: 'value 1',
  prop2: 'value 2'
};

// Serialize the object into a string
const serializedObj = JSON.stringify(obj);

console.log(serializedObj);
// Output: '{"prop1":"value 1","prop2":"value 2"}'
To deserialize the string back into an object, we use the JSON.parse() method:
```

```javascript
const deserializedObj = JSON.parse(serializedObj);

console.log(deserializedObj);
// Output: { prop1: 'value 1', prop2: 'value 2' }
```

## 5.13. Most common methods used with objects in JavaScript

| Object                                         | Functionality                                                                                              |
| :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `Object.keys(obj)`                             | returns an array of the keys of an object                                                                  |
| `Object.values(obj)`                           | returns an array of the values of an object                                                                |
| `Object.entries(obj)`                          | returns an array of arrays, where each inner array has the key and value of an object's key-value pair     |
| `Object.assign(target, source1, source2, ...)` | copies the enumerable properties of one or more source objects to a target object                          |
| `Object.freeze(obj)`                           | freezes an object, making it immutable                                                                     |
| `Object.seal(obj)`                             | seals an object, preventing new properties from being added to it and making existing properties read-only |
| `toString()`                                   | returns a string representing the object                                                                   |
| `toLocaleString()`                             | returns a string representing the object, using the current locale configuration                           |
| `toJSON()`                                     | returns a JSON string representing the object                                                              |
| `valueOf()`                                    | returns the primitive value of the object                                                                  |

### 5.13.1. `Object.keys()` method

JavaScript function that returns an array with the enumerable keys of an object. This means it returns the object's properties that have the enumerable property set to true.  
For example, consider the following object:

```javascript
const obj = {
    name: "John",
    age: 30,
    job: "developer",
};
```

We can use the `Object.keys()` method to get the object's keys in the following way:

```javascript
const keys = Object.keys(obj);
console.log(keys); // ['name', 'age', 'job']
```

Note that the keys of the `'obj'` object are returned as an array of strings. We can also use the `Object.keys()` method to iterate over the object's keys:

```javascript
Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
});
```

This will print each key and its corresponding value for the `'obj'` object. It's important to note that the `Object.keys()` method does not include inherited properties in the returned keys array. If we want to include inherited properties, we can use the `Object.getOwnPropertyNames()` method.

### 5.13.2. `Object.values()` method

JavaScript function that returns an array with the values of the enumerable properties of an object. This means it returns the values of the object's properties that have the enumerable property set to `true`.

```javascript
const obj = {
    name: "John",
    age: 30,
    job: "developer",
};
```

You can use the `Object.values()` method to get the object's property values in the following way:

```javascript
const values = Object.values(obj);
console.log(values); // ['John', 30, 'developer']
```

The values of the `'obj'` object's properties are returned as an array, as we can see in the example above. We can also use the `Object.values()` method to iterate over the object's property values. For example:

```javascript
Object.values(obj).forEach((value) => {
    console.log(value);
});
```

This will print each value of the `'obj'` object's properties. It's important to note that the `Object.values()` method does not include values of inherited properties in the returned values array. If we want to include values of inherited properties, we can use the `Object.getOwnPropertyNames()` method in combination with the `Object.getPrototypeOf()` method.
The `Object.values()` method is supported in all modern browsers, but it is not compatible with older versions of Internet Explorer.

### 5.13.3. `Object.entries()` method

The `Object.entries()` method is a JavaScript function that returns an array of arrays, where each inner array represents a key-value pair. It returns the object's enumerable properties that have the enumerable property set to `true`.

```javascript
const obj = {
    name: "John",
    age: 30,
    job: "developer",
};
```

We can use the `Object.entries()` method to get the object's key-value pairs in the following way:

```javascript
const entries = Object.entries(obj);
console.log(entries); // [['name', 'John'], ['age', 30], ['job', 'developer']]
```

The key-value pairs of the obj object are returned as an array of arrays, as we can see in the example above. We can also use the `Object.entries()` method to iterate over the object's key-value pairs. For example:

```javascript
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
});
```

This will print each key and value of the `'obj'` object's properties. It's important to note that the `Object.entries()` method does not include key-value pairs of inherited properties in the returned array. If we want to include key-value pairs of inherited properties, we can use the `Object.getOwnPropertyNames()` method in combination with the `Object.getPrototypeOf()` method.
The `Object.entries()` method is supported in all modern browsers, but it is not compatible with older versions of Internet Explorer.

### 5.13.4. `Object.assign()` method

This is a global object method in JavaScript that is used to copy the values of all own enumerable properties from one or more source objects to a target object. It returns the target object. The syntax is as follows:

```javascript
Object.assign(target, source1, source2, ...)
```

The first parameter is the target object, which is the object in which the property values will be copied. The subsequent parameters are the source objects, which are the objects whose properties will be copied to the target object. For example:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = Object.assign({}, obj1, obj2);
// obj3 is { a: 1, b: 2, c: 3, d: 4 }
```

The `Object.assign()` method can also be used to merge objects. For example:

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = Object.assign({}, obj1, obj2);
// obj3 is { a: 1, b: 3, c: 4 }
```

The `Object.assign()` method does not copy properties that are defined as `null` or `undefined`. In addition, it does not copy prototyped properties. If we want to copy all properties of an object, including prototyped properties, we can use the `Object.getOwnPropertyNames()` or `Object.getOwnPropertySymbols()` function.  
The `Object.assign()` method is supported in all modern browsers except Internet Explorer.

### 5.13.5. `Object.freeze()` method

The `Object.freeze()` method is a global object method in JavaScript that is used to "freeze" an object. When an object is "frozen", it becomes immutable, that is, it cannot be modified in any way. This includes adding, removing, or changing existing properties. The syntax is as follows:

```javascript
Object.freeze(obj);
```

The parameter is the object that will be "frozen". The method returns the "frozen" object. For example:

```javascript
const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 3; // Will have no effect, as the object is frozen
console.log(obj.a); // Output: 1
```

The `Object.freeze()` method also "freezes" all objects nested within the main object. This means that it is not possible to add, remove, or change properties of any nested object. This method is supported in all modern browsers except Internet Explorer.

### 5.13.6. `Object.seal()` method

The parameter is the object that will be "sealed". The method returns the "sealed" object. For example:

```javascript
const obj = { a: 1, b: 2 };
Object.seal(obj);

obj.a = 3; // Will have an effect, as the object is sealed but not frozen
console.log(obj.a); // Output: 3

obj.c = 4; // Will have no effect, as the object is sealed
console.log(obj.c); // Output: undefined
```

The `Object.seal()` method also "seals" all objects nested within the main object. This means that no properties can be added or removed, but the values of existing properties can be changed. This method is supported in all modern browsers except Internet Explorer.

### 5.13.7. `Object.create()` method

This is a global object method in JavaScript that is used to create a new object with the specified prototype object and properties. The syntax is as follows:

```javascript
Object.create(proto, [propertiesObject]);
```

The first parameter, `proto`, is the prototype object for the new object. The second parameter, `propertiesObject`, is optional and is an object whose own enumerable properties will be added to the newly created object. The method returns the newly created object. For example:

```javascript
const obj1 = { a: 1 };
const obj2 = Object.create(obj1, { b: { value: 2 } });
// obj2 is { b: 2 } with obj1 as its prototype

console.log(obj2.a); // Output: 1
```

In the example above, `'obj2'` is created with `'obj1'` as its prototype, and the property 'b' is added to obj2 with the value 2. Since `'obj1'` is the prototype of `'obj2'`, `'obj2'` inherits the property 'a' from `'obj1'`.

The `Object.create()` method is supported in all modern browsers except Internet Explorer.

### 5.13.8. `toString()` method

This method is called when an object is used in a string concatenation operation or when the `String()` method is called with an object as an argument. By default, this method returns a string representing the object.

```javascript
const obj = {
    prop1: "value 1",
    prop2: "value 2",
};

console.log(obj.toString()); // Output: '[object Object]'
console.log(String(obj)); // Output: '[object Object]'
```

We can override the `toString()` method in our own classes or objects to return a custom string. For example:

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Overrides the toString() method
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new Person("John", 30);

console.log(person1.toString()); // Name: John, Age: 30
console.log(String(person1)); // Name: John, Age: 30
```

In this example, a class `Person` was created and has a `constructor` that takes a `name` and an `age` as arguments. Then, we override the `toString()` method to return a string in the format `Name: {name}, Age: {age}`. When we call the `toString()` method or use the `String()` function on an instance of the `Person` class, the custom string is returned.

### 5.13.9. `toLocaleString()` method

This is similar to `toString()`, but this method tries to return a string that is formatted according to the user's local conventions. For example, if the user is in a country where the decimal point is used as the decimal separator, the string returned by `toLocaleString()` should contain a decimal point as the decimal separator.

```javascript
const product = {
    name: "Produto 1",
    price: 29.99,
    currency: "USD",
    toLocaleString: function () {
        return `${this.name} - ${this.price.toLocaleString("en-US", {
            style: "currency",
            currency: this.currency,
        })}`;
    },
};

console.log(product.toLocaleString()); // Output: 'Produto 1 - $29.99'
```

An object called `product` has been created, which represents a product with a `name`, a `price`, and a `currency` (attributes). The `product` object also has a method called `toLocaleString()` that returns a string representing the product. This string will be formatted appropriately for the user's locale.
The `toLocaleString()` method uses the homonymous method on the `price` property to format the product price according to the specified locale settings (`en-US` in this case, which means United States). The final result is a string that includes the product name and the formatted price with the appropriate currency, such as `$29.99`.

### 5.13.10. `toJSON()` method

This method is called when an object is passed as an argument to the `JSON.stringify()` method. By default, this method returns the JSON representation of the object.

```javascript
const obj = {
    prop1: "value 1",
    prop2: "value 2",
    toJSON() {
        return {
            prop1: this.prop1,
        };
    },
};

console.log(JSON.stringify(obj)); // Output: '{"prop1":"value 1"}'
```

The code above creates an object called `'obj'` with two properties and converts one of them to JSON with the `toJSON()` method called inside the object. When using the `JSON.stringify()` method and passing the created object (`'obj'`) as an argument, it accesses the `toJSON()` method of the object, returning the `'prop1'` property written in JSON format.

### 5.13.11. `valueOf()` method

The `valueOf()` method is inherited by all objects in JavaScript and can be overridden by custom objects if desired. This method is automatically called by JavaScript in various contexts, including when an object is used in mathematical operations, in comparisons, and in calls to functions such as `String()` or `Number()`.
The following code shows how the `valueOf()` method is automatically called when an object is used in a mathematical expression:

```javascript
let obj = { value: 10 };
let num = obj + 5;

console.log(num); // 15
```

In the expression `obj + 5`, the `'obj'` object is automatically converted to a primitive value using the `valueOf()` method. If the object has a custom `valueOf()` method, it will be called; otherwise, the inherited `valueOf()` method will be called, returning the value of the value attribute of the object.
The `valueOf()` method can also be called explicitly:

```javascript
let obj = { value: 10 };
let num = obj.valueOf() + 5;

console.log(num); // 15
```

It is important to note that the `valueOf()` method is different from the `toValue()` method, which is used to convert an object to a specific value. For example, the `toString()` method converts an object to a string and the `toFixed()` method converts a Number object to a string with a specific number of decimal places.

### 5.13.12. `Object.getOwnPropertyNames()` method

This is a JavaScript object method that returns an array of strings containing the names of all enumerable and non-enumerable own properties of the object passed as an argument. This means that it will return all properties of the object that were defined directly on the object, but not properties inherited from prototypes.

```javascript
const obj = {
    game: "cs",
    hoursPlayed: 560,
};

console.log(Object.getOwnPropertyNames(obj));
// Output: ['game', 'hoursPlayed']
```

Above, the array returned by `Object.getOwnPropertyNames()` is alphabetically sorted and includes all properties, both enumerable and non-enumerable. If we want to get only the enumerable properties, we can use the `Object.keys()` method instead.

```javascript
console.log(Object.keys(obj));
// Output: ['game', 'hoursPlayed']
```

The `Object.getOwnPropertyNames()` method is useful when we want to iterate over all properties of an object and perform some specific action with them. It can also be useful for checking if an object has a certain property, as it returns all properties of the object, regardless of whether they are enumerable or not.

### 5.13.13. `Object.getPrototypeOf()` method

This is an object method in JavaScript that returns the prototype of a given object. The prototype of an object is another object that is used as a model to create the current object. When an object is created from a prototype, it inherits the properties and methods of the prototype. I know that I already talked about this, but it is never too much to remember.

```javascript
const animalPrototype = {
    makeNoise: function () {
        console.log("Some noise");
    },
};

const dog = Object.create(animalPrototype);

console.log(Object.getPrototypeOf(dog) === animalPrototype); // Output: true
```

Above, I created an object called `'animalPrototype'` that has a method called `makeNoise()`. Then, we create an object called `'dog'` using the `Object.create()` method, passing `'animalPrototype'` as an argument. This makes `'dog'` inherit the properties and methods of `'animalPrototype'`. We can verify this by calling the `Object.getPrototypeOf()` method and passing `'dog'` as an argument. The method will return the prototype of `'do'g`, which is the `'animalPrototype'` object.
The `Object.getPrototypeOf()` method is useful when we want to check what the prototype of an object is or when we want to access the inherited properties and methods of an object. It is also useful for checking if an object is an instance of a particular class or type of object.

### 5.13.14. `Object.getOwnPropertySymbols()` method

This is a method that returns an array of symbols that are **object own** properties. This means that the method returns an array of symbols that are enumerable properties of the object in question, but that do not include inherited or non-enumerable properties.

```javascript
const obj = {};
const symbol1 = Symbol("symbol1");
const symbol2 = Symbol("symbol2");

obj[symbol1] = "value1";
obj[symbol2] = "value2";

console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(symbol1), Symbol(symbol2)]
```

The code above creates an empty object (`"obj"`) and two symbols, (`"symbol1"` and `"symbol2"`). It then assigns the values "`value1`" and "`value2`" to the respective symbols in the `"obj"` object. Finally, the `Object.getOwnPropertySymbols()` method is used to return all symbols that are own properties of the `"obj"` object. Therefore, the output will be `[Symbol(symbol1), Symbol(symbol2)]`.
**Symbols** are a type of primitive value in JavaScript that serve as unique identifiers. They can be used as object properties to create private properties that cannot be accessed directly by external code. The `Object.getOwnPropertySymbols()` method is useful for accessing these private properties on an object. It is important to note that the method will only return symbols that are **object own** properties of the object in question. If you want to get all properties of an object, including inherited ones, you can use the `Object.getOwnPropertyNames()` method or the `for...in` operator.

## 5.14. **Let's practice!**

-   Practice 33 - Create an object called "mexico" with the following properties: id -> 24, name -> "Mexico", capital -> "Mexico City", neighbors -> ["USA", "Guatemala", "Belize"]. Next, print out the object to the terminal. Next, change the "id" to be 25, and add "Honduras" to the list of neighbors to "mexico". Finally, print out "mexico" to the terminal again.

-   Practice 34 - Create an object called "myPet" with the following properties: name -> "Sudo", type -> "Dog", breed -> "Poodle", age -> 7, friends -> ["Bit", "Byte", "Data"]. Print out "myPet" to the terminal and, after that, add a new property (color -> "Black"), change "breed" to be "Beagle". Next, remove "Data" from the list of friends and print out "myPet" to the terminal again. Finally, add "Chip" to the list of friends and print out "myPet" to the terminal.

-   Practice 35 - Create the following objects: - banana (name -> "banana", quantity -> 1, price -> 1.95) - apple (name -> "apple", quantity -> 1, price -> 1.45) - candy (name -> "candy", quantity -> 1, price -> 3.50) - store (storeNumber -> 5, locationCity -> "Milan", locationCountry -> "Italy", products -> ["banana", "apple", "candy"])

    After, print out the "store" object to the terminal, and next print out all the products from "store" (only). Next, print out the 3rd product from "store" (only). Change the price of the "banana" to 1.75, and print out "banana" and "store". Finally, change the price of "candy" to 4.99 e print out "store" and "candy".

-   Practice 36 - Create an object called "houseForSale" with the following properties: area -> 940, value -> 320000, streetName -> "Fifth Street", built -> "2012", owner -> {name: "Blake", age: 29}, offers -> [290000, 295000, 315000, 312000]. Next:

    1.  Print out the object;
    2.  Delete the property which "built" is the key;
    3.  Change the age of the owner to 30;
    4.  Print out the maximum "offerPrice" value using reduce;
    5.  Add the property: salePrice -> 312000;
    6.  Print out "houseForSale" again.

-   Practice 37 - Create an object called "myConsole" and:
    1.  Assign to "myConsole" the key "log" with a value that is an arrow function. This arrow function will have one parameter called "message" and the function will just print out the "message";
    2.  How would you call this "log" function inside the object?
    3.  BONUS: How might the built-in "console" work?

**You can find practices' solutions [here](/README.md)**.
