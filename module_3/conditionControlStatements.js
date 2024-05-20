// If statements
var age = 19;
if(age > 18){
    console.log("You are an adult!");
}

// If-else statements

if(age > 18){
    console.log("You are an adult!")
}
else{
    console.log("You are not an adult!");
}

// else- if ladder

var marks = 36;

if(marks < 30){
    console.log("C grade");
}
else if(marks > 30 && marks < 70){
    console.log("grade B");
}
else{
    console.log("Grade A");
}


// Loops =>>>>>>>>
// For loop
for(var i = 0; i < 5; i++){
    console.log(i);
}

// do-while loop
i = 0;
do{
    console.log("Condition satisfied!");
    i++;
}while(i > 5);

// while loop 
var j = 1;
while(j < 5){
    console.log(j);
    j++;
}

// All the above loops are used for array iterations
// for objects we have for-in loop

var Persons = {
    name : "Ushma",
    class:"A",
    age: 23
}
for(var Person in Persons){
    console.log(Person + " "+Persons[Person]);
}
// We can use this to iterate over the array as well
const Marks = [100,200, 300, 400];
// it gets key
for(var mark in Marks){
    console.log(mark + " "+ Marks[mark]);
}

// For of loops => The for of statements creates a loop iterating over iterable objects
// String , Array, nodeList,Set,Map

// it gets value
var str = "HEllo";
for(var letter of str){
    console.log(letter);
}
// If you want to get index and value both then you have to use entries method
// entries() method is not available in strings so convert it into array then iterate

for(var[index, value] of [...str].entries()){
    console.log(index + " "+ value);
}