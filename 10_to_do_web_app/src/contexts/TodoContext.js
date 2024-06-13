import { createContext, useContext } from "react";

export default TodoContext = createContext({
  // Values of Context
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],

  // Methods of Context
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
