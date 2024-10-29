"use strict";
let todoId = 1;
document.addEventListener("DOMContentLoaded", () => {
   const root = document.querySelector("brendan");
   const template = `
   <div>
       <h1> Todo App </h1>
       <input type="text" id="todo-input"/>
       <button id="add-button"> Add items </button>
       <ul id="todo-list">
       </ul>
   </div>
   `;
   root.insertAdjacentHTML("beforeend", template);

   document.querySelector("#add-button")
   .addEventListener("click", () => {
       const todoText = document.querySelector("#todo-input").value;
       const todoList = document.querySelector("#todo-list")
       .insertAdjacentHTML("beforeend", 
       ` <li id="todo-${todoId}">
       <input type="checkbox"/>
       <label> ${todoText} </label>
       <button>X</button>
       </li>`);
       const deleteButton = document.querySelector(`li#todo-${todoId}>button`);
       deleteButton.addEventListener("click", event => {
            const findLi = event.target.parentElement;
           todoList.removeChild(findLi);
       });
       todoId++;
    });
});