import React, { useEffect, useRef, useState } from "react";

const TodoForm = ( props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log({e:e.target})
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
      let val = e.target.value;
    
        setInput(val);
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update"
            value={input}
            name="text"
            onChange={handleChange}
            className="todo-form-input edit"
            ref={inputRef}
          />
          <button className="todo-add-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add to do.."
            value={input}
            name="text"
            onChange={handleChange}
            className="todo-form-input"
            ref={inputRef}
          />
          <button className="todo-add-button">Add</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
