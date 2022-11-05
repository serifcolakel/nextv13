import Link from "next/link";
import React from "react";
import { TodoResponse } from "./page";

type Props = {
  item: TodoResponse;
};

export default function TodoItem({
  item: { id, title, completed, userId },
}: Props) {
  return (
    <div
      key={`${id}-${userId}`}
      className="w-full px-4 py-8 border my-4 rounded-md shadow-xl"
    >
      <div className="flex justify-between">
        <div className="flex flex-row gap-x-4 items-center">
          <input
            type="checkbox"
            defaultChecked={completed}
            className="w-10 h-10"
          />
          <label className="w-10/12">{title}</label>
        </div>
        <div className="flex flex-row gap-x-2">
          <Link
            href={`/todos/${id}`}
            className="bg-blue-600 text-white px-2 py-1 flex items-center justify-center rounded-lg w-20 h-10"
          >
            Edit
          </Link>
          <button className="bg-red-600 text-white px-2 py-1 rounded-lg w-20 h-10">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
