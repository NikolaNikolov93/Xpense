import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  flex-grow: 1; /* Allows the content to fill the remaining space */
  margin: 1em;
`;
export const ToggleButton = styled.button`
  display: none; /* Hidden by default */
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2em;
  background: none;
  border: none;
  color: var(--primary-text-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; /* Show only on mobile */
    z-index: 100;
  }
`;
