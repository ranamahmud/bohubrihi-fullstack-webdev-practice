let val;
val = this;
val = window;
val = window.document;
val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].href;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute('src');

links = document.links;
let linkArr = Array.from(links);

linkArr.forEach(function(link){
    console.log(link.getAttribute('href'));
});

console.log(links);
console.log(val);

// Dom Selector

val = document.getElementById('document-title');
console.log(val);

val = document.getElementById('document-title').id;
console.log(val);
// Changing Style

document.getElementById('document-title').style.backgroundColor ="#333";

document.getElementById('document-title').style.color ="#fff";

document.getElementById('document-title').style.padding ="5px";

// document.getElementById('document-title').style.display ="none";

document.getElementById('document-title').style.display ="block";

// Changing Content

document.getElementById('document-title').textContent = "New Title";

document.getElementById('document-title').innerHTML = "Again New Title";

document.getElementById('document-title').innerHTML = "<i>Again Again New Title</i>";

val = document.getElementById('document-title');

console.log(val);
val.innerText = "Ha Ha Ha";

// Query Selector

val = document.querySelector('#document-title');
console.log(val);

val = document.querySelector('.title-class');
console.log(val);

val = document.querySelector('h3');
console.log(val);

val = document.querySelector('ol');
console.log(val);

val = document.querySelector('li');
console.log(val);

val = document.querySelector('ol li');
console.log(val);

val = document.querySelector('ul li');
console.log(val);
val.style.backgroundColor = "red";
val.style.color="white";

val = document.querySelector('li:last-child');
console.log(val);

val = document.querySelector('li:nth-child(1)');
console.log(val);

val = document.querySelector('li:nth-child(2)');
console.log(val);

val = document.querySelector('li:nth-child(3)');
console.log(val);

val = document.querySelector('li:nth-child(1)');
val.innerHTML = "Hello Javascript";
console.log(val);

