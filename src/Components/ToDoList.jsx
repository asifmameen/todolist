import React from "react";
import { ToDoCard } from "./ToDoCard";

export const ToDoList = (props) => {
  const { taskList, deleteTask } = props;

  return (
    <div>
      <ul className="main">
        {taskList.map((value, index) => {
          return (
            <li className="todoItem" key={index}>
              <ToDoCard value={value} deleteTask={deleteTask} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
