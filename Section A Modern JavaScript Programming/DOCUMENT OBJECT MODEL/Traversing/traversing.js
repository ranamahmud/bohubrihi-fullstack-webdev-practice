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
list = document.querySelector('ul');
val = list;
console.log(list);

val = list.childNodes[0];
console.log(val);
val = list.childNodes[1];
console.log(val);
val = list.childNodes[1].nodeName;
console.log(val);
val = list.childNodes[1].nodeType;
console.log(val);

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 comment
// 9 document itself
// 10 doctype
val = list.childNodes;
val = list.children;
console.log(val);

val = list.children[1];
console.log(val);
list.children[0].textContent = "Hello";


val = list.children[1].children;
console.log(val);
val = list.children[1].children[0].href;
console.log(val);

val = list.firstChild;
console.log(val);

val = list.firstElementChild;
console.log(val);

val = list.lastElementChild;
console.log(val);

val = list.childElementCount;
console.log(val);

console.log(listItem);

val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

val = listItem.nextSibling;
console.log(val);
val = listItem.nextSibling.nextSibling;
console.log(val);

val = listItem.nextElementSibling;
console.log(val);
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);

val = document.querySelector('ul li:last-child');

val = val.previousSibling;
console.log(val);

val = document.querySelector('ul li:last-child');

val = val.previousSibling;
console.log(val);