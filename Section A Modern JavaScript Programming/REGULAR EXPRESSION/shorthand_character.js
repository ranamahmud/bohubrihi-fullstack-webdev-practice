re = /\w/; // Word character - alpha numeric or _

str = "+8801811888889"
console.log(re.exec(str))

str = "(*&)"
console.log(re.exec(str))

str = "(*&v)"
console.log(re.exec(str))

str = "(*&vy)"
console.log(re.exec(str))

re = /\w+/
str = "(*&vy)"
console.log(re.exec(str))

str = "(*&vy)dsfsdf"
console.log(re.exec(str))

re = /\W+/ // one or more non word character
str = "(*&vy)"
console.log(re.exec(str))

re = /\W/ // non word character
str = "(*&vy)"
console.log(re.exec(str))

re = /\d/ // digit
str = "(2*&vy)"
console.log(re.exec(str))



re = /\d+/
str = "(22322*&vy)"
console.log(re.exec(str))



re = /\D/ // non digit single character
str = "(22322*&vy)"
console.log(re.exec(str))


re = /\D+/ // non digit single character
str = "(sdf22322*&vy)"
console.log(re.exec(str))


re = /\s/ // white space
str = "(sdf22322*&vy)"
console.log(re.exec(str))

re = /\s/ // white space
str = "(sdf2232 2*&vy)"
console.log(re.exec(str))


re = /\S/ // non white space
str = "(sdf2232 2*&vy)"
console.log(re.exec(str))

re = /\s+/ // white space more than 1
str = "(sdf2232  2*&vy)"
console.log(re.exec(str))

re = /Hello\b/; // word boundary
str = "Hello sdfsdf"
console.log(re.exec(str))
str = "Hellosdfsdf"
console.log(re.exec(str))



re = /\bHello/; // word boundary
str = "Hello sdfsdf"
console.log(re.exec(str))
str = "Hellosdfsdf"
console.log(re.exec(str))

// Assertions

re = /x(?=y)/ // matches x only if x is before y
str = "x"
console.log(re.exec(str))
str = "xsdfdf"
console.log(re.exec(str))
str = "xydfdf"
console.log(re.exec(str))


re = /x(?!y)/ // matches x only if x is not before y
str = "x"
console.log(re.exec(str))
str = "xsdfdf"
console.log(re.exec(str))
str = "xydfdf"
console.log(re.exec(str))


