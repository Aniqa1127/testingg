// ES6 Spread Operator with Object Literals

let empOne = {
    name : "Brendan",
    age  : 61,
}
let empTwo = {...empOne};
console.log(empOne); // {name:"Brendan", age:"61"}
console.log(empTwo) // {name:"Brendan", age:61}

empTwo = { country : "USA"};
console.log(empOne); // {name:"Brendan", age:61}
console.log(empTwo); // {country:"USA"}
console.log("===============================================");



let studentOne = {
    firstName : "Steve",
    lastName  : "Waugh"
}
let copiedStudent = studentOne;
console.log(studentOne); // {firstName: "Steve", lastName: "Waugh"}
console.log(copiedStudent); // {firstName: "Steve", lastName: "Waugh"}

copiedStudent = {
    country : "Australia",
}
console.log(studentOne); // {firstName: "Steve", lastName: "Waugh"}
console.log(copiedStudent); // {country: "Australia"}
console.log("================================================");


// Merging or Combing two or more object we will use spread operator
let empAndStudent = {...empOne, ...studentOne};
console.log(empOne); // { name: 'Brendan', age: 61 }
console.log(studentOne); // { firstName: 'Steve', lastName: 'Waugh' }
console.log(empAndStudent); // { name: 'Brendan', age: 61, firstName: 'Steve', lastName: 'Waugh' }
