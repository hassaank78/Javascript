//Some times you will want a function to be invoked as soon as the application starts for that in js we have immediately invoked function
//also know as iife(e-fee)
//syntax: both for normal and arrow is same but if you are using 2 iife in the same file then you need to end the first iife by semicolon so
//that it stops executing otherwise.
(function myFunc(){
  console.log("Hassan Khan");
})();
//if you won't use semicolon before defining another iife after an iife then you will get an error
//if you want to pass arguments(for example your function takes parameter) then define it in the last parantheses.
((surname) => {
  console.log("Hassan", surname);
})("Khan");
//Okay that's all.(🌚)