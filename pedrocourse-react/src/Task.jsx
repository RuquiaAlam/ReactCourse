import React from "react";

const Task = (props) => {
  return (
    <div key={props.index}>
      <h1 style={{ backgroundColor: props.completed ? "green" : "red" }}>
        {props.name}
      </h1>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>delete</button>
    </div>
  );
};

export default Task;
