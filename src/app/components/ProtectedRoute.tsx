"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useGetUser from "@/hooks/useGetUser";
import isObjectEmpty from "@/utils/isObjectEmpty";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("inside ProtectedRoute");

  const router = useRouter();
  const user = useGetUser();
  const [isFirstRender, setIsFirstRender] = useState<Boolean>(true);

  useEffect(() => {
    if (!isFirstRender) {
      console.log("inside ProtectedRoute useEffect", user, isObjectEmpty(user));

      if (isObjectEmpty(user)) {
        router.push("/login");
      }
    }
    setIsFirstRender(false);
  }, [user]);

  return children;
}
