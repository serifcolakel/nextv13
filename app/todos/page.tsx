import React from "react";
import TodoItem from "./TodoItem";
export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data as TodoResponse[];
};

export default async function Todos() {
  const todos = await getTodos();
  return (
    <div className="grid md:grid-cols-2 px-10 md:px-0 items-center justify-center gap-x-4 max-w-screen-xl">
      {todos.map((todo) => (
        <TodoItem key={todo.id} item={todo} />
      ))}
    </div>
  );
}
