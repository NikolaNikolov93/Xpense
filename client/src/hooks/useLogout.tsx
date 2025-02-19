// hooks/useLogout.ts
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService"; // Import logout service

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Call the logout service function
      const data = await logout();
      console.log(data.message); // Success message from backend (e.g., "Logged out successfully")

      // Dispatch Redux action to clear the user data from store
      dispatch(removeUser());

      // Redirect to the login page after logout
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return handleLogout;
};
