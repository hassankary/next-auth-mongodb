"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export const UserInfo: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page if there is no session
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, session, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="border-y-2 border-green-500 font-bold px-10 py-5 rounded-2xl shadow-xl space-y-5">
      <h1 className="font-bold text-center">Data User</h1>
      <div className="flex flex-col gap-1">
        <div>{session?.user?.name}</div>
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
};
