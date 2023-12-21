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


// *****************************************************************************************\\\
//Primitive data types are stored in stack and non-primitive data types are stored in heap which means
//when assigning a variable of primitive datatype to another variable a copy of the value will be assigned
// to that variable for example
let firstName = "Hassan";
let anotherName = firstName;
//Now what will happen when executing the above statement a copy of the original variable will be assigned to 
// anotherName variable
// console.log(firstName)
// console.log(anotherName)

//Now if I change the value of anotherName variable it will not change the value of the first variable
anotherName = "Khan";
console.log(firstName)
console.log(anotherName)
//see which is why it is also known as call by value data types.

//Non-primitive data types are stored in heap memory which means a reference of the value is assigned to the 
//variable for example if I have a variable name myObject then it's value will be stored in heap memory and 
// a reference to that memory will be asssigned to myObject variable for example

let myObj = {
  Name: "Hassan",
  Age: 18
}
//Now if i create another object and assign it the value of myObj variable that will also have a reference 
// to the memory assigned which is why it is also know as call by reference and changes in the value
//from one or another variable will result in changes of both the variales value becuase you get the point
// let's see it live 

let myanotherobj = myObj;

myanotherobj.Name = "Hassan Khan";
console.log(myObj)
console.log(myanotherobj)

// the above is funda of stack and heap in js which at least I know of, I don't know if there are more