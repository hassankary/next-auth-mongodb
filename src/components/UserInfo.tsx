"use client";
import React from "react";

export const UserInfo: React.FC = () => {
  return (
    <div className="border-y-2 border-green-500 font-bold px-10 py-5 rounded-2xl shadow-xl space-y-5">
        <h1 className="font-bold text-center"> Data User</h1>
      <div className="flex flex-col gap-1">
        <div>
          Hassan Askary
        </div>
        <div>
          hassanaskary29@gmail.com
        </div>
      </div>
      <div className="flex justify-center">
        <button className="flex w-fit px-3 py-1 bg-red-500 text-white rounded-lg">
          Logout
        </button>
      </div>
    </div>
  );
};
