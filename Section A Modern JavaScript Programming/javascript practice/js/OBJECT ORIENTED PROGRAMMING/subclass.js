// Sub Class
// Inheritance

// Base Class
class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greering() {
        return `Hello ${this.firstname} ${this.lastname}`
    }
}

// Sub class
class Customer extends Person {
    constructor(fname, lname, phone, memberShip) {
        super(fname, lname);
        this.phone = phone;
        this.memberShip = memberShip;
    }
    fullname(){
        console.log(this.firstname, this.lastname);
    }
}

let person1 = new Person("Rana","Mahmud");
console.log(person1);
console.log(person1.greering());

let customer1 = new Customer("Rony","Chy","0177777777","1234");

console.log(customer1);
console.log(customer1.greering());
console.log(customer1.fullname());