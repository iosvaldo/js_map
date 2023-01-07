// The map() function
//-----------------------------
// Key points:
//similar to filter(), find(), forEach(), etc.
//SYNTAX: map((element,index,array) => {... return v})
//1st argument: we can loop through each element and it can be named contextually
//2nd argument: is the index; at which point we're looping throught the item in the array.
//3rd argument: is the actual array itself.
//finally we need to return a value each time we loop through
//map() creates a new array from calling function for every array element
//map() cals a function once for each element in an array.
//map() does not execute the function for empty elements.
//map() does not change the original array. 

// ---------------------------
//When NOT to use a map() function if;

// - - you're not using the array it returns; and/or
// - - you're not returning a value from the callback.
// forEach() function alternative
// -- if you want to go through each value ant not return any value its best to use a forEach loop.

// alert("hello world!");

// EXAMPLE ONE: Calling a Function on Each Item in an Array

//number array below; we want to double each item in the array
const numberArray = [2, 3, 4, 5, 55]
//create a doubleArray variable & call the numberArra.map function 
// here we have the callback function (numberItem => {
//  return numberItem * 2
//})
// returning the number which we're looping through numberItem * 2 which double the numbers
const doubleArray = numberArray.map(numberItem => {
  return numberItem * 2
})
//storing the new numberArray in the doubleArray variable
//we're mapping each value to its new value
//OUTPUT:(5) [ 4,6,8,10,110 ]




