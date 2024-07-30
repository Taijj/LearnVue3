import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function onSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
        {todos.map((t) => (
          <TodoItem key={t} data={t} />
        ))}
      </form>
    </div>
  );
}
