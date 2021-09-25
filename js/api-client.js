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
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

//POST request
const postTask = async (todo) => {
    try {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await res.json();
        return result;
    } catch (error) {
        console.log("Task is niet aangekomen" + error);
    }
};

//DELETE request
const deleteTaskAPI = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, { 
            method: "DELETE"
        });
    } catch (error) {
        console.log("Task is not deleted!" + error);
    }
};

//PUT request
const UpdateTask = async (id) => {
    try {
        const response = await fetch(`${url}/${id}`, { 
            method: "PUT",
            body: JSON.stringify(change), //variabele (of andere) die ik straks maak in script.js
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log("Task is not updated!" + error);
    }
};
