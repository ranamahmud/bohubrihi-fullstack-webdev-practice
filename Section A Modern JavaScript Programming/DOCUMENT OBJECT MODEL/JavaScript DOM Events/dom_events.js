// Events of JavaScript
// https://www.w3schools.com/JS/js_events_examples.asp

// OnClick

let btn = document.getElementById('sample-btn');
console.log(btn);
function message() {
    console.log("Button Clicked");
}

btn.addEventListener('dblclick', message);