let re;
re = /hello/;
re = /Hello/;
re = /hello/i; // i = case insensetive
console.log(re);
console.log(re.source);

str = "Hello World";
str = "Again Hello World";
str = "Hell World!";
str = "sdsHellosds World";
str = "Again Hello World Hello";
// exec() - Returns results in an array or null
let result = re.exec(str);
console.log(result);

// test() - true false

result = re.test(str);
console.log(result);

str = "World";
result = re.test(str);
console.log(result);

str = "Again Hello World Hello";
result = str.match(re);
console.log(result);

// match() - returns array or null
result = str.match(re);
console.log(result);

// search() - Returns index of the first match or - 1
result = str.search(re);
console.log(result);

str = "World";
result = str.search(re);
console.log(result);

// replace() - Return new String
str = "Again Hello World Hello";

let newstr = str.replace(re,"Hi");
console.log(newstr);
