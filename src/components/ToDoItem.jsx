import React from 'react';

const ToDoItem = ({ item, onDelete }) => {
  return (
    <div className="todo-item">
      <span>{item}</span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ToDoItem;