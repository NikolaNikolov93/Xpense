import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8em;
  border: none;
  background-color: var(--secondary-accent);
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--button-hover);
  }
  &:disabled {
    background-color: var(--button-disabled);
  }
`;
