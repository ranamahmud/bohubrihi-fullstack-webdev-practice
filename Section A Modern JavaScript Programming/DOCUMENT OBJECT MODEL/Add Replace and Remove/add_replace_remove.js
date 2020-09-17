// Adding element to DOM
// Create Element

let olItem = document.createElement('li');
olItem.className = "a new another-class";
olItem.id = "new-element";

// add attribute
olItem.setAttribute('title', 'A title to new Element');

olItem.appendChild(document.createTextNode('R'));
console.log(olItem);

document.querySelector('ol').appendChild(olItem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'http://www.instagram.com');
ulItem.appendChild(link);
console.log(ulItem);
console.log(link);

document.querySelector('ul').appendChild(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'))
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');
let parent = document.querySelector('.container');

// parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);
console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Removing Element

let listItems = document.querySelectorAll('li');

let list = document.querySelector('ul');

// listItems[0].remove();
// listItems[3].remove();

// list.removeChild(listItems[5]);
list.classList.add('test')
list.classList.add('test-new');

list.classList.remove('sample-class');

let val = list.hasAttribute('title');

list.setAttribute('title', "New Title");

list.removeAttribute('title');
console.log(val);
console.log(list);
console.log(listItems);