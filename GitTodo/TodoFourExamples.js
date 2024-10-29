"use strict";
document.addEventListener("DOMContentLoaded", () => {
const root = document.querySelector("brendan");
const template = `
<div>
   <h1> Todo App </h1>
   <input id="todo-input"/>
   <button id="add-button"> Add items </button>
   <ul id="todo-list">
       <li> Sample Todo </li>
   </ul>
</div>
`;
root.insertAdjacentHTML("beforeend", template);
document.querySelector("#add-button")
.addEventListener("click", () => {
   document.querySelector("#todo-list")
   .insertAdjacentHTML("beforeend",
   `<li>
       ${document.querySelector("#todo-input").value}
   </li>`);
 });
});