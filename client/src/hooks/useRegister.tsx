import { useMutation } from "@tanstack/react-query";
import { register } from "../services/authService.ts";
import { useState } from "react";

export const useRegister = () => {
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const mutation = useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      password: string;
    }) => register(data.name, data.email, data.password),
    onSuccess: (data) => {
      setMessage({ text: data.message, type: "success" });
    },
    onError: (error: any) => {
      setMessage({
        text: error.message || "Something went wrong. Please try again.",
        type: "error",
      });
    },
  });

  return { mutation, message };
};
