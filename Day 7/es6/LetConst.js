//let
{
let name = "John";
const pi = 3.14;
console.log("let and const is globle scope");
console.log("value of name is: " ,name);
 console.log("value of pi in block scope:", pi);
 }
 console.log("type of name");

console.log("let and const is globle scope");
console.log("value of name is: " ,name);
console.log("value of pi in block scope:", pi);



function getvalue(){
let name = "John";
const pi = 3.14;
 console.log("let and const is globle scope");
 console.log("value of name is: " ,name);
 console.log("value of pi in block scope:", pi);
 }

getvalue();
console.log("let and const is globle scope");
console.log("value of name is: " ,name);
console.log("value of pi in block scope:", pi);