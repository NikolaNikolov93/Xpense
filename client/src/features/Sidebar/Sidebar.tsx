import { Link } from "react-router-dom"; // Import Link component for navigation
import {
  Logo,
  SideBar,
  StyledImg,
  StyledUl,
  UserSection,
} from "./Sidebar.styles"; // Import styled components for sidebar layout
import { useSelector } from "react-redux"; // Redux hook to access state
import { RootState } from "../../redux/store"; // RootState type from Redux store
import { useLogout } from "../../hooks/useLogout"; // Custom hook for logout functionality
import { SidebarProps } from "../../types/types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  // Access user data from the Redux store
  const user = useSelector((state: RootState) => state.user.user);
  // Custom hook for logout functionality
  const logout = useLogout();

  // Function to close the sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBar $isOpen={isOpen}>
      {" "}
      {/* Sidebar container with conditional styling based on isOpen */}
      {/* Conditionally render user section if a user is logged in */}
      {user ? (
        <UserSection>
          <h4>{user.name}</h4> {/* Display user's name */}
          <StyledImg src={user.profilePicture} alt="User profile" />{" "}
          {/* Display user's profile picture */}
        </UserSection>
      ) : (
        // If no user is logged in, display the logo
        <Logo src="logo-new.png" alt="App Logo" />
      )}
      {/* Sidebar navigation links */}
      <StyledUl>
        {/* Link to the home page */}
        <li>
          <Link to={"/"} onClick={handleClose}>
            Home
          </Link>
        </li>

        {/* If a user is logged in, show profile, dashboard, and logout options */}
        {user != null ? (
          <>
            <li>
              <Link to={"/profile"} onClick={handleClose}>
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/dashboard"} onClick={handleClose}>
                Dashboard
              </Link>
            </li>

            {/* Logout button */}
            <li>
              <Link to={"/"} onClick={handleClose}>
                <span onClick={logout}>Logout</span>{" "}
                {/* Trigger logout on click */}
              </Link>
            </li>
          </>
        ) : (
          // If no user is logged in, show login and register options
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
