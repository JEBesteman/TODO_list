//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");


// const getAllTasks = async () => {
//     const tasks = await getData();
//     return tasks;
// };

// getAllTasks();


const postNewTask = async () => {
    const newTodo = await postTask();
    return newTodo;  
};
// postNewTask(); 

// //add task to list 
// const addTaskToDom = (task) => {
//     const newLi = document.createElement("li");
//     const todo = document.createElement("span");
//     todo.textContent = inputField.value;
//     //todo.textContent = task.description hoe later te veranderen????
//     const bin = document.createElement("i");
//     newLi.setAttribute("id", task._id)//koppelen aan id request
//     bin.setAttribute("class", "deleteBtn far fa-trash-alt");
//     bin.setAttribute("id", task._id);
//     newLi.appendChild(todo);
//     newLi.appendChild(bin);
//     todoList.appendChild(newLi);
//     inputField.value = "";
//     return newLi;
// };
   

//voegt wel toe aan lijst maar li id = undefined.....

//werkt niet
const addTaskToDom = async () => {
    const tasks = await getData();
    tasks.forEach(task =>  {
    const newLi = document.createElement("li");
    const todo = document.createElement("span");
    todo.textContent = task.description;
    //todo.textContent = task.description hoe later te veranderen????
    const bin = document.createElement("i");
    newLi.setAttribute("id", `${task._id}`)//koppelen aan id request
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", `${task._id}`);
    newLi.appendChild(todo);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);
    inputField.value = "";
    return newLi;
    });
};

//eventListeners
addBtn.addEventListener("click", addTaskToDom);
// postNewTask();

//todoContent = task.description hoe later te veranderen????

//remove tasks from list!

const removeTask = async (e) => {
    const taskToRemove = e.target.parentElement;
    taskToRemove.parentElement.removeChild(taskToRemove); 
}

todoList.addEventListener("click", removeTask);

//werkt!!