// Variables in javaScript:- Var keyword is used to create variables in js
// Drawbacks : -
// 1.Var is functional scoped not block scoped
// 2.it is redeclarable

var a = 10;
console.log(a);

// Dynamically typed language :- Variables can recieve different values at runtime and their type is defined at runtime ex:- javascript

// Statically typed languages :- Each variable and expression is already defined at compile time.


// Arrays :- Arrays can store values of different datatypes.

var arr = [1,0.2,"Hello",true];
console.log(arr);

// Array Methods :-
// 1.POP :- remove element from bottom

var val = arr.pop();
console.log(val);

// Push :- add element to the bottom of array

arr.push(23);
console.log(arr);

// Shift:- delete elemnt from top 
var shiftVal = arr.shift();
console.log(shiftVal);

// Unshift :- add element to the top odf array

arr.unshift(23);
console.log(arr);

// Objects :- is an unordered collection of key-value pairs.each key-value pair is called as property.

var Person = {
    name : "Ushma",
    age: 22
}
console.log(Person);
// Two ways to aaccess each property
// 1.dot notation
 console.log(Person.name);

//  bracket notation
console.log(Person['age']);

 