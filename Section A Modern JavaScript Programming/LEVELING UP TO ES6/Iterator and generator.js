// Iterator 
let iterable = "Hello";

iterable  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Symbol.iterator

let iter = iterable[Symbol.iterator]();
console.log(iter);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log("Other codes");
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


let names = ["Rahim", "karim","Rony", "Rana"];
// custom iterator

function customIterator(arr){
    let i = 0;

    return {
        next: function(){
            return i < arr.length ? {value: arr[i++], done:false} : {value: undefined, done:true};
        }
    }
}

let members = customIterator(names);
console.log(members.next());

// Generators

function* genFunction(){
    console.log("I am some code");
    yield 1;
    // return;
    console.log("I am some code");
    yield "Rahim";
    console.log("I am some code");
    yield 4;
    yield "Karim";
    yield "Hello World";
}

let iter2 = genFunction();

console.log(iter2);

console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);