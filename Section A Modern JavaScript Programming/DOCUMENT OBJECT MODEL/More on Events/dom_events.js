// document.getElementById('sample-btn').addEventListener('click', message);

// document.querySelector('.container').addEventListener('mousemove', message);
// document.querySelector('.container').style.backgroundColor = "red";
// function message(e) {
//     let val = e.target; // this
//     val = e.target.id;

//     val = e.timeStamp;
//     val = e.type;
//     val = e.clientY;
//     val = e.clientX;

//     val = e.offsetY;
//     val = e.offsetX;
//     val = this;
//     this.style.backgroundColor = `#${e.offsetX}`
//     console.log(val);
// }

document.querySelector('#name').addEventListener('focus', test);


document.querySelector('#name').addEventListener('keyup', test2);

function test(e) {
    this.style.background = 'pink';
    console.log("Focused");
}

function test2(e) {
    document.getElementById("demo").innerText = this.value;
    console.log(this.value);
}