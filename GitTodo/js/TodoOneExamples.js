"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector("#add-button");
   const todoInput = document.querySelector("todo-input");
   console.log(todoInput);
   addButton.addEventListener("click", () => {
       console.log("add", todoInput.value);
   })
})