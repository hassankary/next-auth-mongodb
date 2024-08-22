import { LoginForm } from "@/components/LoginForm";
import { RegisterForm } from "@/components/RegisterForm";
import Image from "next/image";

export default function Register() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <RegisterForm/>
    </div>
  );
}
