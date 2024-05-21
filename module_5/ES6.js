// ES6 == ECMA== European computer Manufacturers Association ==> is an association that sets standards for JavaScript.

// problems with var keyword :==================

// 1. Using var redeclaration is allowed.
// 2.it is functional scope not blocked scope.

// let :- redeclation is not allowed .It is blocked scope.

// const :- redeclaration is not allowed.Reassignment is not allowed.It is blocked scope.

let num = 100;
const num1 = 200;

// arrow function is short way of writing function 

let add = (a,b)=>{return a+b;}
console.log(add(2,3))

// template literal and multi-line string

console.log(`Hello
UShma Dixit`)

// Destructuring array 

let [a,b,c,d] = [1,2,3];
console.log(a+" "+b+" "+c+" "+d);


// destructuring objects

let myObj = {
    name : "UShma Dixit",
    age : 23,
    class1 : 'A'
}

const {name, age, class1} = myObj;
console.log(name);
console.log(age);
console.log(class1);