import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./slices/todoSlice";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const {todos}= useSelector(state=>state.todos);

  const onAddClick = () => {
    dispatch(
      addTodo({
        id: Math.random(),
        todo: input,
      })
    );
    setInput("");
  };

  const onDeleteClick=(id)=>{
   dispatch(
    deleteTodo({
      id: id
    }))
  };

  return (
    <div className="App bg-black w-full h-screen">
      <h1 className="text-white text-4xl mb-3 p-5 font-mono ">To-Do List </h1>
      <div className="Add place-content-center m-5 flex p-px">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Add Items..."
          className="p-2 rounded-lg mr-2  text-white mt-1"
        />
        <button
          className="bg-yellow-300 text-black p-2 rounded-lg"
          onClick={onAddClick}
        >
          Add
        </button>
      </div>
      {
        todos?.length>0 && todos.map(todo=>
         <div className="Add place-content-center m-5 flex p-px">
          <input type="checkbox" className="w-5 h-5 mt-2 mr-5"/>
          <span className="text-white text-2xl font-mono mr-5">{todo.todo}</span>
          <button className="bg-yellow-300 text-black p-2 rounded-lg" 
                  onClick={()=> onDeleteClick(todo.id)}                                               >
            Delete
          </button>
         </div>
        )
      }
    </div>
  );
}

export default App;
