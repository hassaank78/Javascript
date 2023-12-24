// In this I am practicing strings and it's methods and property and string interpolation

//    String Interpolation(using backticks instead of quotes and ${} for including variable)
let firstName = "Hassaan";
let lastName = "Khan";
// console.log(`My fullName is ${firstName} ${lastName}`);

// Decalring and assigning string using new keyword

let fullName = new String("Hassaan Khan");
console.log(fullName);

// Practicing different string methods
// 1. at() => returns a character at the given index
// console.log(fullName.at(5));
// 2. charAt() => return a character at the given index
// console.log(fullName.charAt(3));
// 3. concat() => returns a concatinated strings 
// console.log(fullName.concat(' ', lastName));
// 4. endswith() => return true or false if the string ends with that particular word.
// console.log(fullName.endsWith("Khan"));
// 5. includes() => returns true or flase if the string includes the specified word (case-sensitive)!!
// console.log(`The string $fullName containes Khan => ${fullName.includes("Khan")}`);
// 6. indexof() => returns index of the particular word
console.log(fullName.indexOf("K"));