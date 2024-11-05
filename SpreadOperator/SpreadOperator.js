let arrayOne = ["one","two","three"];
let arrayTwo = ["Four"];
console.log("Combining two arrays : ", arrayOne.concat(arrayTwo));
// Drawback of concat() function is that multiple concat() function will not
// be good in term of code readability

let combinedResult = [...arrayOne,...arrayTwo];
// In order to overcome the above problem, we have ES6 Spread Operator
console.log("Combined Result", combinedResult); 
console.log("======================================================");



let employees = ["Adam", "Brendan", "Chris", "David"];
// if we apply the Spread Operator with string then it will spread out the different characters 
let name = "Eric";
let result = [...employees,name];
console.log("Result is : ", result);

let finalResult = employees.concat(name);
console.log("Final Result is : ", finalResult);
console.log("=====================================================");


console.log("Minimum Number is : ", Math.min(10,20,30,40,50,60,70)); // Minimum Number is : 10
console.log("Maximum Number is : ", Math.max(80,90,100,110,120)); // Maximum Number is : 120
console.log("======================================================");


let highestScore = [110,230,445,900,231,877];
console.log("Highest Score is : ", Math.max(highestScore)); // NaN

// ES6 Spread Operator
console.log("The Highest Score is : ", Math.max(...highestScore)); // The Highest Score is : 900
// Imp Note : The same can achieve by using apply() method that is how we were using it before ES6 version.

// Before ES6, by apply() function:
console.log("The Minimum Score is : ", Math.min.apply(null,highestScore));
console.log("===========================================================");


const oneArray = ["One","Two"];
const twoArray = [...oneArray];
const objOne = {name: "Brendan Eich"}
const objTwo = {...objOne};
console.log(objOne); // Brendan Eich
console.log(objTwo); // Brendan Eich
console.log("================================================");


const todo = [
    {task:"coding", completed:true},
    {task:"cooking", completed:true}
]
function doTodo(newTodo)
{
    return[
        ...todo,
        {...newTodo,}
    ]
}
const newList = doTodo({task:"Garden", completed:true});
console.log("Old Todo is : ", todo);
console.log("New List is : ", newList);
