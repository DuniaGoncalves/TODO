import { useState } from "react";

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
    return (
      <ul>
        {todoItems.map((todoItem, i) => (
          <li key={{i}}>
            {i}
            <input
              id='todo'
              type="checkbox"
            />
            <label htmlFor='todo'>
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
