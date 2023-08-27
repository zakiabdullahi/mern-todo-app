import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");
  const handleAdd = () => {
    axios
      .post("http://localhost:30001/add", { task: task })

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
