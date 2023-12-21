/*Conversion is done because while working in backend we don't know what type of value will come from frontend
so we need type conversion for this so let's start and there might be other reasons also.
*/

let score = "50";
//Now the above is of string data type and we are expecting a number so we need to convert it to number data type
let newScore = Number(score);
console.log(typeof(newScore));  // Now it is converted to a number we can perform number operation on this variable
// What if the string had letters to along with number
let age = "18abc";
let isAge = Number(age);
//it will give number but what if we console it on terminal
console.log(isAge);
//It outputs Nan which means not a number

//same is for other data type too like converting from number to bool or strign to bool etc.

let isStudent = true;
let nowStudent = String(isStudent);
console.log(nowStudent)

let newAge = 1;
let newboolAge = Boolean(newAge);
console.log(typeof(newboolAge));
console.log(newboolAge);

//You get the Idea if you want to convert from one to another data type we can use the name of the datatype first letter capital and in parenth
// eses the variable name like Number(variable_name);

/* **************************Operations ***************** */
console.log(1+1);
console.log(1-1);
console.log(1*1);
console.log(1/2);
console.log(2**3);
console.log(2%3)

console.log("1" + 2);
console.log("1" + 2 + 3);
console.log(1 +2 + "3");