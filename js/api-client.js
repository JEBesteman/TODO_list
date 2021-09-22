//alle request
const url = "http://localhost:3000";
//GET Request
const getData = async () => {
    try {
        const response = await fetch(url, { 
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

//POST request
const postTask = async () => {
    
    const task = {description: task, done: false};
    
    try {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const dataTask = await res.json();
        return dataTask;
    } catch (error) {
        console.log("Task is niet aangekomen" + error);
    }
};

//2 nieuwe taak naar database met POST request
//const task = {description: "buy oatmeal", done: false};
//newTask = task.description
