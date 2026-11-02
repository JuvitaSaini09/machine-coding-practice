import { useState } from "react";

interface TODO {
  id: string;
  title: string;
}

export default function App() {
  const [todoList, setTodoList] = useState<TODO[]>([]);
  const [inputValue, setInputValue] = useState("");
  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = inputValue.trim();
    if (!title) return;

    setTodoList((prev) => [
      ...prev,
      {
        title: title,
        id: crypto.randomUUID(),
      },
    ]);
    setInputValue("");
  };

  const deleteTodo = (id: string) => {
    setTodoList((prev) => prev.filter((currentTodo) => currentTodo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form
        onSubmit={addTodo}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <label htmlFor="todo-input">Add a task</label>

        <input
          id="todo-input"
          type="text"
          placeholder="Add your task"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ul>
        {todoList.map(({ title, id }) => {
          return (
            <li key={id}>
              <span>{title}</span>
              <button type="button" onClick={() => deleteTodo(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
