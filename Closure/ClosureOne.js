"use strict";
let balance = 0;
    //Step 2 --->  1000
function deposit(amount){
    balance += amount;
     // Step 3 ---> The balance will be 0 and the amount will be 1000 
     //so add together balance and amount the total will be 1000/

    }
       // Step 5 ---> 500
function withdraw(amount){
    balance -= amount;
    /// Step 6 ---> The balance will be 100 and the amount will be 500
     //so we will subtract the balance and amount and the total will be 500

}
function print(){
    console.log("Your Balance is : ", balance);
    // Step 8 ---> printing the balance 
}
deposit(1000); // Step 1 ---> Calling deposit() Function and passing 1000 
withdraw(500); // Step 4 ---> Calling withdraw() Function and passing 500
print(); // Step 7 ---> Calling print() Function
