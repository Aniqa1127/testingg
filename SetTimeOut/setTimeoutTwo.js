"use strict";
console.log("Start");
setTimeout(()=>{console.log("Call Back");},5000);
const h1 = () => {
    console.log("Start h1()");
    h2(3500);
    console.log("End h1()");
}
const h2 = ms => {
    console.log("Start h2()");
    const start = new Date;
    while(new Date - start < ms)
    /* Do Nothing */;
console.log("Bye from h2()");
while(new Date - start < ms)
/* Do Nothing Again */;
console.log("Final Bye from h2()");
}
h1();
