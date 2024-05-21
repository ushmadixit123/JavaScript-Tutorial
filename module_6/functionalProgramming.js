// Functional Programming :- is a paradigm of javascript which using functions in efficient way(mainly pure functions)

// Imperative way of writting code :- In this we look for approach , logic,striucture of code of a poblem given.

// Declarative way of writting code:- In this we only look for solution of that problem anyhow.

// Pure functions:= which only does one work without using external resource or anything.

// Callback function :- callback function are those functions which are passed as an argument in another function.

function printEvent(n,EvenFunc){
    console.log(EvenFunc(n))
}

printEvent(5,EvenFunc);

function EvenFunc(n){
    return n%2 == 0;
}

// EvenFunc is callback function

// Higher order function:- are those function which takes another function as an argument or return another function.

// Here printEvent is an HOF.


// Some Higher order functions are Listed below:-

// map :---- map is a method which returns a new array after applying some operations:-

const arr = [1,2,3,4];
const squareVal = arr.map(function(val){return val*val;});
console.log(squareVal);

// ForEach:--- method does not return any new arrray instead it just perform some operation in the existing array;
const newArr = [];

arr.forEach(function(n){
    newArr.push(n*n);
})
console.log(newArr)

// Find :- Find method will return the first element which satisfies the condition

const transaction = [-123,-23,-234,-4,-56,-3,234];
const val = transaction.find(function(transaction){
    return transaction < 0;
})
console.log(val)

// findIndex :- will return the index of first element which satisfies the condition.

const index = transaction.findIndex(function(n){
    return n < 0;
});

console.log(index)

// some method :=== will return true if any of the element of array satisfies the condition 

const isNegative = transaction.some(function(n){
    return n < 0
})
console.log(isNegative)

// Every method :- will return true if all the elements of array satisfies the condition
const isPositive = transaction.every(function(n){
    return n < 0
})
console.log(isPositive);

// Filter method :- will return an array of elements which satisfies the condition

const resultantArr = transaction.filter((n)=>{
    return n < 0;
});

console.log(resultantArr);

// Reduce method :- will return a single value after applying all the operations in the function

var sum = arr.reduce(function(accumulator,val){
    return sum = accumulator + val;
},0);
console.log(sum);

// Chaining methods :- adding methods after one another

var arr1 = [
    {name : 'A',age : 223,gender : 'M'},
    {name : 'B',age : 2e3,gender : 'f'},
    {name : 'C',age : 243,gender : 'M'},
    {name : 'D',age : 233,gender : 'M'},
    {name : 'E',age : 253,gender : 'f'},
    {name : 'F',age : 213,gender : 'M'},
    {name : 'G',age : 253,gender : 'M'},
    {name : 'H',age : 283,gender : 'f'},
    {name : 'I',age : 617,gender : 'M'},
]

const ageArr = arr1.filter((gender)=>{
    return gender.gender == 'M';
}).map((age)=>{
    return age.age;
});
console.log(ageArr)