"use strict";
function webWorker(){
    console.log("Start WebWorker()");
    const wb = new Worker("worker.js");
    wb.postMessage(10000);
    wb.onmessage = function(message){
        console.log(`Message from worker thread is : ${message}`);
    }
    console.log("End WebWorker()");
}
