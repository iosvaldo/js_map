//Simplify the function in main.js with ES6

//1) create a function to use
//make a function from what we passed in as a callback function and simply returning an implicate return
const makeDouble = (numberItem) => numberItem * 2;

//we have the array
const numberArray = [2, 3, 4, 5, 6, 25];

//calling the function above
const doubleArray = numberArray.map(makeDouble);

//OR
const doubleArray2 = numberArray.map(n => n * 2);

console.log(doubleArray);
