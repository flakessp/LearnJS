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
typeof new String('hello'); // object
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

```
