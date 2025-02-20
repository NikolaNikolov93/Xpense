import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = !!useSelector((state: RootState) => state.user.user); // Access user from Redux store

  return isLoggedIn ? <Outlet /> : <Navigate to={"login"} replace />;
};

export default PrivateRoute;
