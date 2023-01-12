//2) Converting a string into an array

//we have a strng and we want to loop through all the different characters and hen do something with those characters. For example, lets say we want to double each letter and then go ahead and create an aray from those values then rejoin it together. 
// the split('') method will break apart the string and turn them into separate into an array of values.
const myName = "Osvaldo"
const nameArray = myName.split('');
const newName = nameArray.map((l) => `${l}${l}`);
console.log(newName)
// the join function will rejoin the string
const joinedNewName = newName.join('')
console.log(joinedNewName)