//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");


const doSomethingWithData = async () => {
    const data = await getData();
    console.log(data);
};

doSomethingWithData();

const doSomethingWithTask = async () => {
    const dataTask = await postTask();
    console.log(dataTask);
};

// doSomethingWithTask();

//add task to list 
const addTaskToDom = () => {
    const newLi = document.createElement("li");
    const todo = document.createElement("span");
    todo.textContent = inputField.value;
    //todo.textContent = task.description hoe later te veranderen????
    const bin = document.createElement("i");
    newLi.setAttribute("id", "._id")//koppelen aan id request
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", "._id");
    newLi.appendChild(todo);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);
    inputField.value = "";
    return newLi;
};
//eventListeners
addBtn.addEventListener("click", addTaskToDom);

//todoContent = task.description hoe later te veranderen????

//remove tasks from list!

todoList.addEventListener("click", async (e) => {
        todoList.removeChild(e.target.parentNode);
});

//werkt!!