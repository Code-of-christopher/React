import PropTypes from 'prop-types'; // Import PropTypes
import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => (
        <TodoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

// Add PropTypes for TodoList component
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoList;