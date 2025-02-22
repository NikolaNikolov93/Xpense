import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  background: var(--card-background-color);
`;

export const Label = styled.label`
  font-size: 1em;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.8em;
  font-size: 1em;
`;

export const SubmitButton = styled.button`
  background-color: var(--primary-accent);
  color: var(--primary-text-color);
  padding: 0.7em 1.5em;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;

  &:hover {
    background-color: var(--button-hover);
  }
`;
