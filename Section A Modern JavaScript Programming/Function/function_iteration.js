// Array iteration using foreach
var foods =["Cake", "Ice Cream", "Chocolates", "Brand"]

var numbers = [1, 32, 31, 2];
// 1st Parameter: Item
// 2nd Parameter: Index
// 3rd parameter: Array
foods.forEach(function (value) {
    console.log(value);
})

foods.forEach(function (value,i) {
    console.log(`Index: ${i} and Item ${value}`);
})


foods.forEach(function (value,i,abc) {
    console.log(`Index: ${i} and Item ${value}`);
    console.log(abc);
})

let printEverything = function (value,i,abc) {
    console.log(`Index: ${i} and Item ${value}`);
    console.log(abc);
}

foods.forEach(printEverything);


function addSomething(item) {
    return `${item} is a Food`
}

let arr_res = foods.map(addSomething);
console.log(arr_res);

let arr_square = numbers.map(function(item){return item*item;})
console.log(arr_square);