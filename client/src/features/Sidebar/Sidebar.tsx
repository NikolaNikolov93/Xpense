import { Link } from "react-router-dom";
import { Logo, SideBar, StyledUl } from "./Sidebar.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useLogout } from "../../hooks/useLogout";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const user = useSelector((state: RootState) => state.user.user); // Access user from Redux store
  const logout = useLogout();

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SideBar $isOpen={isOpen}>
      <Logo src="logo-new.png" alt="" />
      {user && <p>{user.email}</p>}
      <StyledUl>
        <li>
          <Link to={"/"} onClick={handleClose}>
            Home
          </Link>
        </li>

        {user != null ? (
          <>
            <li>
              <Link to={"/dashboard"} onClick={handleClose}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleClose}>
                <span onClick={logout}>Logout</span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"} onClick={handleClose}>
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"} onClick={handleClose}>
                Register
              </Link>
            </li>
          </>
        )}
      </StyledUl>
    </SideBar>
  );
};

export default Sidebar;
