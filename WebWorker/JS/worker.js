"use strict";
function longRun(ms){
    const start = new Date;
    while(new Date - start < ms)
    ;
}
onmessage = function(message){
    console.log("Message received from index.js", message.data);
    longRun(message.data);
    this.postMessage("Done");
}
