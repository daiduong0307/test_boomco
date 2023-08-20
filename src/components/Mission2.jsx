import React, { useState } from "react";
import "../css/Mission2.css";

function Mission2() {
  const [tasks, setTasks] = useState([
    { text: "Hit the gym", checked: false },
    { text: "Pay bills", checked: true },
    { text: "Meet George", checked: false },
    { text: "Buy eggs", checked: false },
    { text: "Read a book", checked: false },
    { text: "Organize office", checked: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        { text: inputValue, checked: false },
      ]);
      setInputValue("");
    } else {
      alert("You must write something!");
    }
  };

  const handleToggleTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      if (index >= 0 && index < updatedTasks.length) {
        updatedTasks[index] = {
          ...updatedTasks[index],
          checked: !updatedTasks[index].checked,
        };
        return updatedTasks;
      } else{
        return updatedTasks;
      }
    });
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((_, i) => i !== index);
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <div className="header">
        <h2 style={{ margin: "5px" }}>My To Do List</h2>
        <input
          type="text"
          placeholder="Title..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <span className="addBtn" onClick={handleAddTask}>
          Add
        </span>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={task.checked ? "checked" : ""}
            onClick={() => handleToggleTask(index)}
          >
            {task.text}
            <span className="close" onClick={() => handleDeleteTask(index)}>
              &#215;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mission2;
