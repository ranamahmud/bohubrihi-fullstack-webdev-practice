// string 
// number (json object)
// array
// boolean
// null

// doesn't support undefined, date, function
var person = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka",
    married: false,
    dob: 1995 - 05 - 12,
    test_null: null,
    test_undefined: undefined,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

person.greet();
console.log(person);

var person_json = JSON.stringify(person);

console.log(person_json);

var person = {
    name: "Rahim",
    age: 26,
    hometown: "Dhaka",
    married: false,
    dob: '1995 - 05 - 12',
    test_null: null,
    test_undefined: undefined,
    greet: function () {
        console.log(`Hello ${this.name}`);
    }
}

person.greet();
console.log(person);

var person_json = JSON.stringify(person);

console.log(person_json);

