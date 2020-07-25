//Collection of items
countries = ["Bangladesh", "USA", "UK"]

countries[0]
countries[1]

country = countries[0]
country

//Mutable
countries[0] = "Poland"
countries
countries.length;
countries[countries.length] = "Norway"

//Push and Pop
countries.push("China"); // return length
countries.pop() // returns length
countries.push("Japan", "Srilanka");
countries.shift() //returns the shifted
countries.unshift("Germany") // returns length


//Empty array
var numbers;
numbers = []
numbers.push(1)
numbers.push(78)
numbers.push("One")

x = "Bangladesh"
var y = x.split("")
x = "Bangladesh is a country"
y = x.split("")
y = x.split("n")
z = x.split(" ")
x = "Bangladesh, China, Finland"
y = x.split(",")

z.toString()
z.join("/")

x.concat(z, y);

countries.sort()
countries.reverse()


//Links
//https://www.w3schools.com/jsref/jsref_obj_array.asp