import TodosPage from "./todos/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-[26px] text-[var(--main-color)] font-bold">
        Todo App
      </h1>

      <TodosPage />
    </div>
  );
}
