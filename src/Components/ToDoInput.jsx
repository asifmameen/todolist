import React, { useState } from "react";
import { ToDoList } from "./ToDoList";

export const ToDoInput = () => {
  const [taskList, setTaskList] = useState([]); //to add task list to the other object
  const [currentTask, setCurrentTask] = useState(""); //to manage main input field

  const addTask = () => {
    if (currentTask.trim() && !taskList.includes(currentTask)) {
      // Check if task is not a duplicate
      setTaskList((prevTasks) => [...prevTasks, currentTask]); // Add new task to the task list
      setCurrentTask(""); // Clear the input field after adding a task
    }
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = taskList.filter((task) => task !== taskToDelete);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <header>
        <input
          value={currentTask}
          placeholder="Enter Your Task"
          onChange={(e) => setCurrentTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </header>
      <ToDoList taskList={taskList} deleteTask={deleteTask} />
    </div>
  );
};
