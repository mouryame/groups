import connectDB from "@/mongoDB";
import jsonWebToken from "jsonwebtoken";
import { NextResponse } from "next/server";

function verifyToken(token: string) {
  try {
    const decoded = jsonWebToken.verify(
      token,
      process.env.JWT_SECRET as string
    );
    return decoded;
  } catch (error) {
    return { error: "Invalid token" };
  }
}

export async function GET(request: Request) {
  await connectDB();
  const token = request.headers.get("authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ error: "No token provided" });
  }
  const output = verifyToken(token);
  return NextResponse.json(output);
}
