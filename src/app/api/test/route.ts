import { NextResponse } from "next/server";
import connectDB from "../../../mongoDB";

export async function GET() {
  await connectDB();
  return NextResponse.json({ message: "DB connected" });
}
