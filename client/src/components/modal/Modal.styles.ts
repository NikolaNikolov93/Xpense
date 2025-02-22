import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: var(--card-background-color);
  padding: 1em;
  position: relative;
  min-width: 300px;
  max-width: 450px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.8em;
  right: 0.8em;
  background: none;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
  color: var(--primary-text-color);
`;
