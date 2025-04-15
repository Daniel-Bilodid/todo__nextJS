"use client";

import React from "react";

function TodoItem({ todo, todoId, onDelete }) {
  return (
    <div
      className="flex justify-between mt-2 bg-amber-100 p-4 rounded-[5px]"
      key={todoId}
    >
      <h2 className="text-[var(--main-color)] font-bold flex items-center text-[12px] sm:text-base">
        {todo}
      </h2>

      <button
        className="px-4 py-2 bg-[var(--main-color)] rounded cursor-pointer"
        onClick={() => onDelete(todoId)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;
