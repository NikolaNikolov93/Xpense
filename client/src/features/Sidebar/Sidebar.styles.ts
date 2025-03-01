import styled from "styled-components";
type SideBarProps = {
  $isOpen: boolean;
};
export const SideBar = styled.nav<SideBarProps>`
  background-color: var(--sidebars-background-color);
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 200px; /* Make it collapse */
  display: flex;
  flex-basis: 250px;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
  align-items: center;
  gap: 2em;
  font-size: 1.5em;
  transition: min-width 0.3s, display 0.3s ease-in-out; /* Smooth transition */

  /* For mobile devices, hide the sidebar by default */
  @media (max-width: 960px) {
    min-width: ${({ $isOpen }) => ($isOpen ? "100%" : "0")};
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }
`;
export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
`;
export const StyledImg = styled.img`
  width: 80px;
  border-radius: 50%;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Logo = styled.img`
  width: 80px;
`;
