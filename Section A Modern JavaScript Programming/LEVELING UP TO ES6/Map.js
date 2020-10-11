// Maps
let myMap = new Map([
    ['first key', 10],
    ['second key', 'Bohubrihi']
]);

// Add 
myMap.set('third key', 'Hello World');

console.log(myMap);

console.log(myMap.get('first key'));

console.log(myMap.has('first key'));


// iterate
for (let x of myMap) {
    console.log(x);
}

for (let [x, y] of myMap) {
    console.log(x, y);
}

for (let x of myMap.keys()) {
    console.log(x);
}

for (let x of myMap.values()) {
    console.log(x);
}


for (let x of myMap.entries()) {
    console.log(x);
}

myMap.forEach((x, y) => console.log(x, y))

let arr = Array.from(myMap);

console.log(arr);

arr = Array.from(myMap.keys());

console.log(arr);

arr = Array.from(myMap.values());

console.log(arr);