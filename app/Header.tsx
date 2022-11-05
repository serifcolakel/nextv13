import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="h-20 bg-blue-600 w-full text-white flex items-center justify-center">
      <nav className="max-w-screen-xl w-full flex justify-between items-center">
        <Link href={"/"}>Header</Link>
        <div className="flex flex-row gap-x-2">
          <Link
            href={"/todos"}
            className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-lg"
          >
            Todos
          </Link>
          <Link
            href={"/"}
            className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-lg"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-lg"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-lg"
          >
            Login
          </Link>
          <Link
            href={"/"}
            className="hover:bg-blue-100 hover:text-blue-600 px-4 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}
