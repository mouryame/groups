"use client";
import { useEffect, useState } from "react";

export default function useGetUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log("inside useGetUser");
    async function fetchUser() {
      const response = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        localStorage.removeItem("token");
        setUser({});
      } else {
        setUser(data);
      }
    }

    fetchUser();

    return () => {};
  }, []);

  return user;
}
