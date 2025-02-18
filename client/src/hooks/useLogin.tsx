// useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/authService.ts";
import { useState } from "react";

export const useLogin = () => {
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) =>
      login(data.email, data.password),
    onSuccess: (data) => {
      setMessage({ text: data.message, type: "success" });
      // Possibly save token or do some additional logic here
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
