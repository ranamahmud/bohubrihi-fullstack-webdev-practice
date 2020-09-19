let re;
let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hello/i;
re = /lo W/i;
re = /loW/i;

// Meta Character
re = /^hello/; // Must start with
re = /hello$/; // Must end with
re = /rld$/; // Must start and end with

re = /^hello$/;
re = /^h.llo$/; // Matches any one character

re = /h.llo/;

re = /h*llo/; // 0 or more times
re = /he?llo/; // Optional
re = /he?a?llo/; // Optional
re = /hello\?/
str = "hello World";
str = "hello hello";
str = "hello";
str = "hallo";
str = "hillo";
str = "hllo";
str = "hillo hello";
str = "hello hello";
str = "hillo";
str = "hilo";
str = "hllo";
str = "h323232llo";
str = "hello";
str = "hllo";
str = "hallo";
str = "hllo";
str = "hello?";


console.log(re.exec(str));

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    } else {
        console.log(`'${str}' doesn't matches '${re.source}'`);

    }
}

reTest(re, str);