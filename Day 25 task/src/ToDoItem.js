import React from 'react';

function TodoItem({ todo, toggleComplete, removeTodo }) {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
                {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoItem;
