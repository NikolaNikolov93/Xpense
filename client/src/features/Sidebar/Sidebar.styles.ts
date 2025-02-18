import styled from "styled-components";

export const SideBar = styled.nav`
  background-color: var(--sidebars-background-color);
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  min-width: 200px;
  flex-basis: 250px; /* Makes it 250px unless flex container changes it */
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box; /* Ensures padding doesn't add extra height */
  box-shadow: var(--box-shadow);
  align-items: center;
  gap: 2em;
  font-size: 1.5em;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Logo = styled.img`
  width: 60px;
`;
