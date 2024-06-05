"use client";
import useFetch, { StateType } from "./useFetch";

export default function useGetUser() {
  const { data }: StateType = useFetch("/api/user");

  return data;
}
