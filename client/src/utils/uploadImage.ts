// utils/handleImageUpload.ts
import { Dispatch } from "redux";
import { updateUserProfilePicture } from "../redux/userSlice";
import imageCompression from "browser-image-compression";

export const handleImageUpload = async (
  event: React.ChangeEvent<HTMLInputElement>,
  dispatch: Dispatch,
  mutate: (image: string) => void
) => {
  const file = event.target.files?.[0];
  if (file) {
    try {
      const options = {
        maxSizeMB: 1, // Set the max size in MB (e.g., 1MB)
        maxWidthOrHeight: 1024, // Set max width/height (optional)
      };

      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);

      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          // Dispatch Redux action to update state with the compressed image
          dispatch(updateUserProfilePicture(reader.result));

          // Call the mutation to update the backend
          mutate(reader.result);
        }
      };
    } catch (error) {
      console.error("Error during image compression:", error);
    }
  }
};
