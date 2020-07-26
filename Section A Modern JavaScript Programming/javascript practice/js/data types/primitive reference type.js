let a = 7;
let b = a;
a = 45;
console.log(b);

let numbers = [1, 2, 3];
let newNumbers = numbers;
console.log(newNumbers);
numbers[1] = 500;
console.log(numbers);
console.log(newNumbers);