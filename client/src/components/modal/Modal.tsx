import React from "react";
import { ModalWrapper, ModalContent, CloseButton } from "./Modal.styles";

interface ModalProps {
  children: any;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children} {/* Render the modal content passed as children */}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
