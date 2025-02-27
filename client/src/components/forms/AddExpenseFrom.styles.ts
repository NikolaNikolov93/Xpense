import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  input,
  select {
    padding: 0.8em;
    font-size: 1em;
    &:focus {
      outline: none;
      border-color: var(--primary-accent);
      box-shadow: var(--box-shadow-glow);
    }
  }
`;

export const Input = styled.input``;
export const Select = styled.select`
  color: black;
`;
