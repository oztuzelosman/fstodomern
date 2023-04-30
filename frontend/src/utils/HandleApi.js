import axios from "axios";

const baseUrl = "https://tnbwk9-5000.csb.app/api/v1/todos";

const getAllToDo = async (setTodo) => {
  try {
    const { data } = await axios.get(baseUrl);
    console.log("data ------>", data);
    setTodo(data);
  } catch (error) {
    console.log(error);
  }
};

const addToDo = async (text, setText, setTodo) => {
  try {
    await axios.post(`${baseUrl}/:id`, { text });
    setText("");
    await getAllToDo(setTodo);
  } catch (error) {
    console.log(error);
  }
};

const updateToDo = async (toDoId, text, setText, setTodo, setIsUpdating) => {
  try {
    await axios.post(`${baseUrl}/:id`, { _id: toDoId, text });
    setText("");
    setIsUpdating(false);
    await getAllToDo(setTodo);
  } catch (error) {
    console.log(error);
  }
};

export { getAllToDo, addToDo, updateToDo };
