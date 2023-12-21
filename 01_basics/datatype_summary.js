//There are 2 types of data types in js Primitive and non-primitive data types.
//1. Primitive data types=> 7 types => string, number, bigint, symbol, boolean, null and undefined.

var fullName = "Hassan Khan";
var age = 18;
var bigNumber = 8080750347503740n;
var isStudent = true;
var hasMoney;
var something = null;
// symbol is used for giving uniqueness to 2 same things i haven't understood fully but that is what it is used for

//2. Non-primitive data types => function, objects and array
var arr = [1, 2, 3,4];
var myObject = {
  Name: "Hassaan",
  Age: 18
}

function myFunction(){
  console.log(typeof(myFunction));
}
myFunction();