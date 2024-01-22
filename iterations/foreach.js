//foreach is a method of array which is used to loop through the elements of array and it also returns index
//and whole array, syntax: array.foreach(callback func); call back function is (which I think) have no name and 
//executes directly. for each does not return anything even if explicitly defined.
let myArr = [1, 2, 3, 4, 5]

myArr.forEach(function (item){
  // console.log(item);
})

//for each loop has more values like index of each item and the whole array

myArr.forEach((item, index, array) => {
  // console.log(item, index, array);
})