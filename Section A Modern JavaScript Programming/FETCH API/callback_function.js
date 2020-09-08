// Callback function

// setTimeout(function () {
//     console.log("Hello World");
// }, 5000)

let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
]

function createPerson(person) {
    setTimout(function () {
        perons.push(person);
    }, 4000);
}

function getPerson() {
    setTimout(function () {
        let output = '';
        perons.forEach(function (person)){
            oputput += `<li>${person.firstName} ${person.lastName}</li>`
        }
        return output;
    }, 1000)
}

createP