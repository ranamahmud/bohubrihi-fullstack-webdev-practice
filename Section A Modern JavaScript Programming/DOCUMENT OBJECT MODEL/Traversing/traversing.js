// Traversing DOM
let val;
let list = document.querySelector('ul');

val = list;
console.log(val);

let listItem = document.querySelector('ul li');
console.log(listItem);

let firstChild = document.querySelector('ul li:first-child');
console.log(firstChild);
let lastChild = document.querySelector('ul li:last-child');
console.log(lastChild);

// Get the child node
val = list;
val = list.childNodes;
console.log(val);