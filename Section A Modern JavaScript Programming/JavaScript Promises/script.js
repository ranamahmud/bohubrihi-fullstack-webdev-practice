// Promises
// .then
let persons = [
    {firstName: "Simanta", lastName: "Paul"},
    {firstName: "Fazle",lastName: "Rahat"}
]

function createPerson(person) {
    let prom = new Promise();
    persons.push(person);
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output+= `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}
createPerson({firstName:"Rony",lastName:"Chy"})