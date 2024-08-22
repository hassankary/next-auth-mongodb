"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const loginHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError(true);
    } else {
      console.log("connect to MongoDB");
      setError(false)
    }
  };

  return (
    <div className="p-10 rounded-2xl">
      <div className="p-5 border-t-2 border-green-400 rounded-2xl shadow-2xl ">
        <h1 className=" text-xl font-bold mb-5 text-center">Login</h1>
        <form onSubmit={loginHandler} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
            className="w-[400px] border border-gray-200 px-6 py-2 bg-zinc-100/40 rounded-lg"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="w-[400px] border border-gray-200 px-6 py-2 bg-zinc-100/40 rounded-lg"
          />
          <button className=" bg-green-400 px-6 py-2 text-white font-bold hover:bg-green-500 rounded-lg transition-all">
            Login
          </button>
          {error ? (
            <div className="px-3 py-1 w-fit text-white text-sm bg-red-500 rounded-md">
              Email & Password cannot be empty
            </div>
          ) : null}
          <Link href={"/register"} className="text-sm text-right">
            {`Don't have an account?`} <span className="underline"> Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
