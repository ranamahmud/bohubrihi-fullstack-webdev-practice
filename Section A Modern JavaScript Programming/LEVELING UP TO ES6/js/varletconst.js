// var a = 10;
// a = a + 7;

// var a;
// let b = 6;
// b = b * 76;

// const c = 7;
// c = 324;

// variable scoping
var a = 1;
let b = 2;
const c = 3;
console.log("Global Scope",a, b, c);

function test() {
    var a = 4;
    let b= 5;
    const c = 6;

    console.log("Funciton Scope",a, b, c);
}
test();

console.log("Global Scope",a, b, c);

if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log("If scope:" , a, b, c);
}
console.log("Global Scope",a, b, c);


for (let a = 0; a < 10;  a++) {
    console.log("loop",a);  
}


console.log("Global Scope",a, b, c);
