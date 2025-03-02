import React from "react";
import { ModalWrapper, ModalContent, CloseButton } from "./Modal.styles";
import { ModalProps } from "../../types/types";

// Reusable Modal component that conditionally renders based on isOpen
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Prevent rendering if the modal is closed

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton> {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
