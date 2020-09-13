// Callback function

// setTimeout(function () {
//     console.log("Hello World!");
// }, 5000)

// let persons = [
//     { firstName: "Simanta", lastName: "Paul" },
//     { firstName: "Fazle", lastName: "Rahat" }
// ]
// function createPerson(person) {
//     setTimeout(function () {
//         persons.push(person)
//     }, 4000)
// }

// function getPerson() {
//     setTimeout(function () {
//         let output = '';
//         console.log("length: " + persons.length);
//         persons.forEach(function (person) {
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         });
//         console.log(output);
//         document.getElementById('output').innerHTML = output;

//     },1000)
// }

let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
]
function createPerson(person) {
    let prom = new Promise((resolve, reject) => {
        persons.push(person)
        let error = false
        if(!error){
            resolve()
        }else{
            reject('Error!: Something went wrong')
        }
    })
    return prom
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        console.log("length: " + persons.length);
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        console.log(output);
        document.getElementById('output').innerHTML = output;

    }, 1000)
}


createPerson({ firstName: "Rana", lastName: "Mahmud" })
.then(getPerson)
.catch(function(error){
    console.log(error);
})
