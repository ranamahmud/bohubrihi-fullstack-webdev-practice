// var and let and const
// let and const

// var a = 10;
// a = a + 7;
// var a;

// let b = 6;
// b = b * 67;

// let b; 

// Global Scope

var a = 1;
let b = 2;
const c = 3;

console.log("Global Scope: ", a, b, c);

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    var d = 5;
    console.log("Function Scope: ", a, b, c, d);
}

test();
console.log("Global Scope: ", a, b, c);

if (true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log("If Scope: ", a, b, c);
}

console.log("Global Scope: ", a, b, c);

for(let a = 0; a < 10; a++){
    console.log('loop: ', a);
}
console.log("Global Scope: ", a, b, c);

for(var a = 0; a < 10; a++){
    console.log('loop: ', a);
}
console.log("Global Scope: ", a, b, c);
