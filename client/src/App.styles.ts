import styled from "styled-components";
export const Site = styled.section`
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const SiteWrapper = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  color: ${(props) => props.theme.textColor};
  display: flex;
  min-height: 100dvh; /* Ensures it takes up the full viewport without overflow */
`;
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  flex-grow: 1; /* Allows the content to fill the remaining space */
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.8);
  padding: 3.5em 0.5em;
  background-color: ${(props) => props.theme.backgroundColor};
`;
export const ToggleButton = styled.button`
  display: none; /* Hidden by default */
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2em;
  background: none;
  border: none;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  @media (max-width: 960px) {
    display: block; /* Show only on mobile */
    z-index: 100;
  }
`;
