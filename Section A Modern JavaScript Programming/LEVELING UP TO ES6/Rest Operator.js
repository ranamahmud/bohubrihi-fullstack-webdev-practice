// Rest Operator ...

let fruits = ['apple', 'grape','mango', 'jackfruit'];
let [first,second, ...third] = fruits;
console.log(first);
console.log(second);
console.log(third);

let person = {
    fname: "Simanta",
    lname: "Paul",
    dob: "8-26-1995"
}

let {fname, ...lname} = person
console.log(fname);
console.log(lname);

let moreNum = [78,1,2,5,6];

let test = (name, ...numbers) =>{ // Rest
    console.log(name);
    console.log(numbers);
}

test("Shimanta", 67, 3, 3);
console.log("Shimanta", ...moreNum); //Spread