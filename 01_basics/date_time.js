//this declares current date and time
let newdt = new Date()
//there are various properties from which I/You can extract components from date like year month date hours minutes second miliseconds etc.
let yearNow = newdt.getFullYear();
let monthNow = newdt.getMonth();
let dateNow = newdt.getDate();
let timeNow = newdt.getTime();
let hoursNow = newdt.getHours();
let secondsNow = newdt.getSeconds();
let miliNow = newdt.getMilliseconds();

let consoleLog = `Current Year is ${yearNow}, Current Month is ${monthNow}, Current date is ${dateNow},
Current time is ${timeNow}, Current Hour is ${hoursNow}, Current second is ${secondsNow}and Current miliSecond
is ${miliNow}`;
// console.log(consoleLog);


// you can specify date in year month(starts from 0 so january is 0) and date and more like hours, second, miliseconds.
// let specificDate = new Date(2024, 5, 23);
// console.log(specificDate);

/* What if you want the exact difference from one moment to another don't worry in js you can get time stamp
Which are represented in miliseconds and you can then compare one date and the date from which you want to
compare you will get the exact difference */

console.log(Date.now()); //represents the current date in miliseconds
let specificDate = new Date(2024, 5, 23); // this is not in miliseconds till now for that you will have to use a mehtod
console.log(specificDate.getTime()); //this will give the timestamp of the specified date
// if(Date.now() > specificDate.getTime()){
//   console.log('Subscription Expired')
// } else{
//   console.log('ewww! subscription is active');
// }


//eventually we can play with dates( add/substract) or set different components(day, year, month etc.)
let dat = Date.now();
//we can add year, month, time and all components using a simple syntax, for ex you want to add one more year
// to the current date you can do so by using setyear method and adding one at the end
let expiryDate = new Date(dat);
expiryDate.setFullYear(expiryDate.getFullYear() + 1);
console.log(expiryDate);
