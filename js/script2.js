//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.querySelector("#taskInput");
const addBtn = document.getElementById("addTaskBtn");

const getTasks = async () => {
  const todos = await getData();
  addTaskToDom(todos);
};

getTasks();

const addTaskToDom = async () => {
  const todos = await getData();

  todos.forEach((todo) => {
    // console.log("this is the description; ", todo.description);
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    const textNode = document.createTextNode(todo.description); 
    const bin = document.createElement("i");
    const checkbox = document.createElement("input");
    const editBtn = document.createElement("i");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", todo._id);
    bin.addEventListener("click", removeTask);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("id", todo._id);
    checkbox.addEventListener("change", changeStatusTask);
    editBtn.setAttribute("class", "editBtn far fa-edit");
    editBtn.setAttribute("id", todo._id);
    editBtn.addEventListener("click", editTask);
    todoText.appendChild(textNode);
    newLi.appendChild(checkbox);
    newLi.appendChild(todoText);
    newLi.appendChild(editBtn);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);

    if(todo.done) {
        checkbox.checked = true;
        newLi.classList.add("checked");         
        todoText.classList.add("lineThrough");
    }
  });
};

//add task
const postNewTask = async () => {
  const todo = { description: inputField.value, done: false };
  await postTask(todo);
  await addTaskToDom(todo);
  inputField.value = "";
};

addBtn.addEventListener("click", () => {
  if(inputField.value !== "") {
    postNewTask();
    todoList.innerHTML = "";
  } else {
    alert("Vul een nieuwe taak in!");
  };
});

inputField.addEventListener("keyup", (e) => {
  if (e.code === "Enter" && inputField.value !== "" ) {
    postNewTask();
    todoList.innerHTML = "";
  } return;
});

//delete
const removeTask = async (e) => {
  const taskToRemove = e.target.parentNode;
  const id = taskToRemove.getAttribute("id");
  taskToRemove.remove(); 
  deleteTaskAPI(id);
};

// checkbox change status
const changeStatusTask = async (e) => {
  const target = e.target;
  const id = target.getAttribute("id");

  if (target.checked) {  
    target.nextElementSibling.classList.add("lineThrough"); 
    const change = {done: true };
    updateTask(id, change);
  } 
  else {
    target.nextElementSibling.classList.remove("lineThrough");
    const change = {done: false };
    updateTask(id, change);
  };
};

//edit
let toggle = true;
let editField;
const editTask = async (e) => {
  const target = e.target; 
  const taskItem = target.previousElementSibling;
  const taskItemText = taskItem.innerHTML;

  if(toggle){
    editField =
    `<input type="text" class="editField">
    <input type="submit" class="saveEdit" value="Edit Task">`;
    
    const saveEdit = document.querySelector(".saveEdit");
    toggle = false;
  
    // saveEdit.addEventListener("click", () =>  edit(target.id, document.getElementById("1").value, taskItem));
    saveEdit.addEventListener("click", () =>  edit(target.id, document.querySelector(".editField").value, taskItem));
}};

