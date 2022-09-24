import React from "react";
import "./Todo.css";
import { useState } from "react";
const completedStyle = { color: "green" };

const Todo = (props) => {
  const { title, id, completed } = props.todo;
  const [isCom, setIsCom] = useState(completed);
  console.log(isCom);

  const toggleStatus = () => setIsCom(!isCom);

  return (
    <div className={isCom ? "complete task" : "incomplete task"}>
      <p>Task no : {id}</p>
      <p>{title} </p>
      <button onClick={toggleStatus}>{isCom ? "Donne" : "Not Done"}</button>
    </div>
  );
};

export default Todo;
