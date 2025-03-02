import { useMutation } from "@tanstack/react-query";
import { updateUserProfilePic } from "../services/authService";

export const useUpdateUserProfilePicture = () => {
  const token = localStorage.getItem("token");

  return useMutation({
    mutationFn: (updatedPicture: string) => {
      if (!token) throw new Error("No authentication token found");
      return updateUserProfilePic(updatedPicture, token);
    },
    onError: (error: Error) => {
      console.error("Mutation error:", error.message); // Log the error if needed
    },
    onSuccess: () => {
      console.log("Profile picture updated successfully");
    },
  });
};
