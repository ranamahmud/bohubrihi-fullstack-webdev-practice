// Normal Declaration
function sayHello() {
    console.log("hello World");
}

sayHello();

let saySomething = () => {
    console.log("I am arrow function");
}
saySomething()


let saySomething2 = (name, age) => {
    console.log(name, age);
}
saySomething2("Rahim", 27)

let saySomething3 = name => {
    console.log(name);
}
saySomething3("Rahim")


let saySomething4 = name =>
    console.log(name);

saySomething4("Rahim")

let saySomething5 = name => {return name;}
console.log(saySomething5("Rahim"));


let saySomething6 = num =>num*num
console.log(saySomething6(25));