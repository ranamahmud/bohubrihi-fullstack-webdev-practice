// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData() {
    // Create XHR Object (Xml Http Request)
    let xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', 'data.txt', true);

    xhr.onprogress = function() {
        console.log(xhr.readyState);
    }

    xhr.onload = function () {
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
        }
    }

    //xhr.onreadystatechange = function () {
    //     // readyState Values
    //     // 0: request not initialized
    //     // 1: server connection established
    //     // 2: request received
    //     // 3: processing request
    //     // 4: request finished and response is ready
    //     //console.log(this.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    //console.log(xhr);
}