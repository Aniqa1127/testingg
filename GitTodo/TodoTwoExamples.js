"use strict";
document.addEventListener("DOMContentLoaded", () => {
   let addButton = document.querySelector("#add-button");
   let todoInput = document.querySelector("#todo-input");
   let todoList = document.querySelector("#todo-list");
   console.log(todoInput);

   addButton.addEventListener("click", () => {
       const todoItem = document.createElement("li");
       todoItem.innerHTML = todoInput.value;
       todoList.appendChild(todoItem);
   });
});