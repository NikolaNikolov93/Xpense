import styled from "styled-components";

export const ModalContent = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
`;

export const ModalHeader = styled.div``;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  input,
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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

export const Select = styled.select`
  padding: 0.6em;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 0.6em;
`;
