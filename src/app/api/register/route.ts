import { NextResponse } from "next/server";
import connectDB from "../../../mongoDB";
import { user } from "@/models";
import bcrypt from "bcrypt";
import jsonWebToken from "jsonwebtoken";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  await connectDB();
  if (!name || !email || !password) {
    return NextResponse.json({ error: "Please fill in all fields" });
  }

  const userExists = await user.findOne({ email });
  if (userExists) {
    return NextResponse.json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await user.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jsonWebToken.sign(
    { email: newUser.email, _id: newUser._id },
    process.env.JWT_SECRET as string
  );

  return NextResponse.json({ message: "User created", data: newUser, token });
}
