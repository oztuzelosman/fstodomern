import axios from "axios";

const baseUrl = "https://tnbwk9-5000.csb.app/api/v1/todos";

const getAllToDo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data ------>", data);
    setTodo(data);
  });
};

const addToDo = (text, setText, setTodo) => {
  axios.post(`${baseUrl}/:id`, { text }).then((data) => {
    console.log(data);
    setText("");
    getAllToDo(setTodo);
  });
};

export { getAllToDo, addToDo };
