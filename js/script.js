//UI rest code
const todoList = document.getElementById("todoList");
const inputField = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const removeBtn = document.querySelector("bin")

const doSomethingWithData = async () => {
    const data = await getData();
    console.log(data);
};

// doSomethingWithData();

const doSomethingWithTask = async () => {
    const dataTask = await postTask();
    console.log(dataTask);
};

// doSomethingWithTask();
const clearList = () => {
    todoList.remove();
}
//add task to list 
const addTaskToDom = () => {
    const newLi = document.createElement("li");
    const newTask = document.createTextNode(inputField.value); 
    // newTask = description.value;
    const bin = document.createElement("i");
    newLi.setAttribute("class", "_id")//koppelen aan id request
    bin.setAttribute("class", "far fa-trash-alt");
    newLi.appendChild(newTask);
    newLi.appendChild(bin);
    todoList.appendChild(newLi);

};
//eventListeners
addBtn.addEventListener("click", addTaskToDom);
doSomethingWithData();
//2 nieuwe taak naar database met POST request
//const task = {description: "buy oatmeal", done: false};
//newTask = task.description

//werkt niet
const addTaskToDB = () => {
    postData({description: newTask, done: false});
};
addTaskToDB();

//werkt ook niet
const addTaskToDB = (task) => {
    newTask = task.decription.value;
    return newTask;
};
addTaskToDB();
//delete task from list


