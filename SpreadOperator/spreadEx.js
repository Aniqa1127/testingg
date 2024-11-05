let userName = "Brendan";
console.log("Name is : ", ...userName);

const marks = [10,20,30,40,50];
console.log("Marks : ",...marks);
let age = "10"; // The type is string
console.log("Age is : ",...age);

// Object Literal (One of the ways to create object in JavaScript)
const employeeInfo = {firstName : "Brendan",
                      lastName  : "Eich",
                      age       :  61,
};

let newEmployeeInfo = {...employeeInfo};

newEmployeeInfo = {country : "USA",};

console.log("Old Employee Information : ", employeeInfo);
console.log("New Employee Info : ", newEmployeeInfo);


const users = ["Adam", "Brendan", "Chris", "David"];

const newUsers = [...users];

console.log("Users are : ", users);
console.log("New Users are : ", newUsers);

console.log("===========================================");

users.push("Eric");

console.log("Users are = ", users);
console.log("New Users are = ", newUsers);


//* In JavaScript array is mutable
const employees = ["patrick","John","Victor"];

// Here, newEmployees is a cloned object
const newEmployees = employees;

console.log("Type of Employee is : ", typeof employees);
console.log("Type of New Employee is : ", typeof employees);

console.log("Employees are : ", employees);
console.log("New Employees are : ", newEmployees);

newEmployees.push("Kyle");

console.log("=========================================");

console.log("Employees are = ", employees);
console.log("New Employees are = ", newEmployees);


// How to make an array is immutable in JavaScript?
// By using spread operator.

let oldStudents = ["Bob", "Sam", "Nathan"];

let clonedStudents = [...oldStudents];

console.log("Old Students are : ", oldStudents);
console.log("Cloned Students are : ", clonedStudents);

clonedStudents.push("Harris");
console.log("========================================");

console.log("Old Student are = ", oldStudents);
console.log("Cloned Students are = ", clonedStudents);
