import { useState, useEffect } from "react";
import  NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import PropTypes from 'prop-types'; // Import PropTypes

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), title, completed: false },
    ]);
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((currentTodos) =>
      currentTodos.filter((todo) => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

// Add PropTypes for App component
App.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
