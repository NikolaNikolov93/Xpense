import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {
  const isLoggedIn = !!useSelector((state: RootState) => state.user.user);

  return isLoggedIn ? <Navigate to={"/dashboard"} replace /> : <Outlet />;
};

export default PublicRoute;
