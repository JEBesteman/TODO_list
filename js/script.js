//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.querySelector("#taskInput");
const addBtn = document.getElementById("addTaskBtn");
const deleteBtn = document.getElementsByClassName("deleteBtn");
// const checkbox = document.querySelector(".checkbox");

const addTaskToDom = async () => {
  const todos = await getData();

  todos.forEach((todo) => {
    console.log("this is the description; ", todo.description);
    const newLi = document.createElement("li");
    const todoText = document.createElement("span");
    const textNode = document.createTextNode(todo.description); //ipv innerHTML
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

const postNewTask = async () => {
  const todo = { description: inputField.value, done: false };
  await postTask(todo);
  await addTaskToDom(todo);
  inputField.value = "";
};

addBtn.addEventListener("click", (e) => {
  postNewTask();
  todoList.innerHTML = "";
});

const removeTask = async (e) => {
  const taskToRemove = e.target.parentNode;
  const id = taskToRemove.getAttribute("id");
  taskToRemove.remove(); //of toch await?
  await deleteTaskAPI(id);
};

addTaskToDom();

// checkbox
const changeStatusTask = async (e) => {
  const target = e.target;
  const id = target.getAttribute("id");
  const text = target.nextElementSibling.textContent;

  if (target.checked) {  
    target.nextElementSibling.classList.add("lineThrough"); //nextElementSibling, anders streep door removeBtn
    console.log(target.nextElementSibling);
    let change = {description: text, done: true };
    await updateTask(id, change);
    console.log(update);
  } else {
    target.nextElementSibling.classList.remove("lineThrough");
    let change = {description: text, done: false };
    await updateTask(id, change);
    console.log(update);
  };
};




//dan checked --> get id --> PUT body done: true met gekoppelde id //if else??
//unchecked --> get id --> put body done: false
//of  const ?? = checked.status --> PUT body done: checked.status














//aanpassen taak --> met PUT body: description: aanpassing
//edit button maken en edit field?
//of click event op span/textNode zetten en textNode als edit field maken. Hoe?? mogelijk??
//functie maken -> lege array niet aanpassen --> ook in forEach gedeelte
//aanpassing opslaan in new Description? OF new Headers en new Body gebruiken in PUT request om samen te voegen?














