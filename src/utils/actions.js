export async function addTodo(todo) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: todo,
      completed: false,
      userId: 1,
    }),
  });

  if (!res.ok) throw new Error("Failed to add todo");

  return res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete todo");

  return res.json();
}
