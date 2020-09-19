// Promise
// Successful -> Resolve
// Failed -> Reject

let prom = new Promise((resolve, reject) => {
    let a = 1 + 1;

    if(a == 2){
        resolve('Success');
    }else{
        reject("Failed");
    }
})

// .then .catch

prom.then(message => console.log(message))
.catch(message)