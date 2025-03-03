import styled from "styled-components";

export const ModalContent = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

export const ModalHeader = styled.div`
  h2 {
    text-shadow: var(--box-shadow);
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  input,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 0.6em;
    color: black;
  }
  input,
  select:active {
    box-shadow: var(--box-shadow-glow);
  }
  label {
    font-weight: bold;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select``;

export const Input = styled.input``;
