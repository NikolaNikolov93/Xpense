import { Link } from "react-router-dom";
import { Logo, SideBar, StyledUl } from "./Sidebar.styles";

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <SideBar isOpen={isOpen}>
      <Logo src="xpense-logo.png" alt="" />

      <StyledUl>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"/register"}>Register</Link>
        </li>
        <li>
          <Link to={"/logout"}>Logout</Link>
        </li>
      </StyledUl>
    </SideBar>
  );
};

export default Sidebar;
