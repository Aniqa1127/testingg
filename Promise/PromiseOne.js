"use strict";
console.log("");

function executor(resolve,reject)
{
    console.log("");
    resolve();
}
const p = new Promise(executor);
console.log();

p.then(() => console.log(""));
p.catch(() => console.log(""));
console.log();
