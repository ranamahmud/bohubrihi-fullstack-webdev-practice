// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes(e) {

    let xhr = new XMLHttpRequest();
    let number = document.getElementById('numberJokes').value
    xhr.open('GET', `http://api.icndb.com/jokes/random/` + number, true)

    xhr.onprogress = function () {
        document.getElementById('output').innerHTML = "<h3><Loading......</h3>";
    }
    xhr.onload = function () {
        document.getElementById('output').innerHTML = ""
        if (this.status === 200) {
            let data = JSON.parse(this.responseText)
            let jokes = data.value;
            let output = document.createElement('ol')
            jokes.map(joke =>
                output.innerHTML += `<li>${joke.joke}</li>`
            )
            document.getElementById('output').appendChild(output)
        }
    }
    xhr.send()
}