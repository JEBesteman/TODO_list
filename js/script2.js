//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");

const addTaskToDom = async () => {
    const todos = await getData();
    console.log(todos);
    todos.forEach(todo =>  {
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.textContent = todo.description;
    const bin = document.createElement("i");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", todo._id);
    newLi.appendChild(todoText);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);
    inputField.value = "";
    });
};

//eventListeners


const postNewTask = async () => {
    const todo = {decription: inputField.value, done: false};
    await postTask(todo);
    // const newTodo = await postTask(todo);
    // console.log(newTodo);
    addTaskToDom();
    // await addTaskToDom();
};

addBtn.addEventListener("click", postNewTask);



















//remove tasks from list!

const removeTask = async (e) => {
    const taskToRemove = e.target.parentElement;
    taskToRemove.parentElement.removeChild(taskToRemove); 
}

todoList.addEventListener("click", removeTask);

//werkt!!