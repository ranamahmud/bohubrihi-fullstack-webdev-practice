var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers takes 64 bits

// + can be used for both addition and conatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25"-"5"
"25"/"5" // result 10
"25"*"5"
"25"%"5"
"25"+"5" //exception

//Infinity
var num = Infinity;
25/0 // will get Infinity


//Hexa Decimal Numbers
var x = 0xBB

x.toString() // Returns number as string

x.toString(16);

var x = 3.1416;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

var x = "123"
parseInt(x);
x = "123.45"
parseFloat(x);

isNaN(x);

//Links
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
