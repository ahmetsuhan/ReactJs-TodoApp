import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [todos,setTodos] = useState([]);

    const addTodo =(todo)=>{
           if(todo.text !==''){
            console.log({addtodo:todo})
            const newTodos = [todo,...todos];
            setTodos(newTodos);
        
           }else{
               alert("Please, Enter any todo");
           }
            
       
        //console.log({newtodos:newTodos});
        //console.log([todo,...todos])
    }

    const removeTodo = (id) =>{
        const removeArray = [...todos].filter( todo => todo.id !== id);
        //console.log({removeArr:removeArray})
        setTodos(removeArray);
    }

    const removeAllTodo = () =>{
        setTodos([]);
        //console.log(...todos)
    }
    
    const completeTodo = (id) =>{
        let completedTodo = todos.map( (todo) => {
            if(todo.id===id){
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        } );
        setTodos(completedTodo);
    }

    const updateTodo = (todoId,newVal) =>{
        setTodos( (prev) => {
            return (prev.map( (item) => {
                return (item.id === todoId ? newVal:item);
            } ));
        } );
    }


    return (
        <div>
            <h1>What's your Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo 
                todos={todos}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
                updateTodo={updateTodo}
                />     
            {
                todos.length>=2 && (
                    <>
                        <button onClick={removeAllTodo} className="delete-all-button">Delete All</button>
                    </>
                )
            }
        </div>
    )
}

export default TodoList
