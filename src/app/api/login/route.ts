import { NextResponse } from "next/server";
import connectDB from "../../../mongoDB";
import { user } from "@/models";
import bcrypt from "bcrypt";
import jsonWebToken from "jsonwebtoken";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  await connectDB();
  if (!email || !password) {
    return NextResponse.json({ error: "Please fill in all fields" });
  }

  const userExists = await user.findOne({ email });
  if (!userExists) {
    return NextResponse.json({ error: "User doesn't exists" });
  }

  const passwordMatch = await bcrypt.compare(password, userExists.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: "Wrong password" });
  }

  const token = jsonWebToken.sign(
    { email: userExists.email, _id: userExists._id },
    process.env.JWT_SECRET as string
  );
  return NextResponse.json({ message: "Login successful", token });
}
