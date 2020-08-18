let n =parseInt(prompt("Enter last digit of series"));
console.log(n);

let sum  = 0;
let series = "";
for (let i = 1; i <= n; i++) {
    let square = i*i;
    sum += square;
    series+= " "+square;
    if(i!=n)
    series += " +";
    
}
series += " = "+sum;
console.log(series);