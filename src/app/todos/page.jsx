"use client";

import { useState, useEffect } from "react";

import TodoList from "../todos/components/TodoList";
import TodoForm from "./components/TodoForm";

import { addTodo, deleteTodo } from "@/utils/actions";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      const data = await res.json();
      setTodos(data);
    }

    fetchTodos();
  }, []);

  const onTodoDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  const onTodoAdd = async (todo) => {
    try {
      await addTodo(todo);
      setTodos((prevTodos) => [{ id: Date.now(), title: todo }, ...prevTodos]);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  return (
    <>
      <TodoForm onTodoAdd={onTodoAdd} />
      <TodoList todos={todos} onDelete={onTodoDelete} />
    </>
  );
}
