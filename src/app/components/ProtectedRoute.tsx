"use client";

import useGetUser from "@/hooks/useGetUser";
import isObjectEmpty from "@/utils/isObjectEmpty";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("inside ProtectedRoute");

  const user = useGetUser();
  console.log(user);

  if (isObjectEmpty(user)) {
    redirect("/login");
  }

  return children;
}
