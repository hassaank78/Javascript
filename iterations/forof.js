//for of loop is used to iterate through array, maps, string etc. the syntax of forof is 
// for(const key of array){ console.log(key) } the key holds the elements of the array and we do not need to 
//explicitly define the index, it does all the things that's why it is a special loop. 

let arr = ["hassan", "affan", "farhan", "saqib", "haniya"];
let myObj = {
  name: "Hassan Khan",
  age: "18",
  surname: "Khan"
}
const fullName = "Hassaan Khan";
console.log(arr[0]);


// forof loop
for (const item of arr) {
  // console.log(item);
}

for (const char of fullName){
  if(char == " "){
    continue;
  }
  console.log(char);
}

let myMap = new Map();
myMap.set("name", "Hassan Khan");
myMap.set("age", 18);
myMap.set("rollno", 54);
for(const [key, value] of myMap){
  console.log(key, ":", value);
}

