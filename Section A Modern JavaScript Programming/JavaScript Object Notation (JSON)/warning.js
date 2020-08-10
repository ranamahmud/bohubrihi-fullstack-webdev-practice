// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object

var person1 = {
    "name": "Rahim",
    "age": 25,
    "hometown": "Dhaka",
    "married": false
};

var person2 = {
    name: "Karim",
    age: 35,
    hometown: "Chittagong",
    married: true
};

console.log(person2);
console.log(person1);

// const person1_json = JSON.parse(person1);
// console.log(person1_json);
var person_json = JSON.stringify(person1);
console.log(person_json);
var person1_obj = JSON.parse(person_json);
console.log(person1_obj);

console.log(person1.name);
console.log(person1.age);