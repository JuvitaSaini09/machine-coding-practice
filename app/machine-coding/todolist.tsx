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
        title,
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
        {todoList.map(({ title, id }) => (
          <li key={id}>
            <span>{title}</span>
            <button type="button" onClick={() => deleteTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
/*

question URl: https://www.greatfrontend.com/questions/user-interface/todo-list/react?framework=react&tab=coding&qns_context=c41d13b5-e18c-4233-be4d-317a2053c3ac

question : Requirements
You're given some existing HTML for a Todo List app. Add the following functionality to the app:

Add new tasks on clicking the "Submit" button.
The <input> field should be cleared upon successful addition.
Treat task input as plain text; user-provided markup must not be interpreted as HTML.
Remove tasks from the Todo List upon clicking the "Delete" button.
Give the task input an accessible label so the form is operable with assistive technology.

Notes
The focus of this question is on functionality, not styling. There's no need to write any custom CSS.
You may modify the markup (e.g. adding ids, data attributes, replacing some tags, etc.), but the result should remain the same visually.
You may want to think about ways to improve the user experience of the application and implement them (you get bonus credit for doing that during interviews).

*/
