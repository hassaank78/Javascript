//this keyword is used within a context for example you want to call an object's instance that can be changed according to different users then 
//you can use this function for example the following object is created while user signs in and you want to welcome the user using their username
let user = {
  username: "Hassan",
  age: 18,
  //now you want to welcome user, so the value of username can change for different users with different user name
  welcome: function(){
    console.log(`Welcome ${this.username}.`)
  }
}

user.welcome();// output: Welcome Hassan.
// NOw if i cahnge the vlaue of username then the output would be different
user.username = "Hnaiya";
user.welcome();//output: welcome Haniya.

//If you console.log(this) then it would return an empty object and in browser it would return window object(window is an object I don't know)
console.log(this);

//what happens in function when we use this keyword
function myFunction(){
  let username = "hassaank_78";
  console.log(this.username); //output: undefined this keyword referes to global context not the function context
}

// myFunction();

//above is all which I have learned about this keyword. now let's talk about arrow function

// () => {
//   //syntax
// }

//arrow functions are generally stored in variables therefore

const arrowfunction = () => {
  console.log("Hello, World!")
}

arrowfunction();

//you can use arrow function differently
//1. implicit return: in which you don't have to define the return and have to write the statement in one line for example
const output = (a, b) => a + b;
console.log(output(3, 5))
//2. for example you want to return an object then you can use parantheses without using the return statement in single line
const output1 = () => ({username: "Hassan Khan"})
console.log(output1());

//What happens when you use this in arrow funciton
const output2 = () => {
  let username = "hassank_ 78"
  console.log(this.username);
}

output2();

//it also returns undefined. 