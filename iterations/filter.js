//filter is a method of array which filters data from array based on condition
const myArr = [1, 2, 3, 4, 5];
const filterOutput = myArr.filter((num) => num > 2); //if you remember the functions file we have learned about
//implicit returns that is what this callback function is doing and if you want to return obj then you need to 
//give curly braces and it will acts as a implicit function.
//in the above example the method returns values that are greater than 2.
console.log(filterOutput);

//let's look at real life example of filter method, let's assume user got the following array in response
//to their query, now user applies filter to the to get books of his choice we can do this by using filter method

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

//for example user wants books related to fiction
const filteredOutput = books.filter(function (book){ return book.genre === "Fiction" });
console.log(filteredOutput);
//same we can do for different choices.