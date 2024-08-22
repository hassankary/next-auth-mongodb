import { connectMongoDB } from "@/libs/mongodb";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface UserRequestBody {
  fullName: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { fullName, email, password }: UserRequestBody = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();
    await User.create({ fullName, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error during registration:", error.message);
    } else {
      console.error("Unknown error during registration:", error);
    }
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
