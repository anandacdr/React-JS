import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Define - How it works
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Update To Do
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // DeleteToDo
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    

  }, [])
  

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      {/* <h2 className='text-3xl '>To-Do Application using Context API</h2> */}

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your To-Dos
          </h1>

          <div className="mb-4">{/* To Do Form goes here, */}</div>

          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add Todo Item here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
