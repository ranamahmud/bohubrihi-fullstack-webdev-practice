// Normal Declaration

function saySomething() {
    console.log("Hello World!");
}

// Function Expressions

let saySomething1 = function() {
    console.log("Hello World!");
}

saySomething();
saySomething1();

function saySomething2(name) {
    console.log("Hello "+name);
}

// Function Expressions

let saySomething3 = function(name2) {
    console.log("Hello !"+name2);
}

saySomething2("rana");
saySomething3("rana");

// Arrow Function (ES6)

let saySomething4 = () => { console.log("Hello World"); }
saySomething4();

let saySomething5 = (name3,name4) => { console.log("Hello "+name3 + " "+name4); }
saySomething5("JS","ES6");

let saySomething6 = name => { console.log("Hello ",name); }
saySomething6("rana");
