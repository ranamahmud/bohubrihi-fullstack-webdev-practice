var i = 1;
while (i<=10) {
    if(i==4){
        console.log("Value of is is:",i);   
    }
    console.log(i);
    i++;
}

var i = 1;
var sum = 0;
var product = 1;
while (i<=10) {
    sum = sum + i;
    i++;
    product = product * i;
}
console.log("Result: ",sum);
console.log("Product: ",product);