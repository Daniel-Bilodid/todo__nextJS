"use client";

import React, { useState } from "react";

function TodoForm({ onTodoAdd }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    onTodoAdd(value);
  };

  return (
    <div className="w-full max-w-[595px]">
      <form className="flex flex-col gap-4">
        <div>
          <div className="flex gap-4 items-center flex-col sm:flex-row max-w-[320px] mt-3 mx-auto sm:max-w-none sm:mx-0">
            <input
              id="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-red-100 flex-grow rounded-[5px] text-[var(--main-color)] py-[8px] px-[16px] w-full sm:w-auto "
              placeholder="Enter your todo here..."
              type="text"
            />
            <button
              className="px-4 py-2 bg-[var(--main-color)] rounded cursor-pointer w-full sm:w-auto"
              type="submit"
              onClick={() => {
                handleSubmit(event);
              }}
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
