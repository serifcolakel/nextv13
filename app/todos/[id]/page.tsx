import React from "react";
import { TodoResponse } from "../page";

type DynamicTodoPageProps = {
  params: {
    id: string;
  };
};

const getTodoById = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = await res.json();
  return data as TodoResponse;
};

export default async function DynamicTodoPage({
  params: { id },
}: DynamicTodoPageProps) {
  const todo = await getTodoById(id);
  console.log(todo);
  return (
    <div>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
