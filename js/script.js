//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.querySelector("#taskInput");
const addBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");

const addTaskToDom = async () => {
    const todos = await getData();
    
    todos.forEach(todo =>  {
    console.log("this is the description; ", todo.description);
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    const textNode = document.createTextNode(todo.description); //ipv innerHTML
    const bin = document.createElement("i");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", todo._id);
    bin.addEventListener("click", removeTask);
    todoText.appendChild(textNode);
    newLi.appendChild(todoText);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);
    });
};


const postNewTask = async () => {
    const todo = {description: inputField.value, done: false};
    await postTask(todo);
    await addTaskToDom(todo);    
    inputField.value = "";
};

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    postNewTask();
    window.location.reload();  
});

const removeTask = async (e) => {
    const taskToRemove = e.target.parentNode;
    const id = taskToRemove.getAttribute("id", "todo_id");
    taskToRemove.remove(); 
    await deleteTaskAPI(id);
};

addTaskToDom();














