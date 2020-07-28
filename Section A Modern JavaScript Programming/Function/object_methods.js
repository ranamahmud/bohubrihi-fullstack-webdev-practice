// Object Method
let person = {
    firstname: "Rana",
    lastname: "Mahmud",
    dob:"9-9-1990",

    fullname: function () {
        return `${this.firstname}  ${this.lastname}`;
    }
}

console.log(person.fullname());

console.log(person.firstname);
console.log(person.lastname);

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());