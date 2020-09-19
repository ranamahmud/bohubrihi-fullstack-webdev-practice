let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo W/i;
re = /loW/i;

// Meta Characters
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /world$/;
re = /^hello$/; // Must start and end with
re = /^h.llo$/; // Matches any one character
re = /h.llo/;
re = /h*llo/; // 0 or more times
re = /he?a?llo/; // Optional
re = /hello?/; // escaping

str = "Again hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "h llo";
str = "hllo";
str = "hillo worlde";
str = "hello worlde";
str = "hillo";
str = "hilo";
str = "hhfsdhfsuillo";
str = "hello";
str = "hllo";
str = "hallo";
str = "htllo";
str = "heallo";
str = "hello";
str = "hallo";
str = "hllo";
str = "hello";
str = "hello?";



console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
    if (re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    }
    else {
        console.log(`'${str}' doesn't match '${re.source}'`);
    }
}