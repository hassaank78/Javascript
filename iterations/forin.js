// forin loop is used to iterate through objects. syntax: for(const key in object){ console.log(key); }
//we can also access the value using this syntax: for(const key in myObj){ console.log(`${key} : ${myObj[key]})}
let myObJ = {
  firsName: "Hassan Khan",
  age: 18,
  rollNo: 6454
}

for (const key in myObJ) {
  console.log(`${key} : ${myObJ[key]}`);
}

// This loop iterates over the keys (name, age, city), and person[key] is used to access the values associated 
// with those keys. The dot notation (person.key) won't work in this context because it would try to access a 
// property named "key" rather than using the variable value.
