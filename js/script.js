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
  const text = target.nextElementSibling.textContent;

  if (target.checked) {  
    target.nextElementSibling.classList.add("lineThrough"); //nextElementSibling, anders streep door removeBtn
    const change = {description: text, done: true };
    updateTask(id, change);
  } 
  else {
    target.nextElementSibling.classList.remove("lineThrough");
    const change = {description: text, done: false };
    updateTask(id, change);
  };
};

//edit
//eerst editfield tonen
const editTask = async (e) => {
  const target = e.target; //editBtn
  const span = target.previousElementSibling;
  const spanText = span.innerHTML;
  const editField = 
    `<input type="text" class="editField" placeholder=${spanText} id=${target.id}>
    <input type="submit" id="saveEdit" value="Edit Task">`;
  span.innerHTML = editField;
}

const saveEditBtn = document.querySelector("saveEdit"); //null
console.log(saveEditBtn);
//eerst editfield aanmaken


//toggle op editBtn -> wel of niet tonen van editField
//met editTask button submitten (addEventListener) --> editField.value = description voor PUT en nieuwe textNode hoe??
//hoe zit het met checked status? in functie meenemen? isChecked = checkbox.checked of zoiets?
//weet even niet hoe aan te passen in put request...

//aanpassen taak --> met PUT body: description: aanpassing, id koppelen

//functie maken -> lege array niet aanpassen 
//aanpassing opslaan in new Description? OF new Headers en new Body gebruiken in PUT request om samen te voegen?
//editField.value = inputFIeld.value = description














