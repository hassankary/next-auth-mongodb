"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export const UserInfo: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <div className="border-y-2 border-green-500 font-bold px-10 py-5 rounded-2xl shadow-xl space-y-5">
        <h1 className="font-bold text-center"> Data User</h1>
        <div className="flex flex-col gap-1">
          <div>{session?.user.name}</div>
          <div>{session?.user?.email}</div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => signOut()}
            className="flex w-fit px-3 py-1 bg-red-500 text-white rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    router.push("/");
  }
};
