"use strict";
console.log("Start of Anonymous Function");

function executor(resolve,reject)
{
    console.log("Inside Executor Function");
    console.log("Resolve : ", resolve);
    console.log("Reject : ", reject);
}
const p = new Promise(executor);
p.then(result => console.log(`Result is : ${result}`));
p.catch(error => console.log(error));
console.log("End of Anonymous Function");
