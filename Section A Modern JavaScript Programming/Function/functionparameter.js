// FUnction parameter/argument

function saySomenthing(fname = "Rana", lname = "Mahmud") {
    console.log(`Hello ${ fname } ${ lname }!`);
}
saySomenthing();
//alert("Hello");
//let val = "Simanta";
let firstname = "Simanta";
let lastname = "Paul";

saySomenthing(firstname, lastname);


function addNum(a=0, b=0) {
    console.log(a+b);
}

addNum(4,5);
addNum(3.6, 2.3);

let sum = addNum(3.6, 2.3);
console.log(sum);

function addNum(a=0, b=0) {
    console.log(`${a} + {b} = {a + b}`);
    return a + b;
}
addNum(3.6, 2.3);