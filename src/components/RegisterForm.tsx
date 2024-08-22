"use client";
import Link from "next/link";
import React, { FormEvent, useRef, useState } from "react";

export const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const registerHandler = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError(true);
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          password,
        }),
      });

      if (res.ok) {
        if (formRef.current) {
          formRef.current.reset();
          setFullName("");
          setEmail("");
          setPassword("");
        }
        setError(false);
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="p-10 rounded-2xl">
      <div className="p-5 border-t-2 border-green-400 rounded-2xl shadow-2xl ">
        <h1 className=" text-xl font-bold mb-5 text-center">Register</h1>
        <form
          onSubmit={registerHandler}
          ref={formRef}
          className="flex flex-col gap-3"
        >
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            placeholder="Full Name"
            className="w-[400px] border border-gray-200 px-6 py-2 bg-zinc-100/40 rounded-lg"
          />
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
          <button
            type="submit"
            className="bg-green-400 px-6 py-2 text-white font-bold hover:bg-green-500 active:scale-95 rounded-lg transition-all"
          >
            Register
          </button>
          {error ? (
            <div className="px-3 py-1 w-fit text-white text-sm bg-red-500 rounded-md">
              Form cannot be empty
            </div>
          ) : null}
          <Link href={"/"} className="text-sm text-right">
            {`Already have an account?`}{" "}
            <span className="underline"> Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
