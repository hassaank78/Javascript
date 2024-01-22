let myObj = {
  name: "Hassaan Khan",
  email: "hassankhan@googleapplemicrosoftmeta.com",
  age: 18,
  isStudent: true,
  hobbies: ['earning money', 'chilling']
}

//There are 2 ways to access object values 1 using . operator and 2nd using [] square brackets.
//1: . operator
console.log(myObj.email);
//2: [] square brackets
console.log(myObj["email"]);

//question how to define symbol in object
let mySym = Symbol("Key1");
let jsUser = {
  [mySym]: "Hassan",
  age: 15
}
console.log(jsUser[mySym]);

//if you don't want the values in object to change you can freeze the object that allows no changes in object values even if done it will not 
//result in object values.  for example-
jsUser.age = 18;
// Object.freeze(jsUser);
jsUser.age = 20 //because I froze the object in the above line this will not result in change of object's age value
console.log(jsUser) //the value of age will be 18

jsUser.greeting = function(){
  console.log("Hello User");
}

myObj.greeting = function(){
  console.log(`Hello ${this.name} ❤❤`)
}
console.log(jsUser.greeting);
console.log(myObj.greeting());

//another way of creating object
let newObj = new Object({name: "Hassan Khan"});
console.log(newObj);

// we can also create an object inside an object and more if you want
let nestedObj = {
  email: {
    workEmail: {
      firstJobEmail: "email@gmail.com",
      secondJobEmail: "email@gmail.com",
    }
  }
}
// to access them use dot .operator 
console.log(nestedObj.email)//it will return it's value
console.log(nestedObj.email.workEmail) // it will return it's value
console.log(nestedObj.email.workEmail.firstJobEmail) // it will return it's value

// if you want to combine 2 objects then what there are which I know 2 methods 

let obj1 = {1: "a", 2: "b"};
let obj2 = {3: "a", 4: "b"};
//1. using assign() => it reutrns a copy of the combined objects
let combineObj = Object.assign({}, obj1, obj2);
console.log(combineObj);

// 2. using spread operator ...
let obj3 = {...obj1, ...obj2};
console.log(obj3);

//some methods of object

let mehtod1 = Object.keys(myObj);// returns array of keys of object
console.log(mehtod1);
let method2 = Object.values(myObj) // returns array of values of object
console.log(method2)
console.log(myObj.hasOwnProperty("name")) //returns boolean if the property is available or not