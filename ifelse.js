//I am familiar with if, else if, and else hence I won't be doing so much
// if(8<10){
//   console.log("This is true")
// }

// if(8<10){
//   console.log("This is false")
// } else{
//   console.log("8 is less than 10")
// }

// if(false) console.log("this is true");
// else console.log("this is false");
// if(true) console.log("this is true");
// else console.log("this is false");

//there are turthy and flasy values example I have a string variable and it contains a value, if I pass the string in if block and console it
//then if there will be value in the string it will execute if block otherwise.

let username = "hassaank_78"
if(username){
  console.log(username);
}else{
  console.log("no username")
}

//In the above example the username variable contains a value which makes it true and when I pass this in the if block the if block executes.
//some falsy values
//null, undefined, bigint(reference) 0n, 0, -0, Nan, false (I don't know if there are more else all other are turthy values)

//Terniary operator which is used to write if else in one line
//Syntax: condition ? true statement : false statement
username == "hassaank_78" ? console.log("Username") : console.log("No username");

//One more operator which is nullish coliseance(i thingk spelling is wrong but spirit is there) operator which
//is used when interacting with databases because we don't know what value will come from database therefor we use
//this(nullish coli...) operator to take control of the situtation

let myVal = 8 ?? 11;
console.log(myVal);

//It assings value to the variable for example if null came as a response from the database and we don't want 
//null then we can assign another value(I haven't uderstood it's full potentials or how it will be used but I have
// the basic idea)