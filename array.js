let myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr);
// console.log(myArr.join()); //this method turns array into string type
// myArr.push(6); //this method adds an element in the array
// console.log(myArr);
// myArr.pop(); //this method removes the last element from the array and it does not take any arguments
// console.log(myArr);
//copy operations in array create a shallow copy(which means they reference to the same memory address) which
//results in change in the original array if elements in the copied array are changed

//shift and unshift
// myArr.shift(); //removes the first element from the array
// myArr.unshift(5) //inserts element at the start of the array
// console.log(myArr);

// console.log(myArr.includes("Hasan"));
// console.log(myArr.includes(5));
// console.log(myArr.fill("JADOO")); //fills the whole array with the provided value
// console.log(myArr);
//slice and splice
// console.log(myArr.slice(1,3));
// console.log(myArr); //original array after using slice() remains the same
// console.log(myArr.splice(1,3));
// console.log(myArr); //original array after using is modified(read the following to understand fully)

/*so the difference between slice and splice is 
both take arguements starting index and ending index but slice() excludes ending index element and the original
array remains same, while using splice() it includes both starting and ending index but the elements of the 
specified index in splice() are removed from original array.*/

let marvel_heroes = ["Iron Man", "Thor", "Captain America"];
let dc_heroes = ["Batman", "Superman", "Aquaman"];

// marvel_heroes.push(dc_heroes); //this will push the dc_heroes array as a single element in the marvel heroes array.
// console.log(marvel_heroes);
// To avoid this we can use concat method of array which returns a new array
let new_array = marvel_heroes.concat(dc_heroes);
console.log(new_array)

//there is another way of doing the same using the spread operator
let all_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_heroes);
// It is used (spread operator) for simplicity and readability both(spread operator and concat() method) do the same thing;\

//If there is an array in which there is an array in which there is an array meaning an array inside an array inside an array it would be difficult to read an do operations on
//it, this is where flat operator comes in handy it converts the all arrays inside into the single array elements for example
let example_array = [1, 2, 3, [4,5,6], 7, [8, 9, [2, 4, 5], ], ];
let single_array = (example_array.flat(Infinity)) // it takes single argument asking how deep(how many levels) do you wanna go you can use infinity if you want or else
console.log(single_array);

//we can convert an element into an array
console.log(Array.isArray("Hassan")); // output: false
console.log(Array.from("Hassan")); // this will convert the provided arguments into array
//it can take any type like objects in terms of object you have to specify on what key or value you want to create an array
 CDATASection``