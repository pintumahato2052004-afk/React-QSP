import { createContext, useState } from "react";

export const todoContext = createContext();

const ContextProvider = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setAllTodos] = useState([{ id: 1, text: "Default Todo" }]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") {
      alert("No todo available");
      setNewTodo("");
      return;
    }

    let todo = {
      id: Date.now(),
      text: newTodo.trim(),
    };
    console.log(todo);

    setAllTodos((prev) => [...prev, todo]);

    // clear input field
    setNewTodo("");
  };

  const removeTodo = (id) => {
    let allTodos = [...todos];
    let filteredTodo = allTodos.filter((ele) => ele.id !== id);
    setAllTodos(filteredTodo);
  };

  const editTodo = (id) => {
    let allTodos = [...todos]
    let todoToBeEdit = allTodos.find((ele) => ele.id === id)
    setNewTodo(todoToBeEdit.text)
    removeTodo(id)
  };

  return (
    <todoContext.Provider
      value={{
        newTodo,
        setNewTodo,
        todos,
        setAllTodos,
        addTodo,
        removeTodo,
        editTodo,
      }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default ContextProvider;
