// Math Object
let val;

val = Math.PI
console.log(val);


val = Math.E
console.log(val);


val = Math.round(2.323423);
console.log(val);

val = Math.ceil(2.323423);
console.log(val);

val = Math.floor(2.323423);
console.log(val);

val = Math.sqrt(81);
console.log(val);

val = Math.abs(-2);
console.log(val);

val = Math.pow(2,3);
console.log(val);

val = Math.min(1,8,-8,1,0);
console.log(val);

val = Math.max(1,8,-8,1,0);
console.log(val);

val = Math.random();
console.log(val);

val = Math.random() * 100 + 1;
console.log(val);

val = Math.floor(Math.random() * 100 + 1);
console.log(val);

// Date Object
let today = new Date();
console.log(today);

val = today;
console.log(today);

val = today.toString();
console.log(val);

let birthday = new Date("08-26-2010");
val = birthday;
console.log(val);

birthday = new Date("08-26-2010 11:25:27");
val = birthday;
console.log(val);

birthday = new Date("August 26 1996");
val = birthday;
console.log(val);

birthday = new Date("8/26/1996");
val = birthday;
console.log(val);

val = today.getMonth();

console.log(val);

console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());

console.log(today.getHours());

console.log(today.getMilliseconds());

// timestamp => Amount of seconds past since january 1970
val = today.getTime();

console.log(val);

//  Step

birthday.setMonth(2);
birthday.setDate(24);
birthday.setFullYear(1995);
birthday.setHours(18);
console.log(birthday);

