//map is also a method of array which is used to iterate over elements of array but it returns a new array unlike
//foreach() method. we can manipulate values using map().

const arr = [1, 2, 3, 4, 5];
const output = arr.map((item) => item * 5);
console.log(output);

const put = arr.forEach((item) => item * 5); //this returns undefined that's why we use map() to manipulate values in array
// console.log(put);

//we can use chaining of these methods for example
const chaining = arr.map((item) => item*5)
                    .map((item) => item-5)
                    .filter((item) => item >5);

console.log(chaining);

//we manipulated the array and based on a condition using filter() we got output.