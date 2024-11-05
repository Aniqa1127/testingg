"use strict";
function zoo(){
    const tiger = "isAlive";
    const lion = "dead";

    function cage(){
        console.log("Tiger",tiger);
    }
    return cage;
}
const lockup = zoo();
console.log(lockup);
