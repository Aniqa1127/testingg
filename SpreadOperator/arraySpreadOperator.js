// Spread Operator with Array
let names = ["Adam", "Brendan", "Chris", "David"];

// We are assigning the names values to copiedNames
let copiedNames = names;

console.log("Type of names :", typeof names); // object
console.log("Type of copiedNames :", typeof copiedNames); // object

// If we want to add an element in an array at the end, we will be using push() method
copiedNames.push("Eric");

console.log(names); // ["Adam", "Brendan", "Chris", "David", "Eric"]
console.log(copiedNames); // ["Adam", "Brendan", "Chris", "David", "Eric"]

let newNamesTwo = [...names];
newNamesTwo.push("Gags");
console.log(names); // ["Adam", "Brendan", "Chris", "David"]
console.log(newNamesTwo); // ["Adam", "Brendan", "Chris", "David", "Gaga"]
