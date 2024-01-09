function myFunction() {
  console.log("Hello World!!");
}
//above is a normal function, we can pass parameters in functions for eg.

// function myNewFunction(number1, number2){
//    console.log(number1 + number2);
//   } 

//now to call this function we need to pass arguments(actual value) inside the parenthesis when calling the function
myNewFunction(4, 5);

//The problem with the above function is if we store it in a variable and then print the variable the value will be undefined.
const output = myNewFunction(4, 8);
console.log(output);

//that is because we are consoling the output which means it won't be stored in the variable to store it into the variable we need to use return (property I think);
//let's copy the same function and comment that so we can use it with the return (property or what I don't know), Well I just chatgpt'd it and it says it is a keyword
// which is used to write a stateement, you'll see

function myNewFunction(number1, number2) {
  return number1 + number2;
}

const returnOutput = myNewFunction(8, 48);
console.log(returnOutput);

//Now if you'll only call the function it won't print any thing because we are not to do that we need to console.log(myNewFunction(7849,94));
myNewFunction(7849, 94);
console.log(myNewFunction(7849, 94));

//we can pass default values to parameters in a function for example
function newFunction(number1 = 6, number2 = 1) {  //thala for a reason
  return number1 + number2;
}
//Note: no statement executes after return statement inside the function
//when calling the function and no arguments are passed the default values will be used otherwise vice versa.
console.log(newFunction());
console.log(newFunction(66, 48));

//For example you want to calculate cart total price then you will not know how many product's the user will add to solve that js has a rest operator same like spread
//operator 

function calculateCartPrice(...price){
  return price;
}

console.log(calculateCartPrice(7954,805,49834)); //we get array of the values then we can loop the array and calculate the total price

//now for example we have an object and we want to print (assume it is an api response(i don't even know about api response and never worked))
//I think we will know with what key value pairs it will respond, let's assume it will be username and amount, we need to print it somewhere so we can use a function

const user = {
  username: "Hassaank_78",
  amount: 433
}
function objectFunction(myObj){
  console.log(`your username is ${myObj.username} and amount is ${myObj.amount}`)
}
//when calling the function pass the actual object as parameter
objectFunction(user);

//let's do the same with array, assume we have to print the second value of the array;

const myArr = [584, 958, 8743, 974];
function arrayFunction(getArray){
  console.log(getArray[1]);
}
arrayFunction(myArr);