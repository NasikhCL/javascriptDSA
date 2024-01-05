// Write a method that creates a new array with given values 
//  Expected Result: (3, 'a') => ['a', 'a', 'a'] 

const data = 3;
const valueToFill = 'a';

const fill = (arraySize, value) => new Array(arraySize).fill(value);

console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
