//reduce is also a method of an array which is used to calculate total values of array, real life example of this
//would be calculating cart price. reduce method takes 2 arguments accumulator and currentvalue let's see an example.

let cartPrice = [500, 200, 400, 200];
const output = cartPrice.reduce((acc, currval) => acc+currval, 0);
//the 0 is added into the accumulator value only for the first time if you provide any other value than 0 then the 
//acc value will be that value, currval would be the first element of the array.
console.log(output); //1300

//let's see another example.
const cart = [
  {
    Item: "Samsung S24 Ultra",
    Price: 150000
  },
  {
    Item: "Iphone 15",
    Price: 80000
  },
  {
    Item: "Redmi Note 10 pro",
    Price: 12000
  }
]

const totalPrice = cart.reduce((accumulator, currentvalue) => accumulator+currentvalue.Price, 0);
console.log(totalPrice); //242000