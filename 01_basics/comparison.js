// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2===1);

//above is basic and we know the output also but problem arises when we compare 2 different data types 

console.log("2" > 1)
//The above statement might not give expected results that is because when comparing string with a number the string
//gets converted to number 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

//the answer that above 3 statements give is false, true and false that is because js treats equality
// comparisons differently and greater than less than differently in gt and lt it converts null to 0 that's why 
//  we get that answer and I don't know what it does when doing equality comparison