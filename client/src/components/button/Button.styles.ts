import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.8em;
  border: none;
  background-color: ${(props) => props.theme.secondaryAccentColor};
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }
  &:disabled {
    background-color: ${(props) => props.theme.buttonDisabled};
  }
`;
