import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

const Todo = ({ todos, removeTodo,completeTodo,updateTodo }) => {

    console.log({ tododaki: todos });

    const [edit,setEdit] = useState({
        id:null,
        value:""
    });

    const submitUpdate = (value) =>{
        updateTodo(edit.id,value);
        setEdit({
            id:null,
            value:""
        });
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>
    }
    return (
    
      todos.map((todo, index) => {
        return (
          <div
             key={index} 
             className = {todo.isComplete ? 'todo-row complete':'todo-row'}>
                <div 
                    onClick={ () => completeTodo(todo.id)} 
                    key={todo.id}>
                        {todo.text}
                </div>
                <div className="todo-icons-container">
                    <AiFillCloseCircle
                        className="todo-delete-button"
                        onClick={ () => removeTodo(todo.id)}
                    />
                    <TiEdit 
                        onClick={ () => setEdit({id:todo.id,value:todo.text}) }
                        className="todo-edit-button" />
                 </div>
          </div>
        );
      })
    
  );
};

export default Todo;
