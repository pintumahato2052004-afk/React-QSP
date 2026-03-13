import AllTodos from "./AllTodos";
import CreateTodo from "./CreateTodo";

const TodoWrapper = () => {
  return (
    <div>
      <CreateTodo />
      <AllTodos />
    </div>
  );
};

export default TodoWrapper;
