// Array Mapping

let numbers = [1, 2, 3, 4, 5];

let squares = numbers.map(function (item) {
    return item * item;
})

console.log(squares);

let cubes = numbers.map(item => item**3);

console.log(cubes);