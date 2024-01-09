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