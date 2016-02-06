//https://learn.javascript.ru/object

//Check if property in object exists
if ("prop" in obj) {}
if (obj.prop !== undefined) {}


// https://learn.javascript.ru/object-for-in
//iterating properties in objects

var menu = {
    width: 300,
    height: 200,
    title: "Menu"
};

for (var key in menu) {
    alert( "Ключ: " + key + " значение: " + menu[key] );
}

// https://learn.javascript.ru/bind
'use strict';
var user  = {
    firstName: 'Dave',
    sayHi: function() {
        alert(this.firstName);
    }
};

var f = user.sayHi;

setTimeout(user.sayHi(), 1000); //will be interpreted as IIFE. Will work.
setTimeout(f(), 1000); // undefined. context was lost, now it's this of f.
setTimeout(f, 1000); // undefined. context was lost.



var user = {
    firstName: "Dave",
    sayHi: function(who) {
        alert( this.firstName + ": Hi, " + who );
    }
};

setTimeout(function() {
    user.sayHi("Kole"); // Dave: Hi, Kole. And it is a closure.
}, 1000); // If we change value of user after calling this function code won't work. We need to set the right context.