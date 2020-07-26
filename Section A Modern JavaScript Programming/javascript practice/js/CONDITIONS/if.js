if (false) {
    console.log("if statement executed");
} else {
    console.log("Else statement executed");
}

console.log("End of If Statment");

var age = 70;
if (age >= 50) {
    console.log("Old");
} else {
    console.log("Under 50");
}

var age = 70;
if (age >= 50) {
    console.log("Old");
} else if (age >= 30 && age < 50) {
    console.log("Under 50 but above or equal 30");
} else if (age < 30 && age >= 18) {
    console.log("Under 30 but above or equal 18");
} else if (age < 18 && age >= 0) {
    console.log("Under 18");
} else {
    console.log("Invalid input");
}