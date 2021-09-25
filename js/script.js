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
    const checkbox = document.createElement("input");
    newLi.setAttribute("id", todo._id);
    bin.setAttribute("class", "deleteBtn far fa-trash-alt");
    bin.setAttribute("id", todo._id);
    bin.addEventListener("click", removeTask);
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "check");
    // checkbox.addEventListener("change", changeStatusTask);
    todoText.appendChild(textNode);
    newLi.appendChild(checkbox);
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
    window.location.reload();  //is dit de beste oplossing voor dubbele lijst te voorkomen?
});

const removeTask = async (e) => {
    const taskToRemove = e.target.parentNode;
    const id = taskToRemove.getAttribute("id");
    taskToRemove.remove(); //of toch await?
    await deleteTaskAPI(id);
};

addTaskToDom();

//functie checkbox -> const changeStatusTask = async(e) => {} ?
//checken of checkbox unchecked of checked is
//checked -> (newLi).classList.add(lineThrough)
//dan checked --> get id --> PUT body done: true met gekoppelde id //if else??
//unchecked --> get id --> put body done: false
//of  const ?? = checked.status --> PUT body done: checked.status
//localStorage of cookies nodig om checked checkbox te bewaren na refresh pagina??

//aanpassen taak --> met PUT body: description: aanpassing
//edit button maken en edit field?
//of click event op span/textNode zetten en textNode als edit field maken. Hoe?? mogelijk??
//functie maken -> lege array niet aanpassen --> ook in forEach gedeelte
//aanpassing opslaan in new Description? OF new Headers en new Body gebruiken in PUT request om samen te voegen?














