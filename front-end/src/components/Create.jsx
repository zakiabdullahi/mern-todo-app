import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("https://todo-api-ebon.vercel.app/add", { task: task })

      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="create_form">
      <input onChange={(e) => setTask(e.target.value)} type="text" />

      <button type="submit" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
