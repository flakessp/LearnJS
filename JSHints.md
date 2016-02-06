# JS Hints
List of usefull js hints

```javascript
var title  = this.options.title || '';
```
*Title will be equal to this.options.title if exists, if not it will be equal to ''*
[Following material are taken from that tutsplus course](https://code.tutsplus.com/courses/object-oriented-javascript-with-es6)
## Primitive Data Types
```javascript
//Primitive data types don't have properties or methods

//number
//string
//Boolean
//null
//undefined
//symbol (ES6)

var length = 'hello'.length;
// Actually what happens is this >>
var length2 = new String('hello').length;

typeof 'hello'; // string
typeof new String('hello');#Front-end Job Interview Questions

                           This file contains a number of front-end interview questions that can be used when vetting potential candidates. It is by no means recommended to use every single question here on the same candidate (that would take hours). Choosing a few items from this list should help you vet the intended skills you require.

                           **Note:** Keep in mind that many of these questions are open-ended and could lead to interesting discussions that tell you more about the person's capabilities than a straight answer would.

                           ## Table of Contents

                             1. [General Questions](#general-questions)
                             1. [HTML Questions](#html-questions)
                             1. [CSS Questions](#css-questions)
                             1. [JS Questions](#js-questions)
                             1. [Testing Questions](#testing-questions)
                             1. [Performance Questions](#performance-questions)
                             1. [Network Questions](#network-questions)
                             1. [Coding Questions](#coding-questions)
                             1. [Fun Questions](#fun-questions)

                           ## Getting Involved

                             1. [Contributors](#contributors)
                             1. [How to Contribute](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/CONTRIBUTING.md)
                             1. [License](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

                           #### General Questions:

                           * What did you learn yesterday/this week?
                           * What excites or interests you about coding?
                           * What is a recent technical challenge you experienced and how did you solve it?
                           * What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
                           * Talk about your preferred development environment.
                           * Which version control systems are you familiar with?
                           * Can you describe your workflow when you create a web page?
                           * If you have 5 different stylesheets, how would you best integrate them into the site?
                           * Can you describe the difference between progressive enhancement and graceful degradation?
                           * How would you optimize a website's assets/resources?
                           * How many resources will a browser download from a given domain at a time?
                             * What are the exceptions?
                           * Name 3 ways to decrease page load (perceived or actual load time).
                           * If you jumped on a project and they used tabs and you used spaces, what would you do?
                           * Describe how you would create a simple slideshow page.
                           * If you could master one technology this year, what would it be?
                           * Explain the importance of standards and standards bodies.
                           * What is Flash of Unstyled Content? How do you avoid FOUC?
                           * Explain what ARIA and screenreaders are, and how to make a website accessible.
                           * Explain some of the pros and cons for CSS animations versus JavaScript animations.
                           * What does CORS stand for and what issue does it address?

                           #### HTML Questions:

                           * What does a `doctype` do?
                           * What's the difference between standards mode and quirks mode?
                           * What's the difference between HTML and XHTML?
                           * Are there any problems with serving pages as `application/xhtml+xml`?
                           * How do you serve a page with content in multiple languages?
                           * What kind of things must you be wary of when design or developing for multilingual sites?
                           * What are `data-` attributes good for?
                           * Consider HTML5 as an open web platform. What are the building blocks of HTML5?
                           * Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
                           * Describe the difference between `<script>`, `<script async>` and `<script defer>`.
                           * Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`? Do you know any exceptions?
                           * What is progressive rendering?
                           * Have you used different HTML templating languages before?

                           #### CSS Questions:

                           * What is the difference between classes and ID's in CSS?
                           * What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
                           * Describe Floats and how they work.
                           * Describe z-index and how stacking context is formed.
                           * Describe BFC(Block Formatting Context) and how it works.
                           * What are the various clearing techniques and which is appropriate for what context?
                           * Explain CSS sprites, and how you would implement them on a page or site.
                           * What are your favourite image replacement techniques and which do you use when?
                           * How would you approach fixing browser-specific styling issues?
                           * How do you serve your pages for feature-constrained browsers?
                             * What techniques/processes do you use?
                           * What are the different ways to visually hide content (and make it available only for screen readers)?
                           * Have you ever used a grid system, and if so, what do you prefer?
                           * Have you used or implemented media queries or mobile specific layouts/CSS?
                           * Are you familiar with styling SVG?
                           * How do you optimize your webpages for print?
                           * What are some of the "gotchas" for writing efficient CSS?
                           * What are the advantages/disadvantages of using CSS preprocessors?
                             * Describe what you like and dislike about the CSS preprocessors you have used.
                           * How would you implement a web design comp that uses non-standard fonts?
                           * Explain how a browser determines what elements match a CSS selector.
                           * Describe pseudo-elements and discuss what they are used for.
                           * Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
                           * What does ```* { box-sizing: border-box; }``` do? What are its advantages?
                           * List as many values for the display property that you can remember.
                           * What's the difference between inline and inline-block?
                           * What's the difference between a relative, fixed, absolute and statically positioned element?
                           * The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
                           * What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
                           * Have you played around with the new CSS Flexbox or Grid specs?
                           * How is responsive design different from adaptive design?
                           * Have you ever worked with retina graphics? If so, when and what techniques did you use?
                           * Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

                           #### JS Questions:

                           * Explain event delegation
                           * Explain how `this` works in JavaScript
                           * Explain how prototypal inheritance works
                           * What do you think of AMD vs CommonJS?
                           * Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
                             * What needs to be changed to properly make it an IIFE?
                           * What's the difference between a variable that is: `null`, `undefined` or undeclared?
                             * How would you go about checking for any of these states?
                           * What is a closure, and how/why would you use one?
                           * What's a typical use case for anonymous functions?
                           * How do you organize your code? (module pattern, classical inheritance?)
                           * What's the difference between host objects and native objects?
                           * Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
                           * What's the difference between `.call` and `.apply`?
                           * Explain `Function.prototype.bind`.
                           * When would you use `document.write()`?
                           * What's the difference between feature detection, feature inference, and using the UA string?
                           * Explain AJAX in as much detail as possible.
                           * Explain how JSONP works (and how it's not really AJAX).
                           * Have you ever used JavaScript templating?
                             * If so, what libraries have you used?
                           * Explain "hoisting".
                           * Describe event bubbling.
                           * What's the difference between an "attribute" and a "property"?
                           * Why is extending built-in JavaScript objects not a good idea?
                           * Difference between document load event and document ready event?
                           * What is the difference between `==` and `===`?
                           * Explain the same-origin policy with regards to JavaScript.
                           * Make this work:
                           ```javascript
                           duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
                           ```
                           * Why is it called a Ternary expression, what does the word "Ternary" indicate?
                           * What is `"use strict";`? what are the advantages and disadvantages to using it?
                           * Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
                           * Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
                           * Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
                           * Explain what a single page app is and how to make one SEO-friendly.
                           * What is the extent of your experience with Promises and/or their polyfills?
                           * What are the pros and cons of using Promises instead of callbacks?
                           * What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
                           * What tools and techniques do you use debugging JavaScript code?
                           * What language constructions do you use for iterating over object properties and array items?
                           * Explain the difference between mutable and immutable objects.
                             * What is an example of an immutable object in JavaScript?
                             * What are the pros and cons of immutability?
                             * How can you achieve immutability in your own code?
                           * Explain the difference between synchronous and asynchronous functions.
                           * What is event loop?
                             * What is the difference between call stack and task queue?

                           #### Testing Questions:

                           * What are some advantages/disadvantages to testing your code?
                           * What tools would you use to test your code's functionality?
                           * What is the difference between a unit test and a functional/integration test?
                           * What is the purpose of a code style linting tool?

                           #### Performance Questions:

                           * What tools would you use to find a performance bug in your code?
                           * What are some ways you may improve your website's scrolling performance?
                           * Explain the difference between layout, painting and compositing.

                           #### Network Questions:

                           * Traditionally, why has it been better to serve site assets from multiple domains?
                           * Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
                           * What are the differences between Long-Polling, Websockets and Server-Sent Events?
                           * Explain the following request and response headers:
                             * Diff. between Expires, Date, Age and If-Modified-...
                             * Do Not Track
                             * Cache-Control
                             * Transfer-Encoding
                             * ETag
                             * X-Frame-Options
                           * What are HTTP actions? List all HTTP actions that you know, and explain them.

                           #### Coding Questions:

                           *Question: What is the value of `foo`?*
                           ```javascript
                           var foo = 10 + '20';
                           ```

                           *Question: How would you make this work?*
                           ```javascript
                           add(2, 5); // 7
                           add(2)(5); // 7
                           ```

                           *Question: What value is returned from the following statement?*
                           ```javascript
                           "i'm a lasagna hog".split("").reverse().join("");
                           ```

                           *Question: What is the value of `window.foo`?*
                           ```javascript
                           ( window.foo || ( window.foo = "bar" ) );
                           ```

                           *Question: What is the outcome of the two alerts below?*
                           ```javascript
                           var foo = "Hello";
                           (function() {
                             var bar = " World";
                             alert(foo + bar);
                           })();
                           alert(foo + bar);
                           ```

                           *Question: What is the value of `foo.length`?*
                           ```javascript
                           var foo = [];
                           foo.push(1);
                           foo.push(2);
                           ```

                           *Question: What is the value of `foo.x`?*
                           ```javascript
                           var foo = {n: 1};
                           var bar = foo;
                           foo.x = foo = {n: 2};
                           ```

                           *Question: What does the following code print?*
                           ```javascript
                           console.log('one');
                           setTimeout(function() {
                             console.log('two');
                           }, 0);
                           console.log('three');
                           ```

                           #### Fun Questions:

                           * What's a cool project that you've recently worked on?
                           * What are some things you like about the developer tools you use?
                           * Do you have any pet projects? What kind?
                           * What's your favorite feature of Internet Explorer?
                           * How do you like your coffee?


                           #### Contributors:

                           This document started in 2009 as a collaboration of [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) and [@iansym](https://twitter.com/iansym).

                           It has since received contributions from over [100 developers](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors). // object
typeof String('hello'); // string
typeof new String('hello').valueOf(); // string


typeof 10; // number
typeof new Number(10); // object
typeof Number(10); // number
typeof new Number(10).valueOf() // number


var hello = 'hello';
hello.foo = 'foo';
hello.foo; // undefined because typeof hello == string

var num = new Number(10);
var sum = 10 + num; // 20, because of coercion
num.foo = 'foo';
num.foo; //foo because typeof num == object

var value = new Boolean(false);
if (value) {
  alert('foo') // will always alert, because typeof value == object, and objects in JS are always true
}

```
## Creating Objects

### Object Constructor
```javascript

var obj = new Object();
obj.firstName = 'john'; //property
obj.greet = function () {
  //method. BUT technicaly it is a property because JS doesn't have methods, it has Function objects
}

//Also they are MEMBERS - public properties of an object

function greet () {

}
obj.greet = greet; // it is the same
```

### Literal Constructor
All the same os Object Constructor + less typing, less file size + executes faster. Because single statement executes faster that multiple one.

```javascript

var obj = {
  firstName: 'john',
  greet: function () {

  }
};
//var obj = {}; is the same as var obj = new Object();
```
*Interface - shape of an object, list of properties*

## Creational Patterns
### Factory Pattern

```javascript
var obj = {
  firstName: 'john',
  greet: function (name) {
    return 'Hello ' + name;
  }
};
var obj2 = {
  firstName: 'john',
  greet: function (name) {
    return 'Hello ' + name;
  }
};
// obj and obj2 have the same interface
//using the factoryPattern. User create* naming.
function createPerson(firstName, lastName){
  var person = {
    firstName: firstName, // in ES6 you can just write firstName
    lastName: lastName, // in ES6 you can just write lastName
    greet: function (name){
      return 'Hello' + name;
    }
  };
  return person;
}

var obj = createPerson('John', 'Doe');
var obj2 = createPerson('Joe', 'Smith');

//We can emulate Privacy using getters, so the properties will become read only

function createPerson(firstName, lastName){
  var person = {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    greet: function (name){
      return 'Hello, ' + name + '. My name is ' + firstName;
    }
  };

  return person;
}

var obj = createPerson('John', 'Doe');
var obj2 = createPerson('Joe', 'Smith');
```
Minus is that we cant we check if new obj is one of createPerson objects
```javascript
obj instanceof createPerson // won't work because createPerson is a normal function.
```
Second is a perfomance. Functions are objects in JS. Whenever you define a function you create a function object.
So
```javascript
obj.greet === obj2.greet // will return false
```
Because everytime we call createPerson we creating new functions.

### The JavaScript Data Type

```javascript
function Person (firstName, lastName) {
    //instead of creating and returning person object we are using "this" keyword
    this.firstName = firstName;
    this.lastName = lastName;
    this.greet = function () {
        return 'Hello, ' + name + '. My name is ' + firstName;
    };
    //now we lost privacy. we can change properties by obj.firstName = 'another name'
    //to fix this we can use Object.defineProperty();
    Object.defineProperty(this, 'firstName', {
        get: function() { return firstName; }
    });
}
//every function has a prototype property, but it's only useful for constructor functions
Person.prototype.greet = function (name) {
  return 'Hello, ' + name + '. My name is ' + this.firstName;
}
//what you create in prototype is shared between all instances constructor function. Ideal for method definitions

var obj = new Person('John', 'Doe');
var obj2 = new Person('Joe', 'Smith');

//now this two object are sharing 'greet' method, so
obj instanceof Person // true
obj.greet === obj2.greet // will return true

//now the only difference

obj.firstName //owns property
obj.greet() // it is not in object it is in prototype and it is a little bit longer. this process is called identifier lookup

```

#### Symbols (ES6)

```javascript
//we are wrapping our constructor in IIF(immediately invoked function)

//we are doing this because we are going to use Symbols and IIF is giving us a privacy

var Person = (function () {

  var firstNameSymbol = Symbol();
  //Symbol is a new Primitive Data Type
  var lastNameSymbol = Symbol();
  //Symbols are no enumerated (they won't be in for-in loop)

  function Person (firstName, lastName) {
      //for symbols you must use index syntax
      this[firstNameSymbol] = firstName;
      this[lastNameSymbol] = lastName;
      this.greet = function () {
          return 'Hello, ' + name + '. My name is ' + this[firstNameSymbol];
      };
      Object.defineProperty(this, 'firstName', {
          get: function() { return firstName; }
      });

      //now we for privacy we need to set getters for our prototype

      Object.defineProperty(Person.prototype, 'firstName', {
        get: function () {
          return this.[firstNameSymbol];
        }
      });

      Object.defineProperty(Person.prototype, 'lastName', {
        get: function () {
          return this.[lastNameSymbol];
        }
      });

      // and we can use static methods. (methods in class that have access to private variables)
      Person.renamePerson = function (person, lastName) {
        person[firstNameSymbol] = lastName;
      };
  }
  return Person;
}());
```

### Class ES6

```javascript
// basically it is a syntax sugar for symbol data type creation

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet (name) {
    return 'Hello, ' + name + '. My name is ' + this.firstName;
  }
}

//classes actually not supported by any browser. We need to use transpiler
```
Now we are going to bring privacy as module
```javascript
//file - person.js
```
## Inheritance

### Parasitic Inheritance

```javascript
function createPerson(firstName, lastName){
  var person = {
    get firstName() {
      return firstName;
    },
    get lastName() {
      return lastName;
    },
    greet: function (name){
      return 'Hello, ' + name + '. My name is ' + this.fullName;
    }
  };

  Object.defineProperty(person, 'fullName', {
    get: function() { return this.firstName + ' ' + this.lastName; }
  })

  return person;
}

function createEmployee (firstName, lastName, position) {
  var person = createPerson(firstName, lastName);
  var personGreet = person.greet;
  //augmenting object with new property
  Object.defineProperty(person, 'position', {
    get: function () { return position; }
  });
  //rewriting native greet method with new one for this object
  person.greet = function () {
    return personGreet(name) = ', ' + this.position;
  }

  return person;
}
```
