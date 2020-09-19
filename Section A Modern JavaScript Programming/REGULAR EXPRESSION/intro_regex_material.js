// Regular Expression
// Pattern Matching Technique
let re;
let str;

re = /hello/;
re = /Hello/;
re = /hello/i;
console.log(re);
console.log(re.source);

str = "Hello World";
str = "Again Hello World";
str = "Hell World";
str = "sdfsfsHelloDSfsdf";
str = "Again Hello World Hello";
// exec() returns a result array null
let result = re.exec(str);
console.log(result);

// test()

result = re.test(str);

console.log(result);

// match() returns array or null

result = str.match(re);

console.log(result);

// search() - Returns index of the first match or -1
str = "World"
result = str.search(re);
console.log(result);

// replace() - Returns a new string
str = "Again Hello World Hello";

let newStr = str.replace(re, "Hi");
console.log(newStr);