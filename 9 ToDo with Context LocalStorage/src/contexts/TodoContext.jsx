import { createContext, useContext } from "react";

/*CREATE CONTEXT TOOK AN OBJECT CONTAINING AN ARRAY + 4 functions*/
/*the array will hold all the todos in form of obj which will be rendered on the screen*/
export const TodoContext = createContext({
  todos: [
    /* {},{},{},*/ { id: 1, todo: "todo msg", completed: false },
  ] /*ARRYS OF ALL ToDos*/,

  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

// export const TodoProvider = ({ children }) => {
//   return <TodoContext.Provider>{children}</TodoContext.Provider>;
// };

export const TodoProvider = TodoContext.Provider;
