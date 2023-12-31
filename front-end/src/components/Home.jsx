/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillCheckCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";
const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://todo-api-ebon.vercel.app/get")

      .then((res) => {
        // console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (id) => {
    axios
      .put("https://todo-api-ebon.vercel.app/edit/" + id)

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete("https://todo-api-ebon.vercel.app/delete/" + id)

      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="home">
      <h1>Todo List</h1>

      <Create />

      {todos.length === 0 ? (
        <div className="">No Record </div>
      ) : (
        todos.map((todo) => (
          <div className="todo" key={todo._id}>
            <div className="checkbox " onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <BsFillCheckCircleFill />
              ) : (
                <BsCircleFill className="icon" />
              )}

              <p className={todo.done ? "line-through" : ""}> {todo.task}</p>
            </div>
            <div>
              <BsFillTrashFill
                onClick={() => handleDelete(todo._id)}
                className="icon"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
