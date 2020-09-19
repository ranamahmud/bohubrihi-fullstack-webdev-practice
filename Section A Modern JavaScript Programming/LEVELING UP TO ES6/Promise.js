// Promises
// Successful -> resolve
// Failed -> reject
let prom = new Promise((resolve, reject) => {
    let a;
    setTimeout(() => {
        a = 1 + 3;
        if (a == 2) {
            resolve('Success');
        } else {
            reject('Failed');
        }
    }, 4000);
})
// .then .catch
prom.then((message) => {
    console.log("I am from then " + message);
}).catch((message) => {
    console.log("I am from catch " + message);
})


console.log("I am after Promise");

// Example : Image File