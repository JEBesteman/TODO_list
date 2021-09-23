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
   
    // const task = {description: "go to the gym", done: false};
    
    try {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result= await res.json();
        return result;
    } catch (error) {
        console.log("Task is niet aangekomen" + error);
    }
};


