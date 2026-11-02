import type { Route } from "./+types/home";
import TodoList from "~/machine-coding/todolist";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Machine Coding Practice" },
    { name: "description", content: "Practice React machine coding questions" },
  ];
}

export default function Home() {
  return (
    <main className="p-8">
      <TodoList />
    </main>
  );
}
