import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services/authService";

export const useUpdateUser = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: (updatedUser: {
      name: string;
      currency: string;
      totalBalance: number;
    }) => {
      if (!token) throw new Error("No authentication token found");
      return updateUser(updatedUser, token);
    },
  });
};
