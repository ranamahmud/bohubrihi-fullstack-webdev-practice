var student = {
    name: "Rahim",
    age : 26,
    hometown: "Dhaka"
};
console.log(student);
var student_json = {
    "name": "Rahim",
    "age" : 26,
    "hometown": "Dhaka"
}

console.log(student_json);

var student_json2 = JSON.stringify(student);
console.log(student_json2);

var student_new = JSON.parse(student_json2);
console.log(student_new);