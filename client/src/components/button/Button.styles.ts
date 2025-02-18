import styled from "styled-components";

export const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 0.8em;
  border: none;
  background-color: ${(props) =>
    props.disabled
      ? "var(--button-disabled)"
      : "var(--primary-accent)"}; /* Grey when disabled, blue when active */
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "var(--button-disabled)"
        : "var(--button-hover)"}; /* Grey when disabled, blue when active */
  }
`;
