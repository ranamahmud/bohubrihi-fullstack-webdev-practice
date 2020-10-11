fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(data => { });


// async await

async function getJokes() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/');
    let data = await response.json();
    return data;
}

getJokes().then(jokes => console.log(jokes));