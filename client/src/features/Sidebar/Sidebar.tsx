import { Link } from "react-router-dom";
import { Logo, SideBar, StyledUl } from "./Sidebar.styles";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <SideBar $isOpen={isOpen}>
      <Logo src="xpense-logo.png" alt="" />

      <StyledUl>
        <li>
          <Link to={"/"} onClick={handleClose}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/dashboard"} onClick={handleClose}>
            Dashboard
          </Link>
        </li>
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
        <li>
          <Link to={"/logout"} onClick={handleClose}>
            Logout
          </Link>
        </li>
      </StyledUl>
    </SideBar>
  );
};

export default Sidebar;
