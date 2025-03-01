import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";

// PrivateRoute component - A protected route that only renders its children if the user is logged in
const PrivateRoute: React.FC = () => {
  // Access the user data from the Redux store and check if the user is logged in
  const isLoggedIn = !!useSelector((state: RootState) => state.user.user); // Convert the user object to a boolean (true if user exists)

  // If the user is logged in, render the children of the route (via Outlet), else navigate to login page
  return isLoggedIn ? <Outlet /> : <Navigate to={"login"} replace />;
};

export default PrivateRoute;
