"use strict";
console.log("Start of Anonymous Function");

const url = "https://api.github.com/users/octocat";

const userInfo = fetch(url);
console.log("User Info is : ", userInfo);
console.log("End of Anonymous Function");
