"use client";
import { useEffect, useReducer } from "react";

export interface StateType {
  loading: boolean;
  data: any;
  error: any;
}

interface ActionObject {
  type: "LOADING" | "SUCCESS" | "ERROR";
  data?: any;
  error?: any;
}
const initialState: StateType = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state: StateType, action: ActionObject) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, data: action.data };
    case "ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default function useFetch(
  url: string,
  options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
) {
  if (!url) return initialState;
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(url, {
        ...{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        ...options,
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      dispatch({ type: "SUCCESS", data });
    } catch (error) {
      dispatch({ type: "ERROR", error });
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return state as StateType;
}
