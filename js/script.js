//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.querySelector("#taskInput");
const addBtn = document.getElementById("addTaskBtn");

const addTaskToDom = async () => {
  const todos = await getData();

  todos.forEach((todo) => {
    // console.log("this is the description; ", todo.description);
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    const textNode = document.createTextNode(todo.description); 
    const bin = document.createElement("i");
    const checkbox = document.createElement("input");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", todo._id);
    bin.addEventListener("click", removeTask);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    checkbox.setAttribute("id", todo._id);
    checkbox.addEventListener("change", changeStatusTask);
    todoText.appendChild(textNode);
    newLi.appendChild(checkbox);
    newLi.appendChild(todoText);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);

    if(todo.done) {
        checkbox.checked = true;
        newLi.classList.add("checked");         
        todoText.classList.add("lineThrough");
    }
  });
};

addTaskToDom();

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
  } 
});

//delete
const removeTask = async (e) => {
  const taskToRemove = e.target.parentNode;
  const id = taskToRemove.getAttribute("id");
  taskToRemove.remove(); 
  await deleteTaskAPI(id);
};

// checkbox change status
const changeStatusTask = async (e) => {
  const target = e.target;
  const id = target.getAttribute("id");
  const text = target.nextElementSibling.textContent;

  if (target.checked) {  
    target.nextElementSibling.classList.add("lineThrough"); //nextElementSibling, anders streep door removeBtn
    const change = {description: text, done: true };
    await updateTask(id, change);
  } 
  else {
    target.nextElementSibling.classList.remove("lineThrough");
    const change = {description: text, done: false };
    await updateTask(id, change);
  };
};



//aanpassen taak --> met PUT body: description: aanpassing, id koppelen
//edit button maken en edit field? edit button in inputField en save en "exit" button in edit field
//of click event op span/textNode zetten en textNode als edit field maken. Hoe?? mogelijk??
//functie maken -> lege array niet aanpassen --> ook in forEach gedeelte
//aanpassing opslaan in new Description? OF new Headers en new Body gebruiken in PUT request om samen te voegen?
//editField.value = inputFIeld.value = desription
//key up/down met enter om editField te committen?














