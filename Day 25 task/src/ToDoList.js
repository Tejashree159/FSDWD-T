import React from 'react';
import TodoItem from './ToDoItem';

function TodoList({ todos, toggleComplete, removeTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;
