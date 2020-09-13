// Spread Operator
let numbers = [1, 2, 5, 7];
let numbers2 = [7, 8, 9];

let array = [...numbers, ...numbers2, 6, 7, 8];

console.log(array);

let person = {
    name: "x",
    age: 45
}
let another = { ...person, nationality: "Bangladesh" }
console.log(another);

// Rest Operator

let something = (...numArr) => console.log(numArr);

something(numbers);

something(1, 3, 5, 8);