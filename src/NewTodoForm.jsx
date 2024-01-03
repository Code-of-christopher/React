import { useState } from "react";
import PropTypes from 'prop-types'; // Import PropTypes

function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

// Add PropTypes for NewTodoForm component
NewTodoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default NewTodoForm;