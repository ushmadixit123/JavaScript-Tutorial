// Object Oriented Programming : - is a computer programming model which has organizes software design around data or objects, rather than functions and logic.

// four pillar
// 1.Encapsulation
// 2.Inheritance
// 3.Polymorphism
// 4.Abstraction

// inheritance :==

class Person {
    constructor(_name,_age){
        this.name = _name
        this.age = _age
    }
}

class Teacher extends Person{
    constructor(_name,_age,_studStrngth){
        super(_name,_age);
        this.studStrength = _studStrngth
    }
}

const T1 = new Teacher('Ushma',23,34);
console.log(T1);