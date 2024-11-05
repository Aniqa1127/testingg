const todos = [
    {task: "reading", finished:true},
    {task: "coding", finished:true},
];
function addTodo(newTodo)
{
    return todos.push(newTodo);
}
const newList = addTodo({task: "cooking", finished:false});
console.log(todos);
// [
//     { task: 'reading', finished: true },
//     { task: 'coding', finished: true },
//     { task: 'cooking', finished: false }
// ]
console.log(newList); // 3
console.log("============================================");


const todoList = [
    {task: "writing", finished:true},
    {task: "walking", finished:true}
];
function addTodoList(newTodoList)
{
    return [
        ...todoList,
        {...newTodoList}
    ];
}
const newLists = addTodoList({task:"sleeping",finished:false});
console.log(todoList);
// [
//     { task: 'writing', finished: true },
//     { task: 'walking', finished: true }
// ]
console.log(newList); // 3
