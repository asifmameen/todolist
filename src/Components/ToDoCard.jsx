import React, { useState } from "react";

export const ToDoCard = (props) => {
  const { value, deleteTask } = props;

  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const editTask = () => {
    setEditMode(true);
  };
  const doneEdit = () => {
    setEditMode(false);
  };

  return (
    <li className="todoItem">
      {!editMode && editedValue}
      {editMode ? (
        <>
          <input
            id="editinput"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <button onClick={doneEdit}>Done</button>
        </>
      ) : (
        <button
          onClick={editTask}
          className="fa-solid fa-pen-to-square"
        ></button>
      )}
      <button
        className="fa-solid fa-trash"
        onClick={() => deleteTask(value)}
      ></button>
    </li>
  );
};
