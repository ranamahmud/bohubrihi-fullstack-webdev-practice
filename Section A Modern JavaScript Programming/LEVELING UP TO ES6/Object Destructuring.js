// Object Destructuring

let person = {
    firstName: "Fazle",
    lastName: "Mahmud",
    dob: '09-27-1995'
};

// let fname = person.firstName,
// lname = person.lastName,
// dob   = person.dob;

// let {firstName, lastName, dob} = person;
// console.log(firstName, lastName, dob);

// let {firstName:fname, lastName, dob} = person;
// console.log(fname, lastName, dob);

function display({firstName, lastName, dob}) {
    console.log(firstName, lastName, dob);
}

display(person);