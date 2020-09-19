// Multiselector

let list = document.getElementsByClassName('sample-class');
// console.log(list);

console.log(list[0]);

list[0].style.background = "red";
list[0].style.color = "white";
list[0].style.padding = '10px';
list[0].textContent = "Hello World";

// document.getElementsByTagName

list = document.getElementsByTagName('li');
console.log(list);

list = document.querySelector('ol').getElementsByTagName('li');
console.log(list);
lis = Array.prototype.slice.call(list);
lis.forEach(function (item) {
    console.log(item);
})

// document.querySelectorAll
// id -> #
// className -> .
// tagName -> nothing
list = document.querySelectorAll('.sample-class');
console.log(list);

list = document.querySelectorAll('ul li');
console.log(list);

list.forEach(function (item) {
    console.log(item);
})

let liOdd = document.querySelectorAll('li:nth-child(odd)');
console.log(liOdd);
liOdd.forEach(function (item) {
    item.style.background = "gray";
    item.style.color = "white";
})
let liEven = document.querySelectorAll('li:nth-child(even)');
console.log(liEven);
liEven.forEach(function (item) {
    item.style.background = "red";
    item.style.color = "white";
})