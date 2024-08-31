import { LoginForm } from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import handler from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Session } from "next-auth";

export default async function Home() {
  const session: Session | null = await getServerSession(handler);

  if (session) redirect("/dashboard");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <LoginForm />
    </main>
  );
}
