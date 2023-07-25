import { useState, useId } from "react";

export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const onSubmitTodo = (e) => {
    e.preventDefault();
    todoItems.push(inputValue);
    setTodoItems(todoItems);
    setInputValue("");
  };


  const AddTodoItem = () => {
    const todoId = useId();
    return (
      <ul>
        {todoItems.map((todoItem) => (
          <li key={todoId.id}>
            <input
              id={`${todoId}-todo`}
              type="checkbox"
            />
            <label htmlFor={`${todoId}-task`}>
              {todoItem}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <form onSubmit={onSubmitTodo}>
        <input
          type="text"
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <AddTodoItem />
    </>
  );
};
