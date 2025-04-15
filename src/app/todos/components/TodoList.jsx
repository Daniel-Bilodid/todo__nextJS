import React from "react";
import TodoItem from "../components/TodoItem";

function TodoList({ todos, onDelete }) {
  return (
    <ul className="mt-[40px] mb-[40px]">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="max-w-[320px] mx-auto sm:max-w-[592px] sm:mx-0 sm:w-full"
        >
          <TodoItem todo={todo.title} todoId={todo.id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
