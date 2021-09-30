//alle request
const url = "http://localhost:3000";

//GET Request
const getData = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response.status); //200
    }
    return await response.json();
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
    if (res.ok) {
      console.log(res.status); //201
    }
    return await res.json();
  } catch (error) {
    console.log("Task is niet aangekomen" + error);
  }
};

//DELETE request
const deleteTaskAPI = async (id) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log(response.status); //204
    }
  } catch (error) {
    console.log("Task is not deleted!" + error);
  }
};

//PUT request
const updateTask = async (id, change) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(change),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      console.log(response.status); //200
    }
    return await response.json(); 
  } catch (error) {
    console.log("Task is not updated!" + error);
  }
};

