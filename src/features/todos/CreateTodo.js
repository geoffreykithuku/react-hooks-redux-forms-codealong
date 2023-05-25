// ./src/features/todos/CreateTodo.js
import React, { useState } from "react";
import { todoAdded } from "./todosSlice";
import { useDispatch } from "react-redux";

function CreateTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(todoAdded(text))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text} />
        </p>
        <input type="submit" />
      </form>
      <p>Form Text: {text}</p>
    </div>
  );
}

export default CreateTodo;
