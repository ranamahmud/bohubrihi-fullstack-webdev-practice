// ES5 Constructor

function Person(age, name) {
    this.age = age;
    this.name = name;
}

Person.prototype.getName = function () {
    console.log(this.name);
}

// ES6 Class
// class Person {
//     constructor(age, name) {
//         this.age = age;
//         this.name = name;
//     }

//     getName() {
//         console.log(this.name);
//     }
// }
let person1 = new Person(25, "Rahim");
console.log(person1);
person1.getName();
