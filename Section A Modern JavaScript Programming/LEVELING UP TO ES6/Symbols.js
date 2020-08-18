// Symbols
let a = Symbol()
let b = Symbol()

console.log(a, b)

console.log(a == b)
console.log(a === b)

let person = {
    name: "Rana",
    age: 25,
    [a]: "Hello World!"
}

console.log(person);

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));

for(x in person){
    console.log(x)
}

let sym1 = Symbol("Hello");
let sym2 = Symbol("Hello");

console.log(sym1 == sym2);
