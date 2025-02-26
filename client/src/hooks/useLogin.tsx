// useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService.ts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice.ts";

export const useLogin = () => {
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const dispatch = useDispatch(); // Initialize dispatch

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess: (data) => {
      setMessage({ text: data.message, type: "success" });
      localStorage.setItem("token", data.token); // Store token

      dispatch(
        setUser({
          name: data.user.name,
          email: data.user.email,
          currency: data.user.currency,
          totalBalance: data.user.totalBalance,
        })
      );
    },
    onError: (error: any) => {
      setMessage({
        text: error.message || "Login failed. Please try again.",
        type: "error",
      });
    },
  });

  return { mutation, message };
};
