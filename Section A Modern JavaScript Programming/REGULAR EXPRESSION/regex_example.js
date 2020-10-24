// Example

let re;
let str;


// postal code
// 4700, 4000
re = /^[0-9]{4}$/
str = "4000"
console.log(re.test(str))

// Phone number
// 017458528548 +8801754681484 8801756824854
re = /^(\+)?(88)?01[0-9]{9}$/
str = "8801717888888"
console.log(re.test(str))

str = "+8801717888888"
console.log(re.test(str))

// Email Address
// bohubrihi.learn@edu.com.bd
re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/
str = "bohubrihi.learn@edu.com.bd"
console.log(re.test(str))




