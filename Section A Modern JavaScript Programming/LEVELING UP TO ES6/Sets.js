// Set
let arr = [1, 2, 2, 33, 33];

console.log(arr);

let mySet = new Set([1, 2, 2, 4]);
mySet.add(2);
// Delete
mySet.delete(4);
console.log(mySet);
// Check Member
console.log(mySet.has(4));

// Size
console.log(mySet.size);

// Iterating Sets
for (x of mySet) {
    console.log(x);
}

let iter = mySet.entries();
console.log(iter);

console.log(iter.next());

console.log(iter.next());

// Map

for (x of mySet.entries()) {
    console.log(x);
}

for (let [x] of mySet.entries()) {
    console.log(x);
}

iter = [...mySet.entries()];
console.log(iter);

mySet.forEach(value => console.log(value));