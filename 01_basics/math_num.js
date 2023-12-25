// We can also define a number using new keyword
let myNum = new Number(100);
let pi = 3.1420;
/* toFixed() => formats a number to fixed point with the specified number of digits after the decimal
if the number is not specified in will round off like if the number after decimal is less than 5 then it will
round off to the same number and if greater than or equal to 5 then it will round off to it's next number. */
console.log(`toFixed(): ${pi.toFixed(2)}`);

// toString() represents a number in string format
console.log(pi.toString());

// like this there are more methods use the dot operator after number variable you will see all the methods

const pie = Math.PI;
let number = 100.90;

// Math.randome used to generate random numbers but it only generates between 0 and 1 so we gotta add logic
// to make it generate between what we want you know!! 
console.log(Math.floor(Math.random()*10) + 1);

//for example we want to make a dice game and for that we would have to generate between 1 to 6 so for that
//let's see the logic
const max = 7;
const min = 1
console.log(Math.floor(Math.random()*(max-min)) + 1);
// Suppose math.random() generates => 0.625
// then it is multiplied with (0.625) * (max-min(6)) => 3.75
// then math.floor function will round it to the whole number before the decimal => 3
// then we add 1 and make it => 4 (we add 1 because if 0 comes when math.floor function rounds) 

//always choose max 1 number up than what you want then you will get the highest number in this case 6 