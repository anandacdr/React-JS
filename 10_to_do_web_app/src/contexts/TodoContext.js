import { createContext, useContext } from "react";

export default TodoContext = createContext({})



export const useTodo = () => {
    return useContext(TodoContext)
}