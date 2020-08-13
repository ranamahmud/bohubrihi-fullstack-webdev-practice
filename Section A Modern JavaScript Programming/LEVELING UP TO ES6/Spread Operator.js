// Spread Operator
let str = "Bohubrihi";
let newStr = [...str];
console.log(newStr);
let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["Orange", "Grape"];
let newFruit = "JackFruit";

let newArray = [...fruit1, ...fruit2, newFruit];
console.log(newArray);

let person = {
    fname: "Simanta",
    lname: "Paul"
}

let newPerson = {...person, dob: "08-26-1995"};
console.log(newPerson);